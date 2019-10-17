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
// Student Class
class Student extends Person{
  constructor(att){
    super(att);
    this.previousBackground = att.previousBackground;
    this.className = att.className;
    this.favSubjects = att.favSubjects;
  }
  listsSubjects(){
    return `${this.name} likes ${this.favSubjects}`
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}.`
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
//Instructor  Object
const omar = new Instructor ({
  name: 'Omar',
  location: 'San Juan Cap',
  age: 29,
  favLanguage: 'Python',
  specialty: 'Databases',
  catchPhrase: `SQL all the way`
})

//Student Object
const Claudia = new Student ({
  name: 'Claudia Perez',
  age: 32,
  location: 'Aliso-Viejo, California',
  previousBackground: 'Chemical Engineering',
  className: 'DS-21',
  favSubjects: 'C#',
});

//Student Object
const Tony = new Student ({
  name: 'Tony Bracamontes',
  age: 35,
  location: 'San Juan Capo, California',
  previousBackground: 'Mathematics',
  className: 'DS-21',
  favSubjects: 'C++',
});

//Testing Person Class
console.log(`new Person is name ${Robert.name}`);
console.log(`new Person is from ${Robert.location}`);

console.log(`new Person is name ${Cynthia.name}`);
console.log(`new Person is from ${Cynthia.location}`);

//Testing Instructor Class
console.log(fred);
console.log(fred.speak());
console.log(omar);
console.log(omar.speak());
console.log(omar.demo("Python Algorithms."));

//Testing Student Class
console.log(Tony);
console.log(Tony.listsSubjects());
console.log(Tony.sprintChallenge("React"));

console.log(Claudia);
console.log(Claudia.listsSubjects());
console.log(Claudia.sprintChallenge("Java"));

