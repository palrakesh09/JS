// Enter rows for Right-Angled Triangle Pattern: 5
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

let n = 5;

document.write("First Pattern" + "<br>");
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        document.write("* ")
    }
    document.write("<br>");
}

// Enter rows for Hollow Right-Angled Triangle: 5
// * 
// * * 
// *   * 
// *     * 
// * * * * * 

document.write("Second Pattern" + "<br>");
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        if(j === 1 || j === i || i === n){
            document.write("* ");
        }else{
            document.write("&nbsp;&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}

// Enter rows for Inverted Right-Angled Triangle: 5
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

document.write("Third Pattern" + "<br>");
for(let i = n; i >= 1; i--){
    for(let j = 1; j <= i; j++){
        document.write("* ")
    }
    document.write("<br>");
}

// Enter rows for Hollow Inverted Right-Angled Triangle: 6
// * * * * * * 
// *       * 
// *     * 
// *   * 
// * * 
// * 

document.write("Fourth Pattern" + "<br>");
for( i = n; i >= 1; i--){
    for(let j = 1; j <= i; j++){
        if(j === 1 || j === i || i === n){
            document.write("* ");
        }else{
            document.write("&nbsp;&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}

// Enter rows for right-Aligned Triangle: 5
//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 

document.write("Fifth Pattern" + "<br>");
for(let i = 1; i <= n; i++){
    for(let s = 1; s <= n-i; s++){
        document.write("&nbsp;&nbsp;&nbsp;")
    }
    for(let j = 1; j <= i; j++){
        document.write("* ");
    }
    document.write("<br>")
}

// Enter rows for Hollow right-Aligned Triangle: 5
//         * 
//       * * 
//     *   * 
//   *     * 
// * * * * * 

document.write("Sixth Pattern" + "<br>");
for(let i = 1; i <= n; i++){
    for(let s = 1; s <= n-i; s++){
        document.write("&nbsp;&nbsp;&nbsp;");
    }
    for(let j = 1; j <= i; j++){
        if(j === 1 || j === i || i === n){
            document.write("* ");
        }else{
            document.write("&nbsp;&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}

// Enter rows for Classic Pyramid Pattern:  5
//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * * 

document.write("Seventh Pattern" + "<br>");
for(let i = 1; i <= n; i++){
    for(let s = 1; s <= n-i; s++){
        document.write("&nbsp;&nbsp;&nbsp;");
    }
    for(let j = 1; j <= (2*i-1); j++){
        document.write("* ");
    }
    document.write("<br>");
}

// Enter rows for Inverted Classic Pyramid Pattern: 5
// * * * * * * * * * 
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 

document.write("Eighth Pattern" + "<br>");
for(let i = n; i >= 1; i--){
    for(let s = 1; s <= n-i; s++){
        document.write("&nbsp;&nbsp;&nbsp;");
    }
    for(let j = 1; j <= (2*i-1); j++){
        document.write("* ");
    }
    document.write("<br>");
}

// Enter rows for Classic Hollow Pyramid Pattern: 5
//         * 
//       *   * 
//     *       * 
//   *           * 
// * * * * * * * * * 

document.write("Ninth Pattern" + "<br>");
  for (let i = 1; i <= n; i++) {
    for (let s = 1; s <= n - i; s++) {
      document.write("&nbsp;&nbsp;&nbsp;");
    }

    for (let j = 1; j <= (2 * i - 1); j++) {
      if (j === 1 || j === (2 * i - 1) || i === n) {
        document.write("* ");
      } else {
        document.write("&nbsp;&nbsp;&nbsp;");
      }
    }

    document.write("<br>");
  }

// Enter rows for Diamond Pattern: 5
//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * * 
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 

document.write("Tenth Pattern" + "<br>");
  for (let i = 1; i <= n; i++) {
    for (let s = 1; s <= n - i; s++) {
      document.write("&nbsp;&nbsp;&nbsp;");
    }
    for (let j = 1; j <= (2 * i - 1); j++) {
      document.write("* ");
    }
    document.write("<br>");
  }

  for (let i = n - 1; i >= 1; i--) {
    for (let s = 1; s <= n - i; s++) {
      document.write("&nbsp;&nbsp;&nbsp;");
    }
    for (let j = 1; j <= (2 * i - 1); j++) {
      document.write("* ");
    }
    document.write("<br>");
  }

