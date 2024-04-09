function RandomColor() {
  let hex = "#";
  const colorcode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    hex += colorcode[Math.floor(Math.random() * 16)];
  }
  return hex;
};

function bgcolor() {
    document.body.style.backgroundColor = RandomColor();
  }
let IID = null;
const strat = function () {
if (!IID) {
  IID = setInterval(bgcolor, 500);}
};
document.getElementById('start').addEventListener('click', strat);
document.getElementById('stop').addEventListener('click', () => {
  clearInterval(IID);
  IID = null;
});
