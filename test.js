var x = {
  name:"Paul",
  getName : function(){
    return this.name;
  }
}

console.log(x.getName());

var y = new Object();
y.name = "Paul"
y.getName = function(){
    return this.name;
}

console.log(y.getName());

function person(name){
  this.name = name;
  this.getName = function(){
    return this.name;
  }
}

var z = new person("Paul");
console.log(z.getName());
