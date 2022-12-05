//BALÃO 1

const el = document.querySelector("#texto");
const text = "Olá, sejam todos bem-vindos ao HOVER BURGUER";
var interval = 100;

function showText(el, text){

    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;
    }, interval);

    setTimeout(function (){showText2(el2, text2, interval2)}, 11000);
}

//BALÃO 2

showText(el, text);

const el2 = document.querySelector(".textodois");
const text2 = "Meu nome é Bob, e hoje eu serei o seu GUIA";
const interval2 = 100;

function showText2(el2, text2, interval2){

    const char = text2.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();

        el2.innerHTML += next;
    }, interval2);

    setTimeout(function (){showText3(el3, text3, interval3)}, 10000);
}

//BALÃO 3;

const el3 = document.querySelector(".tres");
const text3 = "Nosso site da hover é feito totalmente na HORIZONTAL, por isso, irei ajudá-lo durante toda a sua caminhada no site.";
const interval3 = 80;

function showText3(el3, text3){

    const char = text3.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();

        el3.innerHTML += next;
    }, interval3);
}