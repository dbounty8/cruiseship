const { Ship } = require('../src/Ship');

describe('Ship', () => {
  test('it can be instantiated', () => {
    expect(new Ship).toBeInstanceOf(Object);
  });
});
