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
});
