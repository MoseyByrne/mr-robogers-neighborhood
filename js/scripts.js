//Business Logic

function returnNumberRange(number) {
  const array = [" 1"," 'Beep'"," 'Boop'"," 4"," 'Won't you be my neighbor?'"," 6"," 7"," 8"," 9"]
  let range = []
  for (let i = 0; i < array.length; i++) {
    if (i === number-0) break;
    range.push(array[i]);

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
    
    // if(number === 2) {
    //   $("#results").text('"Beep!"') 
    // } else if(number === 3) {
    //   $("#results").text('"Boop!"')
    // } else if(number == 5){
    //   $("#results").text('"Wont you be my neighbor?"')
    // } else {
      $("#results").text(results);
    
      
    

  });
});