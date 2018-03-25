/* eslint-env jest */
const { Ship } = require('../src/Ship');

describe('Ship', () => {
  describe('with a port and itinerary', () => {
    let ship;
    let port;
    beforeEach(() => {
      port = {
        name: 'Dover',
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
      const itinerary = {
        ports: [port],
      };
      ship = new Ship(itinerary);
    });
    test('it can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    test('Sets the currentPort property', () => {
      expect(ship.currentPort).toBe(port);
    });
    test('can set sail', () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(port.removeShip).toHaveBeenCalledWith(ship);
    });
    test('gets added to port on instantiation', () => {
      expect(port.addShip).toHaveBeenCalledWith(ship);
    });
  });

  test('can dock at a different port', () => {
    const dover = {
      name: 'Dover',
      removeShip: jest.fn(),
      addShip: jest.fn(),
    };
    const calais = {
      name: 'Calais',
      removeShip: jest.fn(),
      addShip: jest.fn(),
    };
    const itinerary = {
      ports: [dover, calais],
    };
    const ship = new Ship(itinerary);
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.addShip).toHaveBeenCalledWith(ship);
  });
});
