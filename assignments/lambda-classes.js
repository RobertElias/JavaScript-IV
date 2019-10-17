// CODE here for your Lambda Classes

//Person Class

class Person {
  constructor(att) {
    this.name = att.name;
    this.age = att.age;
    this.location = att.location;
  }
  speak() {
    return `Hello my name is ${this.name} and I am from ${this.location}.`
  }
}



//Person constructor
const Robert = new Person({
  name: 'Robert Elias',
  age: 43,
  location: 'Orange County California'
})
//Person constructor
const Cynthia = new Person({
  name: 'Cynthia Elias',
  age: 39,
  location: 'Los Angeles California'

})

//Testing Person Class
console.log(`new Person is name ${Robert.name}`);
console.log(`new Person is from ${Robert.location}`);

console.log(`new Person is name ${Cynthia.name}`);
console.log(`new Person is from ${Cynthia.location}`);