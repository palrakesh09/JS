// What is setTimeout in JS?
// The setTimeout() in JS is the method used to execute the code block after a specific time. It delays or schedules the execution of a specific function after a certain time. It executes the code only once. JavaScript setTimeout() is a key feature of Node.JS and browser environments and enables asynchronous behavior in code execution. It returns an intervalID, which is a positive integer.

// Syntax :
// setTimeout(function, delay, arg1, arg2, ...)

// Ex :
const timeoutid1 = setTimeout(() => {
    document.write("Hello after 2 seconds" + "<br>");
},2000);

// Use Cases of setTimeout() in JS
// Asynchronous Operations- When setTimeout() is combined with callbacks, it facilitates asynchronous behavior, which enables non-blocking code execution.

// Delayed Execution- The setTimeout() function can delay code execution, which is useful for timed events, animations, and deferred operations.

// Web Development- When used in web development, we can handle timeouts, such as refreshing content and showing a notification after a specific time.

// What is clearTimeout?
// In JS, you can prevent the setTimeout() method from executing the function using the corresponding function provided by JavaScript, known as clearTimeout(). It cancels the scheduled timeout before execution. The clearTimeout() method uses the returned ID by setTimeout() to know the setTimeout() method to cancel.

// The setTimeout() function executes the code after a specified period. To stop the function call, use the clearTimeout() method.

// Syntax :
// clearTimeout(id)

// Ex:
const timeoutid2 = setTimeout(() => {
    document.write("Hello after 3 seconds");
},3000);

clearTimeout(timeoutid2);
clearTimeout(timeoutid1);

// Example use of both setTimeout() and clearTimeout() :
let timeoutid3;

function startTimeout() {
    timeoutid3 = setTimeout(() => {
        document.write('This message appears after 5 seconds!');
    }, 5000); // 5 seconds delay

    document.write('Timeout started! Message will appear in 5 seconds.');
}

// Clear the timeout when the cancel button is clicked
function cancelTimeout() {
    clearTimeout(timeoutid3);
    document.write('Timeout canceled!');
}

// Simulating button clicks
startTimeout();

// Simulate canceling the timeout after 2 seconds
setTimeout(() => {
    cancelTimeout();
}, 2000); // Cancels timeout after 2 seconds