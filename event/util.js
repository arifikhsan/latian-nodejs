let events = require('events');
let util = require('util');

let Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ryu');

let people = [james, mary, ryu];
people.forEach(function(person) {
  person.on('speak', function(message) {
    console.log(person.name + ' said ' + message);
  });
});

james.emit('speak', 'hey dude');
ryu.emit('speak', 'I want a curry');
