// Session & Local Storage in JS :
// Session Storage is similar to Local Storage
// The difference is that while data in Local Storage doesn't expire,
// data in Session Storage is cleared when the page session ends.

// local storage me kya hota hai hum apni application ya website ke bahar aa jaye ya phr sutdown bhi karde tab bhi wo data usme hi rahega wo data hamare local storage mai save rehta hai remove nhii hota hai remove tab hi hoga jab hum usko manually remove kare

// session storage me kya hota hai hum apni application ya website ke bahar aa jaye ya phr sutdown karde tab hamara data remove ho jayega automatically

// local storage has 4 types of methods :
// 1.localStorage.setItem('key','value') method --> Storing data in local storage
// 2.localStorage.getItem('key') method --> Retrieving data from local storage
// 3.localStorage.removeItem('key') method --> Removing data from local storage
// 4.localStorage.clear() method --> Clearing all data in local storage

// Notes : output display on browser inpect and in the local storage
// Ex :
localStorage.setItem('name','rakesh');
localStorage.setItem('role','full stack developer');
localStorage.setItem('salary','30k');

displayData = localStorage.getItem('salary');
console.log(displayData);

localStorage.removeItem('salary');

localStorage.clear();

// Notes : Same methods for Session & cookies