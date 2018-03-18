/* eslint-env jest */
const { Port } = require('../src/Port');

describe('Port', () => {
  test('it can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  test('Sets the name property', () => {
    const port = new Port('Dover');
    expect(port.name).toEqual('Dover');
  });

  test('Sets the ships property to an empty array', () => {
    const port = new Port('Dover');
    expect(port.ships).toEqual([]);
  });

  test('can add a ship', () => {
    const port = new Port('Dover');
    const ship = jest.fn();
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });

  test('remove a ship', () => {
    const port = new Port('Dover');
    const titanic = jest.fn();
    const queenMary = jest.fn();
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic]);
  });
});
