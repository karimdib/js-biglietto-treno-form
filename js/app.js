
const inputDomElement = document.getElementById('kilometre');
console.log(inputDomElement);
let km
let finalPrice 

const selectionDomElement = document.getElementById('selection');
console.log(selectionDomElement);

const buttonDomElement = document.getElementById('button');
console.log(buttonDomElement);

const priceDomElement = document.getElementById('price');
console.log(priceDomElement);

buttonDomElement.addEventListener('click', function (){
    console.log(selectionDomElement.value)

    if (selectionDomElement.value === 'minorenne'){
        km = parseFloat(inputDomElement.value);
        finalPrice = km * 0.21
        finalPrice = finalPrice * 20 / 100

    }else if (selectionDomElement.value === 'anziano'){
        km = parseFloat(inputDomElement.value);
        finalPrice = km * 0.21
        finalPrice = finalPrice * 40 / 100

    }else if (selectionDomElement.value === 'maggiorenne'){
        km = parseFloat(inputDomElement.value);
        finalPrice = km * 0.21
    }
    
    priceDomElement.innerHTML = finalPrice.toFixed(2) + ' euro'
});

