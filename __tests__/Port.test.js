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
});
