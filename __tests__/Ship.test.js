/* eslint-env jest */
const { Ship } = require('../src/Ship');
const { Port } = require('../src/Port');
const { Itinerary } = require('../src/Itinerary');

describe('Ship', () => {
  test('it can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });

  test('Sets the currentPort property', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });

  test('can set sail', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(port.ships).not.toContain(ship);
  });

  test('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });

  test('gets added to port on instantiation', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(port.ships).toContain(ship);
  });
});

