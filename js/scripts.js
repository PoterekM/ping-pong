// Business Logic

function pingpong(userInput) {
  // if (isNaN(userInput) === true || userInput < 1) {
  //   alert("Please enter a numeric value.");
  // }
  var displayArray= [];
  for (var index = 1; index <= userInput; index ++) {
    if ((index % 15) === 0) {
      displayArray.push("Ping-Pong!");
    } else if (index / 5 === 0) {
      displayArray.push("pong!");
    } else if ((index / 3)  === 0) {
      displayArray.push("ping");
    } else {
        displayArray.push(index);
    }
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
    var displayArray = pingpong(userInput);
    $("#display-ul").append(displayArray);
  });
});
