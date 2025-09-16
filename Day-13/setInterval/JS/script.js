// What is setInterval in JS?
// The setInterval() method repeats a given function at every given time interval.

let setIntervalid = function hello(){
    document.write("Hello World!" + "<br>");
}

setInterval(hello,1000);
clearInterval(setIntervalid);