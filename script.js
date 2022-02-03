const dayse=document.getElementById('days');
const hourse=document.getElementById('hours');
const minse=document.getElementById('mins');
const secondse=document.getElementById('secondss');



const newYears='1 jan 2022';
function countdown(){
    const currentDate=new Date();
    const newyearDates=new Date(newYears);
    
    const totalseconds= (newyearDates-currentDate) / 1000;

    const days= Math.floor(totalseconds /3600/24);
    const hours=Math.floor(totalseconds /3600) %24;
    const minutes=Math.floor(totalseconds/60) % 60;
    const seconds=totalseconds %60;

   

dayse.innerHTML= formattime(days);
hourse.innerHTML=formattime(hours);

minse.innerHTML=formattime(minutes);
secondse.innerHTML=formattime(seconds);
}
function formattime(time){
return time<10 ? '0${time}': time;
}
countdown();
setInterval(countdown,1000);