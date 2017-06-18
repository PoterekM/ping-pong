// Business Logic

function pingpong(_userInput) {
  //pingpong is the function name
  //userInput is the parameter
  if (isNaN(_userInput) === true || _userInput < 1) {
    alert("Please enter a numeric value.");
  }
  //keeping this at the top so the for loop doesn't have to bother with unneccessary information
  var displayArray = [];
  //setting up empty array for information being proccessed to be pushed into.
  for (var index = 1; index <= _userInput; index ++) {
    //for: run through a loop a certain number of times (this is not a finite number yet.)
    // index =1 : Initialization. starting place of for loop, this parameter is executed before the loop runs
    // index <= userInput: condition. the loop will stop when this parameter is no longer true.
    // index ++ final expression. changes the initial condition in some way- often incrementing or decrementing by one (assuming we want to run through counting by 1)
    if ((index % 15) === 0) {
      // this could easily be if ()(index % 5) === 0) && ((index % 3) === 0)
      displayArray.push("Ping-Pong!");
      //push is a method that adds new items to the end of an array + returns the new length
      //"Ping-Pong" is a parameter that tells the program which item to add to the array.
      //hey, each time this for loop is run and the index is divisible by 15 push the word ping pong into the array.
    } else if ((index % 5) === 0) {
      displayArray.push("Pong!");
    } else if ((index % 3)  === 0) {
      displayArray.push("ping!");
    } else
      displayArray.push(index)
  }
  return displayArray;
  //the code in this block stops running when a condition is met so the order of if statements is important but also stops when it hits a return. return returns a value from that function
  // if "displayArray" were to be ommitted it would return undefined.
};




// User Interface Logic
$(document).ready(function() {
  //only allows these things to be ready after the document has been loaded
  $("#form1").submit(function(event) {
    //$ tells jQuery to look for this html element
    //#form1 : slector
    // submit: action (hey, listen when this form is hclick)
    event.preventDefault();
    //method prevents the submit button from submitting the form before the page is ready. the event component comes from the function above.
    var userInput = parseInt($("input#count-to").val());
    // defining (parameter) what user input is so we can use it in our pingpong function as an argument.
    //parseInt function so that the value user inputs comes to us as a number, not a string
    //use jquery selector so that program knows where to look for value.
    //val retrieves value attribute that was entered and makes that value equal to user input
    //pass input value directly into the parse Int function as an argument.
    var displayArray = pingpong(userInput)
    $("#result").show();
    $(".image-well").show();
    $("#display-ul").empty(); // rough equivalent of remove
    displayArray.forEach(function(displayArray) {
    $("#display-ul").append("<li>" + (displayArray) + "</li>")
    // for each: method that itterates through each element in collection of the array
    //(function(displayArray): callback function with displayArray as an argument
  });
});
});



// Arguments provide a bit more information to methods to help them know what they're supposed to do
// a method is a function that is defined in a class.
// Return value: The return value is the method's response.
// Function: A function is a block of code that performs an action and returns a result; optionally takes arguments
// the argument is the information you pass in, and the parameter is the variable that receives the argument.
// callback is a reference to executable code, or a piece of executable code, that is passed as an argument to other code.
// A callback function is one that should be called when a certain condition is met. Instead of being called immediately, the callback function is called at a certain point in the future.
