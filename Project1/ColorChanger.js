const buttons = document.querySelectorAll('.btn');
const body = document.body;

buttons.forEach( (btn) => {
    console.log(btn);
    btn.addEventListener('click' ,(event) => {
        // console.log(event);
        // console.log(event.target);
        if(event.target.id === 'black') {
            body.style.backgroundColor= event.target.id;    
        }
        if(event.target.id === 'grey') {
            body.style.backgroundColor= 'slateblue';    
        }
        if(event.target.id === 'blue') {
            body.style.backgroundColor= event.target.id;    
        }
    })
});