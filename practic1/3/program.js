function make3_1(array1, array2) {
  if(array1.length == array2.length) {
    for(i = 0; i < array1.length; i++) {
      if(array1[i] === array2[i]) {
        continue;
      }
      else {
        return false;
      }
    }

    return true;
  }

  return false;
}

function make3_2(start, stop, step=1) {
  array = [];

  if(start > stop || isNaN(start) || isNaN(stop) || isNaN(step)) {
    return array;
  }

  while(start <= stop) {
    array.push(start);
    start += step;
  }

  return array;
}

function make3_3(object) {
  for(i in object) {
    console.log(i + ": " + object[i]);
  }
}

console.log("Task 3.1");
array1 = [1, 2, "3", true];
array2 = [1, 2, "3", true];
console.log("array1 = " + array1 + "; array2 = " + array2);
console.log("Result = " + make3_1(array1, array2));

console.log("");

console.log("Task 3.2");
start = 1;
stop = 10;
step = 2;
console.log("start = " + start + ", stop = " + stop + ", step = " + step);
console.log("Result = " + make3_2(start, stop, step));

console.log("");

console.log("Task 3.3");
student = {
  name: "Ivan",
  surname: "Petrov",
  age: 21,
  interests: ["reading", "cooking", "football"],
  studyPlace: "SUAI"
};
make3_3(student);