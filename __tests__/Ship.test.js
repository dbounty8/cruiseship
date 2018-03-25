/* eslint-env jest */
const { Ship } = require('../src/Ship');

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath; 

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
    test('can not set sail in stormy weather', () => {
      expect(ship.setSail).toThrow('Cannot set sail. Weather too stormy');
      expect(ship.currentPort).toEqual(port);
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
