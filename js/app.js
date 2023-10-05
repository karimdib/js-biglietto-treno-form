let km
const inputDomElement = document.getElementById('kilometre');
console.log(inputDomElement);

const selDomElement = document.getElementById('selection');
console.log(selDomElement);

const buttonDomElement = document.getElementById('button');
console.log(buttonDomElement);

const priceDomElement = document.getElementById('price');
console.log(priceDomElement);

buttonDomElement.addEventListener('click', function (){
    console.log(selDomElement.value)

    let finalPrice = km * 0.21

    if (selDomElement.value === 'a'){
        km = parseFloat(inputDomElement.value);
        finalPrice = finalPrice * 20 / 100

    }else if (selDomElement.value === 'b'){
        km = parseFloat(inputDomElement.value);
        finalPrice = finalPrice * 40 / 100
    }

    priceDomElement.innerHTML = finalPrice.toFixed(2) + ' euro'
});