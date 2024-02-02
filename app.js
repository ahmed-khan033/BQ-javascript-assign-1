//QUESTION NO 1 
alert("welcome to our webstie")


//questiON 2
// JavaScript code to display an error message
function displayErrorMessage() {
    alert("Error! Please Enter a valid password.");
}


//question 3
// JavaScript code to display a message with a line break
function displayMessageWithLineBreak() {
    alert("Error!\nPlease Enter a valid password.");
}

// Call the function to display the message with a line break
displayMessageWithLineBreak();


//question 4
<script>
        function displayMessagesInSequence() {
            alert("Ahmed");
            alert("Bano Qabil student");
            alert("Web Devlopment");
        }
    </script>


//question 5



question 7
// Declare a variable called username
var username;


question 8
// Declare a variable called myName and assign a string representing your full name
var myName = "Ahmed";



question 9
// Declare a JS variable titled message
var message;

// Assign "Hello World" to the variable message
message = "Hello World";

// Display the message in an alert box
alert(message);




question 10
// Save student's bio data in JS variables
var studentName = "ahmed zaheer";
var studentAge = 20;
var studentGrade = "A";

// Display the student's bio data in alert boxes
alert("Student Name: " + studentName);
alert("Student Age: " + studentAge);
alert("Student Grade: " + studentGrade);




question 11
// Declare a variable called email and assign a string representing your Email Address
var email = "ahmmedkhan1221@gmail.com";

// Display a message in an alert box with string concatenation
alert("Your email address is: " + email);



question 12
// Declare a variable called email and assign a string representing your Email Address
var email = "example@example.com";

// Display the message in the browser using document.write
document.write("Your email address is: " + email);



question 13
// Store the given string in a variable
var specialString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

// Display the string in an alert
alert(specialString);

// Display the string in the browser using document.write
document.write(specialString);




question 14
// Declare a variable called age and assign your age to it
var age = 25; // Replace 25 with your actual age

// Display the age in an alert box
alert("Your age is: " + age);



question 15
// Check if the visitor count is stored in localStorage
var visitCount = localStorage.getItem('visitCount');

// If it's the first visit, initialize the count to 1, otherwise increment it
if (!visitCount) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}

// Display the message with the visit count
console.log("You have visited this site " + visitCount + " times");

// Update the visit count in localStorage
localStorage.setItem('visitCount', visitCount.toString());





question no 16
// Declare a variable called birthYear and assign your birth year to it
var birthYear = 1990; // Replace with your actual birth year

// Display a message in the browser
console.log("My birth year is: " + birthYear);




question 17
// Store visitor information in variables
var visitorName = "ahmed khan"; // Replace with the actual visitor's name
var productTitle = "shirt"; // Replace with the actual product title
var quantity = 6; // Replace with the actual quantity

// Display the message in the browser
console.log(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");




question 18

var variable1 = "Hello", variable2 = 42, variable3 = true;




question 19

// Illegal variable names
var 123variable;      // Cannot start with a number
var user name;        // Contains a space
var special-char;     // Contains a hyphen
var if;               // Reserved keyword
var my variable;      // Contains a space

// Legal variable names
var userName;
var productPrice;
var _counter;
var $totalAmount;
var myVar123;



question 20
// Displaying content in the browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name</p>");
document.write("<p>Variable names are case-sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>");



question 21
// Taking two numbers
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");

// Convert input strings to numbers and perform addition
var result = parseFloat(num1) + parseFloat(num2);

// Display the result in the console
console.log("The sum of " + num1 + " and " + num2 + " is: " + result);





//question 22
// Taking two numbers
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");

// Convert input strings to numbers
var number1 = parseFloat(num1);
var number2 = parseFloat(num2);

// Perform arithmetic operations
var subtractionResult = number1 - number2;
var multiplicationResult = number1 * number2;

// Check if the second number is not zero before performing division or modulus
var divisionResult = (number2 !== 0) ? number1 / number2 : "Cannot divide by zero";
var modulusResult = (number2 !== 0) ? number1 % number2 : "Cannot calculate modulus with zero";

// Display the results in the console
console.log("Subtraction result: " + subtractionResult);
console.log("Multiplication result: " + multiplicationResult);
console.log("Division result: " + divisionResult);
console.log("Modulus result: " + modulusResult);




//question 23
// a. Declare a variable.
var myVariable;

// b. Show the value of the variable after declaration.
console.log("Value after variable declaration is: " + myVariable);

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the initial value of the variable.
console.log("Initial value: " + myVariable);

// e. Increment the variable.
myVariable++;

// f. Show the value of the variable after increment.
console.log("Value after increment is: " + myVariable);

// g. Add 7 to the variable.
myVariable += 7;

// h. Show the value of the variable after addition.
console.log("Value after addition is: " + myVariable);

// i. Decrement the variable.
myVariable--;

// j. Show the value of the variable after decrement.
console.log("Value after decrement is: " + myVariable);

// k. Show the remainder after dividing the variable’s value by 3.
var remainder = myVariable % 3;

// l. Output: “The remainder is: 0”.
console.log("The remainder is: " + remainder);





//question 24

// Cost of one movie ticket
var ticketPrice = 600;

// Number of tickets to buy
var numberOfTickets = 5;

// Calculate the total cost
var totalCost = ticketPrice * numberOfTickets;

// Display the result in the console
console.log("Cost of one movie ticket: " + ticketPrice + " PKR");
console.log("Number of tickets to buy: " + numberOfTickets);
console.log("Total cost for " + numberOfTickets + " tickets: " + totalCost + " PKR");

//



//question 25
// Prompt the user to enter a number
var number = prompt("Enter a number to display its multiplication table:");

// Convert the input string to a number
var num = parseFloat(number);

// Display the multiplication table in the browser
document.write("<h2>Multiplication Table for " + num + ":</h2>");

for (var i = 1; i <= 10; i++) {
    var result = num * i;
    document.write(num + " x " + i + " = " + result + "<br>");
}
