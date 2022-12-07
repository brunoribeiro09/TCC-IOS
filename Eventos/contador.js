const startMinutos = 20;
const hr = 7
let time = startMinutos * 60;

const countDown = document.getElementById('contador');

setInterval(updateContador,1000)

function updateContador(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDown.innerHTML = `0${hr}:${minutes}:${seconds}`;time--;
};