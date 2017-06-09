// Business Logic


var pingPong = function(userInput) {
  if (isNaN(userInput) === true) {
    alert("Please enter a numeric value.");
  }

var multThree = (userInput % 3);
var multFive = (userInput % 5);


  // var userArray = [];
  for (var index = 1; index <= userInput; index ++) {
    $("ul").append("<li>" + index + "</li>");
  }








};


// User Interface Logic
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#count-to").val());
    var result = pingPong(userInput);
    $("#ul").text(result);
  });
});




//     var countTo = parseInt($("input#count-to").val());
//     // console.log(countTo);
//     for (var index = 1; index <= countTo; index += 1) {
//       if (isNaN(userInput) === true) {
//         alert("Please enter a number");
//       }
//       // countArray.push(index);
//     }
//     // console.log(countArray);
//     // var multThree = (countTo % 3);
//     // console.log(multThree);
//     // var multFive = (countTo % 5);
//     // console.log(multFive);
//     //
//     // var displayNumbers = [];
//     // for (var index = 1; index <= countTo; index += 1) {
//     //   if (isNaN(index)) {
//     //     alert("Please enter a number!");
//     //   } else if (index < 1) {
//     //     alert("Sorry, I can not divide by 0");
//     //   } else if (multThree[index] === 0 && multFive[index] === 0) {
//     //     (displayNumbers.push("Ping-Pong!"));
//     //   } else if (multFive === 0) {
//     //     displayNumbers.push("Pong!");
//     //   } else if (multThree === 0) {
//     //     displayNumbers.push("Ping");
//     //   } else {
//     //     displayNumbers.push([index]);
//     //   }
//     // }
//   }) // closing loop
// });
