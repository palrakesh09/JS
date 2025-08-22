// Enter the number of rows: 5
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

var n = 5;

console.log("First Pattern");
var output = "";

for(var i = 1; i <= n; i++){
    for(var j = 1; j <= i; j++){
        output = output + j + " ";
    }
    output = output + "\n";
}
console.log(output);

// Enter the number of rows: 5
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

output = "";

console.log("Second Pattern");
for(var i = n; i >= 1; i--){
    for(var j = 1; j <= i; j++){
        output = output + j + " ";
    }
    output = output + "\n";
}
console.log(output);

// Enter the number of rows: 5
//         1 
//       1 2 1 
//     1 2 3 2 1 
//   1 2 3 4 3 2 1 
// 1 2 3 4 5 4 3 2 1 

output = "";

console.log("Third Pattern");
for (let i = 1; i <= n; i++) {
  output += "  ".repeat(n - i); 

  for (let j = 1; j <= i; j++) {
    output += j + " ";
  }

  for (let j = i - 1; j >= 1; j--) {
    output += j + " ";
  }

  output += "\n";
}

console.log(output);

// Enter the number of rows: 4
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15

output = "";
var num = 1;

console.log("Fourth Pattern");
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    output += num + " ";
    num++; 
  }
  output += "\n";
}
console.log(output);

// Enter the number of rows: 5
//         1 
//       2 1 
//     3 2 1 
//   4 3 2 1 
// 5 4 3 2 1 

output = "";

console.log("Fifth Pattern");
for (let i = 1; i <= n; i++) {
  output += "  ".repeat(n - i);  

  for (let j = i; j >= 1; j--) {
    output += j + " ";
  }

  output += "\n";
}

console.log(output);

// Enter the number of rows (for half diamond): 5
//         1 
//       1 2 1 
//     1 2 3 2 1 
//   1 2 3 4 3 2 1 
// 1 2 3 4 5 4 3 2 1 
//   1 2 3 4 3 2 1 
//     1 2 3 2 1 
//       1 2 1 
//         1 

output = "";

console.log("Sixth Pattern");
for (let i = 1; i <= n; i++) {
  output += "  ".repeat(n - i); 

  for (let j = 1; j <= i; j++) {
    output += j + " ";
  }

  for (let j = i - 1; j >= 1; j--) {
    output += j + " ";
  }

  output += "\n";
}

for (let i = n - 1; i >= 1; i--) {
  output += "  ".repeat(n - i);

  for (let j = 1; j <= i; j++) {
    output += j + " ";
  }

  for (let j = i - 1; j >= 1; j--) {
    output += j + " ";
  }

  output += "\n";
}

console.log(output);

// Enter the number of rows: 5
//      1 
//     1 1 
//    1 2 1 
//   1 3 3 1 
//  1 4 6 4 1 

output = "";

console.log("Seventh Pattern");
for (let i = 0; i < n; i++) {
  let val = 1;
  output += " ".repeat(n - i);
  for (let j = 0; j <= i; j++) {
    output += val + " ";
    val = val * (i - j) / (j + 1);
  }
  output += "\n";
}
console.log(output);

// Enter the number of rows: 5
// 1 2 3 4 5 4 3 2 1 
//   1 2 3 4 3 2 1 
//     1 2 3 2 1 
//       1 2 1 
//         1 


output = "";

console.log("Eighth Pattern");
for (let i = n; i >= 1; i--) {
  output += "  ".repeat(n - i); 

  for (let j = 1; j <= i; j++) {
    output += j + " ";
  }

  for (let j = i - 1; j >= 1; j--) {
    output += j + " ";
  }

  output += "\n";
}

console.log(output);

// Enter the size of the square: 5
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 

output = "";

console.log("Ninth Pattern");
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    output += j + " ";
  }
  output += "\n";
}
console.log(output);

// Enter the size of the square: 5
// 1 1 1 1 1 
// 2       2 
// 3       3 
// 4       4 
// 5 5 5 5 5 


output = "";

console.log("Tenth Pattern");
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n || j === 1 || j === n) {
      output += i + " ";
    } else {
      output += "  ";
    }
  }
  output += "\n";
}

console.log(output);
