let displayHours= document.getElementById("displayHours")
let displayMinutes= document.getElementById("displayMinutes")
let displaySeconds= document.getElementById("displaySeconds")


function currentTime(){

let today = new Date();
let	hours = today.getHours(); // Provides current hour between 0-23.
let	minutes = today.getMinutes(); // Provides current minutes between 0-59.
let seconds = today.getSeconds(); // Provides current seconds between 0-59.

let showHours = `${hours}:`
let showMinutes = `${minutes}:`
let showSeconds = `${seconds}`

displayHours.innerHTML = showHours;
displayMinutes.innerHTML = showMinutes;
displaySeconds.innerHTML = showSeconds;

let t = setTimeout(function(){ currentTime() }, 1000); 
}

currentTime();




