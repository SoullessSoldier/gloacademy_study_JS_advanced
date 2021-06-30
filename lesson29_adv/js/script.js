document.addEventListener('DOMContentLoaded', ()=>{
    'use strict';
    //const API_KEY = '924c8d331216c33f0e19e2637cbbfa03';
    const API_KEY = 'efa10e326dc8b107c76e';
    /*
    let url = `https://api.exchangeratesapi.io/v1/latest
    ?access_key=${API_KEY}
    & base = RUB
    & symbols = USD, EUR`;
    */
    const baseCurrencies = ['RUB', 'USD', 'EUR'];

    const currencyFrom = document.getElementById('currency-from');
    const currencyTo = document.getElementById('currency-to');
    const amount = document.getElementById('amount');
    const btnCalc = document.querySelector('.calculate'),
        calcStatus = document.querySelector('.calculator-status');

    const calculatorResult = document.querySelector('.calculator-result');
    const errorMessage = 'Проблема при загрузке курсов валют',
        preloadMessage = `<section>
            <div class='sk-three-bounce'>
              <div class='sk-bounce-1 sk-child'></div>
              <div class='sk-bounce-2 sk-child'></div>
              <div class='sk-bounce-3 sk-child'></div>
            </div>
          </section>`;

    //init
    const init = () => {
        buildSelect(baseCurrencies, currencyFrom);
        let arrCurrenciesTo = baseCurrencies.filter(item => item !== currencyFrom.value);
        buildSelect(arrCurrenciesTo, currencyTo);
        amount.value = 100.00;
        };

    currencyFrom.addEventListener('change', (event)=>{
        let target = event.target;
        let arrCurrenciesTo = baseCurrencies.filter(item => item !== target.value);
        buildSelect(arrCurrenciesTo, currencyTo);
    });

    btnCalc.addEventListener('click', (event) => {
        event.preventDefault();
        calcStatus.innerHTML = '';
        const statusMessage = document.createElement('div');
        statusMessage.classList.add('preloader-block');
        calcStatus.appendChild(statusMessage);
        statusMessage.innerHTML = preloadMessage;
        //--
        //let url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&base=${currencyFrom.value}&symbols=${currencyTo.value}`;
        let currencyPair = currencyFrom.value + '_' + currencyTo.value;
        let url = `https://free.currconv.com/api/v7/convert?q=${currencyPair}&compact=ultra&apiKey=${API_KEY}`;
        fetch(url)
            .then(response => {
                if(!response.ok){
                    calcStatus.innerHTML = '';
                    calcStatus.textContent = errorMessage;
                    throw new Error('Ошибка при работе API', response.text());
                }
                calcStatus.innerHTML = '';
                //console.log(response);
                return response.json()
                                   
            })
            .then(data=>writeResult(data))
            .catch(response => console.error('Error in response: ', response));
    });
    
    const writeResult = (data) => {
        let currencyPair = currencyFrom.value + '_' + currencyTo.value;
        data = JSON.parse(JSON.stringify(data));
        //console.log('data: ', data);
        let course = data[currencyPair];
        //console.log('course: ', course);

        if (isNumber(course)){
            let result_amount = +amount.value * course;
            let resultString = `${amount.value} ${currencyFrom.value}
                составляет ${result_amount.toFixed(4)} ${currencyTo.value}`;
            calculatorResult.textContent = '';
            calculatorResult.textContent = resultString;

        } else console.error(typeof course, course)
    };

    const isNumber = (n) => {
        return Number(n)=== n;
    }

    const buildSelect = (arr, element) => {
        while(element.firstChild){
            element.removeChild(element.lastChild);
        }
        arr.forEach(item=>{
            let option = document.createElement('option');
            option.value = item;
            option.textContent=item;
            element.appendChild(option);
        });
    };

    init();
});