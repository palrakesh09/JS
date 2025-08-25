// 1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that time print message Good Morning.

const greet = () => {
    document.write("Good Morning!.." + "<br>");
}

greet();

// 2. Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function.

const areaOfcircle = (r) => {
    return (Math.PI*r*r);
}

document.write("Area of a circle is : " + areaOfcircle(7) + "<br>");

// 3. Write a JAVASCRIPT Program to find Triangle area ( area = (l*h)/2 ) using return type with argument function.

const areaOftriangle = (l,h) => {
    return (l*h/2);
}

document.write("Area of a triangle is : " + areaOftriangle(10,20) + "<br>");

// 4. Write a JAVASCRIPT Program to find Rectangle area = l * h using return type with argument function.

const areaOfrectangle = (l,h) => {
    return (l*h);
}

document.write("Area of a rectangle is : " + areaOfrectangle(10,20) + "<br>");

// 5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

const formula1 = (a,b,c) => {
    return ((b*b)*(4*a*c)/(2*a));
}

document.write("((b*b)(4*a*c))/(2*a) = " + formula1(5,10,20) + "<br>");

// 6. Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function.

const formula2 = (a,b) => {
    return ((a*a) + (2*a*b) + (b*b));
}

document.write("(a*a) + (2*a*b) + (b*b) = " + formula2(5,10,20) + "<br>");

// 7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8 ) using return type with argument function.

const fahTocel = (f) => {
    return ((f-32)/1.8);
}

document.write("Fahrenheit to celsius is : " + fahTocel(100) + "<br>");

// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f= (c*1.8)+32 ) using return type with argument function.

const celTofah = (c) => {
    return ((c*1.8)+32);
}

document.write("Celsius to fahrenheit : " + celTofah(50) + "<br>");

// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using with argument no return type.

const numberCheck = (num) => {
    if(num % 2 === 0){
        document.write("Even" + "<br>");
    }else{
        document.write("odd" + "<br>");
    }
}

numberCheck(10);

// 10. Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type.

const swap = (a,b) => {
    a = a+b;
    b = a-b;
    a = a-b;
    document.write("a = " + a + " b = " + b + "<br>");
}

swap(10,20);