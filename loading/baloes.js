const el = document.querySelector(".um");
const text = "Olá, sejam todos bem-vindos ao HOVER BURGUER";
const interval = 100;

function showText(el, text, interval){

    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;
    }, interval);
}

showText(el, text, interval);

//

const el2 = document.querySelector(".dois");
const text2 = "Meu nome é Bob, e hoje eu serei o seu GUIA";
const interval2 = 150;

function showText2(el2, text2, interval2){

    const char = text2.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();

        el2.innerHTML += next;
    }, interval2);
}

showText2(el2, text2, interval2);

//

const el3 = document.querySelector(".tres");
const text3 = "Nosso site da hover é feito totalmente na HORIZONTAL, por isso, irei ajudá-lo durante toda a sua caminhada no site.";
const interval3 = 0;

function showText2(el3, text3, interval3){

    const char = text3.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();

        el3.innerHTML += next;
    }, interval3);
}

showText2(el3, text3, interval3);