//Business Logic

function returnNumberRange(number) {
  
  let range = []
  for (let i = 0; i <= number; i++) {
   range[i]=i;
  }
  let answerArray = range.toString().split(",")
  answerArray.forEach(function(element) {

  if (element.includes(1)) {
    range = "Beep!";

  }
});

  return range;
}



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