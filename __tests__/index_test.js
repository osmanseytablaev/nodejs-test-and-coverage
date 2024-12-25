const sayHello = require('../index');

describe('sayHello Function', () => {
  test('should return "Hello World"', () => {
    expect(sayHello()).toBe('Hello World');
  });

  // Example of another simple test just for demonstration.
  test('should be of type string', () => {
    expect(typeof sayHello()).toBe('string');
  });
});
