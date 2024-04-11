const endDate= "21 MAY 2024 12:00 AM";
const inputs = document.querySelectorAll("input");

function clock(){
    const final = new Date(endDate);
    const now = new Date();
    let difference =((final - now)/1000);
    if(difference>0){
    inputs[0].value = Math.floor(difference / 3600 / 24); // days
    inputs[1].value = Math.floor((difference / 3600) % 24); // hours
    inputs[2].value = Math.floor((difference / 60 ) % 60); // minutes
    inputs[3].value = Math.floor((difference) % 60); // seconds
    console.log(day);
}
else{
    inputs[0].value = 0 ;// days
    inputs[1].value = 0 ;// hours
    inputs[2].value = 0 ;// minutes
    inputs[3].value = 0; // minutes
}
}

setInterval(
    ()=>{
        clock();
    }
    ,200);

// 1 day = 24 ghnte
// 1 ghnte = 60 min 
// 60 min = 3600 sec
// 1 second = 1000ms