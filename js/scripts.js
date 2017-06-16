// Business Logic

function pingpong(userInput) {
  // if (isNaN(userInput) === true || userInput < 1) {
  //   alert("Please enter a numeric value.");
  // }
  var displayArray = [];
  for (var index = 1; index <= userInput; index ++) {
    // var multThree = ((index) % 3);
    // var multFive = ((index) % 5);
    if ((index % 15 === 0) === 0) {

      displayArray.push("Ping-Pong!");
      // $("#display-ul").append("<li>" + "Ping-Pong!" + "</li>")
    } else if ((index % 5) === 0) {
      displayArray.push("Pong!");
      // $("#display-ul").append("<li>" + "Pong!" + "</li>")
    } else if ((index % 3)  === 0) {
      displayArray.push("ping!");
      // $("#display-ul").append("<li>" + "Ping" + "</li>")
    }
    else {
      displayArray.push(index)
    }
    //   // $("#display-ul").append("<li>" + index + "</li>");
    // }
    console.log(displayArray);
  return displayArray;
}


  var finalArray = function(displayArray) {
    result.forEach(function(index) {
      $("#display-ul").append("<li>" + index + "</li>")
      console.log(displayArray);
    // });
      });
    return finalArray;
    };
// };
  };

// User Interface Logic
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#count-to").val());
    console.log(userInput);
    $("#result").show();
    $(".image-well").show();
    // $("#display-ul").empty(); // rough equivalent of remove
    var result = pingpong(userInput);
    // var displayArray =  $("#result").append("<li>" + index + "</li>")
    // var userInput = $("#display-ul").append(finalArray);
  });
});
