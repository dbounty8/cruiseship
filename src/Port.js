function Port(name, ships) {
  this.name = name;
  this.ships = ships;
}

Port.prototype = {
  addShip(ship) {
    this.ships = [ship];
  },

  removeShip(ship) {
    const indexOfShip = this.ships.indexOf(ship);
    const removedShip = this.ships.splice(indexOfShip, 1);
    return this.ships;
  },
};

module.exports = {
  Port,
};
