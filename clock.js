function handleClock (){
const clock = document.getElementById('clock');
const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let millisecs = now.getMilliseconds();

hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
millisecs = formatMs(millisecs);

clock.textContent = `${hours}:${minutes}`
}
setInterval(handleClock, 1000);
handleClock();

function formatMs (ms){
    if (ms < 10){
        return "00" + ms;
    }
    if (ms < 100){
        return "0"+ ms;
    }
    return ms;
}