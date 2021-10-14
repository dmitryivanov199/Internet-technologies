function make4_1(object, fieldName, n) {
  for(i = 0; i < n; i++) {
    console.log(object);
    object[fieldName]++;
  }
}

function make4_2(cache) {
  while(true) {
    n = Math.round(1 - 0.5 + Math.random() * (100 - 1 + 1));
    flag = true;

    for(i = 0; i < cache.length; i++) {
      if(n === cache[i]) {
        flag = false;
        break;
      }
    }

    if(flag) {
      cache.push(n);
      return n;
    }
    else {
      continue;
    }
  }
}

function make4_3(n) {
  return (n === 0)? 1 : n * make4_3(n - 1);
}

function comparePrices(good1, good2) {
  fieldName = "price"
  return good1[fieldName] - good2[fieldName];
}

function make4_4(array) {
  array.sort(comparePrices);
}

console.log("Task 4.1");
let a = {
  name: "static",
  count: 0
}
console.log("a =", a);
make4_1(a, "count", 10);

console.log("");

console.log("Task 4.2");
cache = [];

for(i = 0; i < 100; i++) {
  console.log(make4_2(cache));
}

console.log("");

console.log("Task 4.3");
n = 5;
console.log("n = " + n);
console.log("Result = ", make4_3(n));

console.log("");

console.log("Task 4.4");
arr = [{"price": 10, "count": 2}, {"price": 5, "count": 5}, {"price": 8, "count": 5}, {"price": 12, "count": 4}, {"price": 8, "count": 4}];

for(i = 0; i < arr.length; i++) {
  for(j in arr[i]) {
    console.log(j + ": " + arr[i][j]);
  }

  console.log("");
}

make4_4(arr);
console.log("Result =", arr);