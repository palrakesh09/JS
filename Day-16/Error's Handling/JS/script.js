// JavaScript provides the try-catch statement to trap the runtime errors, and handle them gracefully.

// Any code that might possibly throw an error should be placed in the try block of the statement, and the code to handle the error is placed in the catch block, as shown here:

// Syntax : 
try {
    // Code that may cause an error
} catch (error) {
    // Action to be performed when an error occurs
}

// Ex : 
try {
    let greet = "Hi there!";
    document.write(greet);

    document.write(welcome);

    alert("All statements are excuted successfully.");
} catch (error) {
    alert("Caught error : " + error.message);
}

document.write("<p>Hello World!</p>");

// The try-catch statement can also have a finally clause. The code inside the finally block will always execute, regardless of whether an error has occurred in the try block or not.

let num = prompt("Enter a positive integer between 0 to 100");

let start = Date.now();

try {
    if (num > 0 && num <= 100) {
        alert(Math.pow(num, num)); // the base to the exponent power
    } else {
        throw new Error("An invalid value is entered!");
    }
} catch (e) {
    alert(e.message);
} finally {
    // Displaying the time taken to execute the code
    alert("Execution took: " + (Date.now() - start) + "ms");
}