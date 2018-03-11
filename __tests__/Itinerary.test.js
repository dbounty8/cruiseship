/* eslint-env jest */
const { Itinerary } = require('../src/Itinerary');
const { Port } = require('../src/Port');

describe('Itinerary', () => {
  test('it can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  test('Sets the ports property', () => {
    const itinerary = new Itinerary([]);
    expect(itinerary.ports).toBeInstanceOf(Array);
  });
  test('can have ports', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
