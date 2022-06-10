//Business Logic

function returnNumberRange(number) {
  const numberArray = [1,2,3,4,5,6,7,8,9]
  let range = []
  for (let i = 0; i < numberArray.length; i++) {
    if (i === number-0) break;
    range.push(numberArray[i]);

  }
  return range;
}

//UI Logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    $("#results").show();
    const number =($("#numberInput").val());
    const results = returnNumberRange(number);
    $("#results").append(results + " ");
  });
});