const { Ship } = require('../src/Ship');

describe('Ship', () => {
  test('it can be instantiated', () => {
    expect(new Ship).toBeInstanceOf(Object);
  });

  test('Sets the startingPort property', () => {
    const ship = new Ship('Dover');
    expect(ship.startingPort).toEqual('Dover');
  });
});
