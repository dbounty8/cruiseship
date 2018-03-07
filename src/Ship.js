function Ship(currentPort) {
  this.currentPort = currentPort;
}

Ship.prototype = {
  setSail() {
    this.currentPort = false;
  },

  dock(port) {
    this.currentPort = port;
  },
};

module.exports = {
  Ship,
};
