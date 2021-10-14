function make2_1(string) {
  sum = 0;
  
  for(i = 0; i < string.length; i++) {
    digit = parseInt(string[i]);

    if(isNaN(digit)) {
      continue;
    }
    else {
      sum += digit;
    }
  }

  return sum;
}

function make2_2(string, character) {
  i = 0;

  while(i < string.length) {
    if(string[i] === character) {
      string = string.slice(0, i + 1) + character + string.slice(i + 1);
      i++;
    }

    i++;
  }

  return string;
}

function make2_3() {
  password = prompt("Input password");
  result = password.match(/(?=(.*[0-9]){3,})(?=.*[#$%!])(?=.*[a-z])(?=.*[A-Z]).{9,}/);

  if(result === null) {
    alert("Incorrect password!");
  }
  else {
    alert("You have authorized successfully!");
  }
}

console.log("Task 2.1");
n = "3662637";
console.log("n = " + n);
console.log("Result = " + make2_1(n));

console.log("");

console.log("Task 2.2");
string = "On the first part of the jorney...";
character = "t";
console.log("string = " + string + ", character = " + character);
console.log("Result: " + make2_2(string, character));

console.log("");

console.log("Task 2.3");
make2_3();
console.log("You have entered your password");