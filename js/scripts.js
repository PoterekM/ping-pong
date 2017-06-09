// Business Logic


// User Interface Logic

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($("input#count-to").val());
    console.log(countTo);
    var multThree = (countTo % 3);
    console.log(multThree)
    var multFive = (countTo % 5);

    if (isNaN(countTo)) {
      alert("Please enter a number!");
    } else if (countTo < 1) {
      alert("Sorry, I can not divide by 0");
    } else if (multThree === 0) {
      alert("Ping");
    } else if (multFive === 0) {
      alert("Pong!")
    }


    // if ((countTo % 3) === 0) {
    //   // alert(multThree);
    // }


  })
})
