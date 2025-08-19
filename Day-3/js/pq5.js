// 5.write a javascript program to calculate the given formulas:
// a.a²-b² = (a-b)(a+b)
var a = 10;
var b = 5;
var c = 15;

console.log("a²-b² = ",(a-b)*(a+b));

// b.(a-b)² = a²-2ab+b²
console.log("(a-b)² = ",a*a-2*a*b+b*b);

// c.(a+b+c)² = a²+b²+c²+2ab+2bc+2ac
console.log("(a+b+c)² = ",a*a+b*b+c*c+2*a*b+2*b*c+2*a*c);

// d.(a-b-c)² = a²+b²+c²-2ab-2ac+2bc
console.log("(a-b-c)² = ",a*a+b*b+c*c-2*a*b-2*a*c+2*b*c);

// e.(a-b)³ = a³-3a²b+3ab²-b³
console.log("(a-b)³ = ",a*a*a-3*a*a*b+3*a*b*3*a*b-b*b*b);