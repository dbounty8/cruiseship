function Port(name, ships) {
  this.name = name;
  this.ships = ships;
}

Port.prototype = {
  addShip(ship) {
    this.ships = [ship];
  },

  removeShip(ship) {
    this.ships.splice(this.ships.indexOf(ship), 1);
    return this.ships;
  },
};

module.exports = {
  Port,
};
