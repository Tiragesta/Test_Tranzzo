'use strict';

const exchange = document.querySelector('.exchange-menu');
const text_1 = document.querySelector('.text_1');
const text_2 = document.querySelector('.text_2');
const ul = document.querySelector('ul');
const input = document.querySelector('.exchange-start img');
const result = document.querySelector('.exchange-end img');

exchange.addEventListener('click', handleExchangeImgClick);

function handleExchangeImgClick(evt) {
    evt.preventDefault();
        
    const action_1 = evt.target.childNodes[1].dataset.exchange;
    const action_2 = evt.target.childNodes[5].dataset.exchange;

    const actionText1 = evt.target.childNodes[1].alt;
    const actionText2 = evt.target.childNodes[5].alt;

    input.setAttribute('src', action_1);

    result.setAttribute('src', action_2);

    text_1.textContent = actionText1;

    text_2.textContent = actionText2;
};

//=============

const click = document.querySelector('.exchange-start');
const click2 = document.querySelector('.exchange-end');

click.addEventListener('click', handleAdd, );
click2.addEventListener('click', handleAdd);

function handleAdd() {

    if (!ul.classList.contains("visual")) {
        ul.classList.add('visual');
    } else {
        ul.classList.toggle('visual');
    }  
}

//============

const changeFirstPoint = document.querySelector('.nav-menu');

changeFirstPoint.addEventListener('click', handleChangeFirstPointMenu);

function handleChangeFirstPointMenu(evt) {
    evt.preventDefault();

    const btnChange = evt.target.lastChild.data;

    text_1.textContent = btnChange;
 
    if (btnChange === 'Bitcoin BTN') {
        input.setAttribute('src', 'img/bitcoin/bitcoin.png');
    } else if (btnChange === 'Visa/Mastercard UAH') {
        input.setAttribute('src', 'img/card/card.png');
    } else if (btnChange === 'AdvCash') {
        input.setAttribute('src', 'img/advcash/advcash.png');
    } else {
        input.setAttribute('src', 'img/etherium/etherium.png');
    }

    ul.classList.toggle('visual');
}

