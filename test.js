
function Person(name, age, height){
  this.name = name;
  this.age = age;
  this.height = height;
}

x = new Person("Paul", 32, "180cm");

console.log(x.name);
console.log(x.age);
console.log(x.height);
