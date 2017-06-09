// Business Logic


// User Interface Logic

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($("input#count-to").val());
    console.log(countTo);

    var displayNumbers = [];
    for (var index = 1; index < countTo; index += 1)
      displayNumbers.push(index);
    // } old loop close
    console.log(displayNumbers);

    var multThree = (countTo % 3);
    console.log(multThree)
    var multFive = (countTo % 5);

    if (isNaN(countTo)) {
      alert("Please enter a number!");
    } else if (countTo < 1) {
      alert("Sorry, I can not divide by 0");
    } else if (multThree === 0 && multFive === 0) {
      alert("Ping-Pong!");
    } else if (multThree === 0) {
      alert("Ping");
    } else if (multFive === 0) {
      alert("Pong!");
    } else {
      alert([index]);
    }

  }) // closeing loop
});
