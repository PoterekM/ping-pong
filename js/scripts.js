// Business Logic



// User Interface Logic

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($("input#count-to").val());
    console.log(countTo);

    if (isNaN(countTo)) {
      alert("Please enter a number!");
    }

  })

})
