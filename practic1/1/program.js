function make1_1(A, B) {
  return A.concat(B);
}

function make1_3(array) {
  max = array[0];

  for(i = 0; i < array.length; i++) {
    if(array[i] > max) {
      max = array[i];
    }
  }

  min = array[0];

  for(i = 0; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i];
    }
  }

  array.splice(array.indexOf(min), 1);
  array.splice(array.indexOf(max), 1);
  return array;
}

console.log("Task 1.1");
A = [1, 2, 3];
B = [4, 5, 6];
console.log("A = " + A);
console.log("B = " + B);
console.log("Result = " + make1_1(A, B));

console.log("");

console.log("Task 1.3");
array = [12, 4, 3, 10, 1, 20];
console.log("array = " + array);
console.log("Result = " + make1_3(array));