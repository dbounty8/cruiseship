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

  test('can add a ship', () => {
    const port = new Port('Dover');
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });

  test('remove a ship', () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic]);
  });
});
