function func(array){
  arguments[0][1] = 200;
}

var x = [1,2,3];
func(x);
console.log(x[1]);

//=>4
