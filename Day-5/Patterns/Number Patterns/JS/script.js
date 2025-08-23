// Number triangle Pattern
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

let n = 5;

document.write("First Pattern" + "<br>");
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
      document.write(j + " ");
    }
    document.write("<br>")
}

// Inverted Number triangle Pattern
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

document.write("Second Pattern" + "<br>");
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      document.write(j + " ");
    }
    document.write("<br>");
  }

// Number pyramid Pattern
//         1 
//       1 2 1 
//     1 2 3 2 1 
//   1 2 3 4 3 2 1 
// 1 2 3 4 5 4 3 2 1 

document.write("Third Pattern" + "<br>");
  for (let i = 1; i <= n; i++) {
    for (let s = 1; s <= n - i; s++) {
      document.write("&nbsp;&nbsp;&nbsp;");
    }

    for (let j = 1; j <= i; j++) {
      document.write(j + " ");
    }

    for (let j = i - 1; j >= 1; j--) {
      document.write(j + " ");
    }

    document.write("<br>");
  }

// continuous number triangle Pattern
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15

let num = 1;

document.write("Fourth Pattern" + "<br>");
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(num + " ");
      num++;
    }
    document.write("<br>");
  }

// right-aligned number triangle Pattern
//         1 
//       2 1 
//     3 2 1 
//   4 3 2 1 
// 5 4 3 2 1 

document.write("Fifth Pattern" + "<br>");
  for (let i = 1; i <= n; i++) {
    for (let s = 1; s <= n - i; s++) {
      document.write("&nbsp;&nbsp;&nbsp;");
    }

    for (let j = i; j >= 1; j--) {
      document.write(j + " ");
    }

    document.write("<br>");
  }

// diamond-shaped number pyramid Pattern
//         1 
//       1 2 1 
//     1 2 3 2 1 
//   1 2 3 4 3 2 1 
// 1 2 3 4 5 4 3 2 1 
//   1 2 3 4 3 2 1 
//     1 2 3 2 1 
//       1 2 1 
//         1 

document.write("Sixth Pattern" + "<br>");
  for (let i = 1; i <= n; i++) {
    for (let s = 1; s <= n - i; s++) {
      document.write("&nbsp;&nbsp;&nbsp;");
    }

    for (let j = 1; j <= i; j++) {
      document.write(j + " ");
    }

    for (let j = i - 1; j >= 1; j--) {
      document.write(j + " ");
    }

    document.write("<br>");
  }

  for (let i = n - 1; i >= 1; i--) {
    for (let s = 1; s <= n - i; s++) {
      document.write("&nbsp;&nbsp;&nbsp;");
    }

    for (let j = 1; j <= i; j++) {
      document.write(j + " ");
    }

    for (let j = i - 1; j >= 1; j--) {
      document.write(j + " ");
    }

    document.write("<br>");
  }

// pascal's triangle pattern
//      1 
//     1 1 
//    1 2 1 
//   1 3 3 1 
//  1 4 6 4 1 

document.write("Seventh Pattern" + "<br>");
  for (let i = 0; i < n; i++) {
    for (let s = 1; s <= n - i; s++) {
      document.write("&nbsp;&nbsp;");
    }

    let value = 1;
    for (let j = 0; j <= i; j++) {
      document.write(value + "&nbsp;&nbsp;");

      value = value * (i - j) / (j + 1);
    }

    document.write("<br>");
  }


// inverted number palindrome pyramid pattern
// 1 2 3 4 5 4 3 2 1 
//   1 2 3 4 3 2 1 
//     1 2 3 2 1 
//       1 2 1 
//         1 

document.write("Eighth Pattern" + "<br>");
  for (let i = n; i >= 1; i--) {
    for (let s = 1; s <= n - i; s++) {
      document.write("&nbsp;&nbsp;&nbsp;");
    }

    for (let j = 1; j <= i; j++) {
      document.write(j + " " );
    }

    for (let j = i - 1; j >= 1; j--) {
      document.write(j + " ");
    }

    document.write("<br>");
  }

// number square pattern
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 

document.write("Ninth Pattern" + "<br>");
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      document.write(j + " ");
    }
    document.write("<br>");
  }

// hollow square number pattern
// 1 1 1 1 1 
// 2       2 
// 3       3 
// 4       4 
// 5 5 5 5 5 

document.write("Tenth Pattern" + "<br>");
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        document.write(i + " ");
      } else {
        document.write("&nbsp;&nbsp;&nbsp;");
      }
    }
    document.write("<br>");
  }