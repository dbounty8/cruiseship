const { ship } = require('../src/ship')
//is this a constructor, revise

test ('creates an object called ship', () => {
    expect(ship).toBeInstanceOf(Object);

});
