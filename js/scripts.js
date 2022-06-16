//Business Logic

function returnNumberRange(number) {
  
  let range = []
  for (let i = 0; i <= number; i++) {
    range.push(i);
  }
  
  let splitString = range.toString().split(",")
   splitString.forEach(function(element) {
    if (element.includes(3)) {
      splitString[element] = " Won't you be my neighbor?";
    }
    if (element.includes(2)) {
      splitString[element] = " Boop!";
    }
    if (element.includes(1)) {
      splitString[element] = " Beep!";
  }
  });
  return splitString;
}





// UI Logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    $("#results").show();
    const number =($("input#numberInput").val());
  $("#results").text(returnNumberRange(number));
  });
});