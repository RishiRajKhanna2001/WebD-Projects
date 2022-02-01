console.log("clock");

// let music = new Audio(`sound.mp3`);
// music.play();

const alarmSubmit=document.getElementById('alarmSubmit').addEventListener('click',setAlarm);

let music = new Audio(`sound.mp3`);//global variable

function ringBell() {
music.play();
}

function setAlarm(e) {
    e.preventDefault();
    const alarm=document.getElementById('alarm');
    alarmDate=new Date(alarm.value);
    console.log(`Setting alarm for ${alarm.value}`);
    now=new Date();

    let time=alarmDate-now;
    console.log(time);

    if(time>=0)
    {
        setTimeout(()=>{
            console.log("ringing bell");
         ringBell();
        },time);
    }
}

function updateClock() {
    let currentTime=new Date();
    let hour=currentTime.getHours();
    let minute=currentTime.getMinutes();
    let second=currentTime.getSeconds();

    hour=(hour<10?"0":"")+hour; 
    minute=(minute<10?"0":"")+minute; 
    second=(second<10?"0":"")+second; 

    let timeOfDay=(hour<12)?"AM":"PM";
     
    hour=(hour>12)?hour-12:hour;
    hour=(hour==0)?12:hour;
    let timeStr=hour+":"+minute+":"+second+" "+timeOfDay;

    document.getElementById('clock').innerHTML=timeStr;

}