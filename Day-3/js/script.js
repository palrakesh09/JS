// 1.write a javascript program to find the area of a triangle.
let base = 10;
let height = 5;

document.write("Area of triangle is : ",base*height/2 + "<br>");

// 2.write a javascript program to convert temperatures to and from to celsius, fahrenheit.
let cel = 25;
let fah = 77;

document.write("temperature convert celsius to fahrenheit : ",(cel*9/5)+32 + "<br>");
document.write("temperature convert fahrenheit to celsius : ",(fah-32)*5/9 + "<br>");

// 3.write a javascript program to find the area of a rectangle.
var l = 12;
var w = 8;

document.write("Area of a rectangle is : ",l*w + "<br>");

// 4.write a javascript program to find the area of a circle.
var radius = 7;

document.write("Area of a circle is : ",Math.PI*radius*radius + "<br>");

// 5.write a javascript program to calculate the given formulas:
// a.a²-b² = (a-b)(a+b)
var a = 10;
var b = 5;
var c = 15;

document.write("a²-b² = ",(a-b)*(a+b) + "<br>");

// b.(a-b)² = a²-2ab+b²
document.write("(a-b)² = ",a*a-2*a*b+b*b + "<br>");

// c.(a+b+c)² = a²+b²+c²+2ab+2bc+2ac
document.write("(a+b+c)² = ",a*a+b*b+c*c+2*a*b+2*b*c+2*a*c + "<br>");

// d.(a-b-c)² = a²+b²+c²-2ab-2ac+2bc
document.write("(a-b-c)² = ",a*a+b*b+c*c-2*a*b-2*a*c+2*b*c + "<br>");

// e.(a-b)³ = a³-3a²b+3ab²-b³
document.write("(a-b)³ = ",a*a*a-3*a*a*b+3*a*b*3*a*b-b*b*b + "<br>");