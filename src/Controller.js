/* eslint-env browser */
function Controller() {
  this.initialiseSea();
}

Controller.prototype = {
  initialiseSea() {
    const backgrounds = [
      './images/water0.png',
      './images/water1.png',
    ];
    let backgroundIndex = 0;
    setInterval(() => {
      const viewport = document.getElementById('#viewport');
      viewport.style.backgroundImage = url('${backgrounds[backgroundIndex]}');
    }, 1000);
  },
};

