const gotit = document.getElementById("result");
window.addEventListener("keydown", (e)=>{
gotit.innerHTML =`The Pressed Key is<h1>${e.key}</h1>`
});

