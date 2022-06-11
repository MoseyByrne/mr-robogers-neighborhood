//Business Logic

function returnNumberRange(number) {
  let string = parseInt(number);
  let text = string.split("");
  let range = []
  for (let i = 0; i <= number; i++) {
    if(string.includes(1)){
      index[i] = "Won't you be my neighbor?"
    }
    
    range.push(number[i])
    }
    return range;
  };


// 

//UI Logic

// $(document).ready(function() {
//   $("form#formOne").submit(function(event) {
//     event.preventDefault();
//     $("#results").show();
//     const number =($("#numberInput").val());
//     const results = returnNumberRange(number);
    
    // if(number === 2) {
    //   $("#results").text('"Beep!"') 
    // } else if(number === 3) {
    //   $("#results").text('"Boop!"')
    // } else if(number == 5){
    //   $("#results").text('"Wont you be my neighbor?"')
    // } else {
      // $("#results").text(results);
    
      
    

//   });
// });