// 1.write a javascript program to find the area of a triangle.
const areaOftriangle = (base,height) => base * height/2;
document.write("Area of triangle is : " + areaOftriangle(10,5) + "<br>");

// 2.write a javascript program to convert temperatures to and from to celsius, fahrenheit.
const celTofah = (cel) => (cel*9/5) + 32;
const fahTocel = (fah) => (fah-32)*5/9;
document.write("temperature convert celsius to fahrenheit : " + celTofah(25) + "<br>");
document.write("temperature convert fahrenheit to celsius : " + fahTocel(77) + "<br>");

// 3.write a javascript program to find the area of a rectangle.
const areaOfrectangle = (l,w) => l*w;
document.write("Area of rectangle is : " + areaOfrectangle(12,8) + "<br>");

// 4.write a javascript program to find the area of a circle.
const areaOfcircle = (radius) => Math.PI*radius*radius;
document.write("Area of a circle is : " + areaOfcircle(7) + "<br>");

// 5.write a javascript program to calculate the given formulas:
// a.a²-b² = (a-b)(a+b)

const formula1 = (a,b) => (a-b)*(a+b);
document.write("a²-b² = " + formula1(10,5) + "<br>");

// b.(a-b)² = a²-2ab+b²

const formula2 = (a,b) => (a*a-2*a*b+b*b);
document.write("(a-b)² = " + formula2(10,5) + "<br>");

// c.(a+b+c)² = a²+b²+c²+2ab+2bc+2ac

const formula3 =(a,b,c) => (a*a+b*b+c*c+2*a*b+2*b*c+2*a*c);
document.write("(a+b+c)² = " + formula3(10,5,15) + "<br>");

// d.(a-b-c)² = a²+b²+c²-2ab-2ac+2bc

const formula4 = (a,b,c) => (a*a+b*b+c*c-2*a*b-2*b*c-2*a*c);
document.write("(a-b-c)² = " + formula3(10,5,15) + "<br>");

// e.(a-b)³ = a³-3a²b+3ab²-b³

const formula5 = (a,b) => (a*a*a-3*a*a*b+3*a*b*3*a*b-b*b*b);
document.write("(a-b)³ = " + formula5(10,5) + "<br>")