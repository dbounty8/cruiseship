/* globals window */

(function exportPort() {
  function Port(name) {
    this.name = name;
    this.ships = [];
  }

  Port.prototype = {
    addShip(ship) {
      this.ships.push(ship);
    },

    removeShip(ship) {
      this.ships.splice(this.ships.indexOf(ship), 1);
      return this.ships;
    },
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.port = Port;
  }
}());
