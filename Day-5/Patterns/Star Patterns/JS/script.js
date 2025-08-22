// Enter rows for Right-Angled Triangle Pattern: 5
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

var n = 5;

console.log("First Pattern");
for(var i = 1; i <= n; i++){
    var row = "";
    for(var j = 1; j <= i; j++){
        row = row + "* ";
    }
    console.log(row);
}

// Enter rows for Hollow Right-Angled Triangle: 5
// * 
// * * 
// *   * 
// *     * 
// * * * * * 

console.log("Second Pattern");
for(var i = 1; i <= n; i++){
    var row = "";
    for(var j = 1; j <= i; j++){
        if(j === 1 || j === i || i === n){
            row = row + "* ";
        }else{
            row = row + " ";
        }
    }
    console.log(row);
}

// Enter rows for Inverted Right-Angled Triangle: 5
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

console.log("Third Pattern");
for(var i = n; i >= 1; i--){
    var row = "";
    for(var j = 1; j <= i; j++){
        row = row + "* ";
    }
    console.log(row);
}

// Enter rows for Hollow Inverted Right-Angled Triangle: 6
// * * * * * * 
// *       * 
// *     * 
// *   * 
// * * 
// * 

console.log("Fourth Pattern");
for( i = n; i >= 1; i--){
    var row = "";
    for(var j = 1; j <= i; j++){
        if(j === 1 || j === i || i === n){
            row = row + "* ";
        }else{
            row = row + " ";
        }
    }
    console.log(row);
}

// Enter rows for Left-Aligned Triangle: 5
//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 

console.log("Fifth Pattern");
for(var i = 1; i <= n; i++){
    var row = "";
    row = row + " ".repeat((n-i) * 2);
    row = row + "* ".repeat(i);
    console.log(row);
}

// Enter rows for Hollow Left-Aligned Triangle: 5
//         * 
//       * * 
//     *   * 
//   *     * 
// * * * * * 

console.log("Sixth Pattern");
for(let i = 1; i <= n; i++) {
    let row = " ".repeat((n - i) * 2);
    for(let j = 1; j <= i; j++) {
        if(j === 1 || j === i || i === n) {
            row = row + "* ";
        } else {
            row = row + "  ";
        }
    }
    console.log(row);
}

// Enter rows for Pyramid Pattern:  5
//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * * 

console.log("Seventh Pattern");
for(let i = 1; i <= n; i++) {
    let row = "";

    row = row + "  ".repeat(n - i);
    row = row + "* ".repeat(i * 2 - 1);

    console.log(row);
}

// Enter rows for Inverted Pyramid Pattern: 5
// * * * * * * * * * 
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 

console.log("Eighth Pattern");
for(let i = n; i >= 1; i--) {
    let row = "";

    row += "  ".repeat(n - i);
    row += "* ".repeat(i * 2 - 1);   

    console.log(row);
}

// Enter rows for Hollow Pyramid Pattern: 5
//         * 
//       *   * 
//     *       * 
//   *           * 
// * * * * * * * * * 

console.log("Ninth Pattern");
for(let i = 1; i <= n; i++) {
    let row = "";

    row += "  ".repeat(n - i);

    for(let j = 1; j <= 2 * i - 1; j++) {
        if(j === 1 || j === 2 * i - 1 || i === n) {
            row += "* ";
        } else {
            row += "  ";
        }
    }

    console.log(row);
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

console.log("Tenth Pattern");
for(let i = 1; i <= n; i++) {
    let row = "";

    row += "  ".repeat(n - i);
    row += "* ".repeat(2 * i - 1);

    console.log(row);
}

for(let i = n - 1; i >= 1; i--) {
    let row = "";

    row += "  ".repeat(n - i);
    row += "* ".repeat(2 * i - 1);

    console.log(row);
}
