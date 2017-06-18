// Business Logic

function pingpong(_userInput) {
  // if (isNaN(userInput) === true || userInput < 1) {
  //   alert("Please enter a numeric value.");
  // }
  var displayArray= [];
  for (var index = 1; index <= userInput; index ++) {
    // var multThree = ((index) % 3);
    // var multFive = ((index) % 5);
    if (index / 5 === 0 && index / 3) === 0) {

      return "Ping-Pong!";

      // $("#display-ul").append("<li>" + "Ping-Pong!" + "</li>");
    } else if (index / 5 === 0) {
      return "pong!";
      // $("#display-ul").append("<li>" + "Pong!" + "</li>");
    } else if ((index / 3)  === 0) {
      return "ping";
      // $("#display-ul").append("<li>" + "Ping" + "</li>");
    }
    // else {
    //   displayArray.push(index);
    //   // $("#display-ul").append("<li>" + index + "</li>");
    // }
    return displayArray;
  }
};

// User Interface Logic
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    $(".image-well").show();
    $("#display-ul").empty(); // rough equivalent of remove
    var userInput = parseInt($("input#count-to").val());
    var result = pingPong(userInput);
    $("#display-ul").append(displayArray);
  });
});
