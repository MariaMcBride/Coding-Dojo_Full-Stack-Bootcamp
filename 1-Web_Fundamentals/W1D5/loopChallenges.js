// 1. Print odds 1-20: Using a loop write code that will console.log all of the odd values from 1 up to 20.

// Best answer -
for (var i = 1; i < 20; i += 2) {
  console.log(i);
}

var i = 1;
while (i <= 20) {
  console.log(i);
  i += 2;
}
// My answer -
for (var i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

var i = 1;
while (i <= 20) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i++;
}

// 2. Decreasing Multiples of 3: Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

// Best answer -
for (var i = 100; i > -1; i--) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

var i = 100;
while (i > -1) {
  if (i % 3 == 0) {
    console.log(i);
  }
  i--;
}
// My answer -
for (var i = 100; i >= 0; i--) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

var i = 100;
while (i >= 0) {
  if (i % 3 == 0) {
    console.log(i);
  }
  i--;
}

// 3. Print the sequence: Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

// Best answer -
for (var i = 4; i > -4; i -= 1.5) {
  console.log(i);
}
// Other answer -
var value = 5.5;
for (var i = 0; i <= 5; i++) {
  value -= 1.5;
  console.log(value);
}

// 4. Sigma: Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

// Best answer -
var sum = 0;
for (var i = 1; i < 101; i++) {
  sum += i;
}
console.log(sum);
// My answer -
function sigma() {
  var sum = 0;
  for (var i = 1; i < 100; i++) {
    sum += i;
  }
  console.log(i + sum);
}

sigma();
// If printing out the sequence as well as answer -
function sigma(lowNum, highNum) {
  var sum = lowNum;
  var sequence = lowNum + " + ";
  for (var i = lowNum + 1; i < highNum; i++) {
    sum += i;
    sequence += i + " + ";
  }
  sum += i;
  sequence += i;
  console.log(sequence + " = " + sum);
  return sum, sequence;
}

sigma(1, 100);

// 5. Factorial: Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

// Best answer -
var product = 1;
for (var i = 1; i < 13; i++) {
  product *= i;
}
console.log(product);
// My answer -
function factorial() {
  var product = 1;
  for (var i = 1; i < 12; i++) {
    product *= i;
  }
  console.log(i * product);
}

factorial();
// Using an array
function factorial(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
  return product;
}
console.log(factorial([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
// Supposed to print out the sequence but it's not working...
function factorial(lowNum, highNum) {
  var product = lowNum;
  var sequence = lowNum + " * ";
  for (var i = lowNum; i < highNum; i++) {
    product *= i;
    sequence *= i + " * ";
  }
  product *= i;
  sequence *= i;
  console.log(sequence + " = " + product);
  return product, sequence;
}

factorial(1, 12);
