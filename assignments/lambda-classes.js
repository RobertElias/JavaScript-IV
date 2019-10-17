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

//Instructor class 

class  Instructor extends Person{
  constructor(att){
    super(att);
    this.specialty = att.specialty;
    this.favLanguage = att.favLanguage;
    this.catchPhrase = att.catchPhrase;
  }
  demo(subject){
    return `Today we are learning ${subject}`;
  }
  grade(student){
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}



//Person Object
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


//Instructor  Object

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

//Testing Person Class
console.log(`new Person is name ${Robert.name}`);
console.log(`new Person is from ${Robert.location}`);

console.log(`new Person is name ${Cynthia.name}`);
console.log(`new Person is from ${Cynthia.location}`);

//Testing Instructor Class

console.log(fred);
console.log(fred.speak());