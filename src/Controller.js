/* eslint-env browser */
/* globals window */

(function exportController() {
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
        const viewport = document.getElementById('viewport');
        viewport.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;
        backgroundIndex += 1;
        if (backgroundIndex === backgrounds.length) {
          backgroundIndex = 0;
        }
      }, 1000);
    },

    renderPorts(portsArray) {
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = 0;

      portsArray.forEach(function(port) {
        const div = document.createElement("div");
        div.setAttribute('class', 'port');
      }
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.controller = Controller;
  }
}());
