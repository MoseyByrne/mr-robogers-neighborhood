//Business Logic

function returnNumberRange(number) {
  const numberArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  for (let i = 0; i < number.length; i++) {
  console.log('Loop' + i)
  }
  return console.log;
}

//UI Logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault;
    $("#results").show();
    const number =($("#numberInput").val());
    const results = returnNumberRange(number);
    $("#results").append(results + ", ");
  });
});