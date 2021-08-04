console.log("Wel-Come to Universal Clock");


setInterval(() => {
    // resource
    let details = document.querySelector("#details");
    let handHour = document.querySelector(".hour");
    let handMinute = document.querySelector(".minute");
    let handSecond = document.querySelector(".second");

    // date
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // detailed time
    details.innerText = date;

    // Real clock 
    hourRotate = 30 * hour + minute / 2;
    minuteRotate = 6 * minute + second / 10;
    secondRotate = 6 * second;

    handHour.style.transform = `rotate(${hourRotate}deg)`;
    handMinute.style.transform = `rotate(${minuteRotate}deg)`;
    handSecond.style.transform = `rotate(${secondRotate}deg)`;
}, 10);