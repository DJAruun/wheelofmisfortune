// Immediately invoked function expression
// to not pollute the global scope
(function() {

const wheel = document.querySelector('.wheel');
const startButton = document.querySelector('.button');
let deg = 0;

startButton.addEventListener('click', () => {
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = 'all 10s cubic-bezier(0,.95,.75,1) 0ms';
    wheel.style.transform = `rotate(${deg}deg)`;
});

wheel.addEventListener('transitionend', () => {
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
})

})();