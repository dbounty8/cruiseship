/* eslint-env jest */
const { Itinerary } = require('../src/Itinerary');

describe('Itinerary', () => {
  test('it can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  test('Sets the ports property', () => {
    const itinerary = new Itinerary([]);
    expect(itinerary.ports).toBeInstanceOf(Array);
  });
  test('can have ports', () => {
    const dover = jest.fn();
    const calais = jest.fn();
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
