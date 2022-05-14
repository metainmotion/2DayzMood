//console.log('Hello');
//window.prompt("Get user input");
//window.alert("Hello");


/********* Variables **********
Declaration: var, let, const
Example:
    let x = 1;
    var y = 2;
    const z = 3;
******************************/

/****************** Edit HTMl Tags *******************
 In your HTML file:
 <p id="p1"></p>

 In your JS file:
 document.getElementById("p1").innerHTML= "Hello" + x;
******************************************************/

/****************** Get User Input *******************
let username = window.prompt("What's your name");
console.log("Hello", username)

or

In HTML file:
<label id="myLabel">Enter your name:</label>
<br>
<input type="text" id="myText">
<br>
<button type="button" id="myButton">Submit</button>

In JS file:
let username;
document.getElementById("myButton").onclick = function()
{
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello" + username;
}

******************************************************/

/****************** Type Conversion *******************
let age = window.prompt("How old are you?");
console.log(typeof age);
age = Number(age); //String to Number
console.log(typeof age);

Number(), String(), Boolean() are constructors used for type conversion
******************************************************/

/****************** const variable *******************
const = a variable that can't be changed
Example:
   const PI = 3.14159;

It is good practice to make the name of const variables uppercase
******************************************************/