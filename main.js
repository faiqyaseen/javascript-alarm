console.log("Hello Alarm!");

let alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click',setAlarm);

var audio = document.getElementById('audio');

function ringBell(){
    audio.play();
}
function setAlarm(e){
    e.preventDefault(); 
    const alarm = document.getElementById('alarm');
    alarmDate  = new Date(alarm.value)
    console.log(`Setting Alarm ${alarmDate}`);
    now  = new Date();
    let timeToAlarm = alarmDate - now
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(()=>{
            ringBell();
        },timeToAlarm)
    }

}

let alarmStop = document.getElementById('alarmStop');
alarmStop.addEventListener('click',(e)=>{
    e.preventDefault()
    audio.pause();
})