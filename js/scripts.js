// Business Logic

var pingPong = function(userInput) {
  if (isNaN(userInput) === true || userInput < 1) {
    alert("Please enter a numeric value.");
  }
  for (var index = 1; index <= userInput; index ++) {
    var multThree = ((index) % 3);
    var multFive = ((index) % 5);
    if (multFive === 0 && multThree === 0) {
      $("#display-ul").append("<li>" + "Ping-Pong!" + "</li>");
    } else if (multFive === 0) {
      $("#display-ul").append("<li>" + "Pong!" + "</li>");
    } else if (multThree === 0) {
      $("#display-ul").append("<li>" + "Ping" + "</li>");
    } else {
      $("#display-ul").append("<li>" + index + "</li>");
    }
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
    $("#display-ul").text(result);
  });
});
