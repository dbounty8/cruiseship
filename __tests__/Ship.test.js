const { Ship } = require('../src/Ship');
const { Port } = require('../src/Port');

describe('Ship', () => {
  test('it can be instantiated', () => {
    expect(new Ship).toBeInstanceOf(Object);
  });

  test('Sets the currentPort property', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });

  test('can set sail', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });

  test('can dock at a different port', () => {
    const dover = new Port('Dover');
    const ship = new Ship(dover);
    const calais = new Port('Calais');

    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
});

