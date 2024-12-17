document.addEventListener("DOMContentLoaded" ,() =>{
    const newYear = new Date('1 Jan 2025 00:00:00');
    const myTime = new Date();
    const daysVal = document.querySelector("#days");
    const hoursVal = document.querySelector("#hours");
    const minsVal = document.querySelector("#mins");
    const secondsVal = document.querySelector("#seconds");

    const daysTex = document.querySelector(".text-days");
    const hourTex = document.querySelector(".hour-days");
    const minTex = document.querySelector(".min-days");
    const secTex = document.querySelector(".sec-days");

    function timeCount(){
        
        const lessTime = newYear - myTime;
        let days = Math.floor(lessTime / 1000 / 60 / 60 / 24);
        let hours = Math.floor(lessTime / 1000 / 60 / 60 ) % 24;
        let min = Math.floor(lessTime / 1000 / 60 ) % 60;
        let sec = Math.floor(lessTime / 1000 ) % 60;
        
        function declOfNum(number, titles) {  
            cases = [2, 0, 1, 1, 1, 2];  
            return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
        }

        daysVal.textContent = redactTime(days);
        hoursVal.textContent = redactTime(hours);
        minsVal.textContent = redactTime(min);
        secondsVal.textContent = redactTime(sec);
        
        daysTex.textContent = declOfNum(days,['день','дні','днів']);
        hourTex.textContent = declOfNum(hours,['година','години','годин']);
        minTex.textContent = declOfNum(min,['хвилина',"хвилини",'хвилин']);
        secTex.textContent = declOfNum(sec,['секунда','секунди','секунд']);  
    }   
    timeCount()
    setInterval(timeCount,1000)
   function redactTime(time){
    return time<10 ? `0${time}` : time;
   }
    if(myTime === newYear){
        remove.setInterval();
        return alert("URAAAAAA 2025!!!!!")
   }
})



