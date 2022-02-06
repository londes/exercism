//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

var HelloWorld = function() {
  return 'Hello, World!'
};

HelloWorld.prototype.hello = function(input) {
  /*if (input==='') {
    return 'Hello, World!'
  }
  else if (input==='Bob') {
    return 'Hello, Bob!';
  }
  else if (input==='Sally'){
    return 'Hello, Sally!';
  }*/
  var name = input || 'World';
  return 'Hello, ' +name+ '!';
};

module.exports = HelloWorld;