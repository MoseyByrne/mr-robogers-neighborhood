Describe: returnNumberRange()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: returnNumberRange(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return "Beep!" instead of 1 in the array"
Code: returnNumberRange(4);
Expected Output: [0,"Beep!", 2, 3, 4]

Test: "It should return "Boop!" instead of 2 in the return array"
Code: returnNumberRange(4);
Expected Output: [0, "Beep!, "Boop!", 3, 4]


Test: "It should return "Won't you be my neighbor?" instead of 3 in the return array"
Code: returnNumberRange(4);
Expected Output: [0, "Beep!, "Boop!","Won't you be my neighbor?", 4]  -->


# Mr Roboger's Neighborhood

#### By Mo Byrne

#### A website with a place to input a number.

## Technologies Used

* HTML
* CSS
* JS
* Markdown


## Description

This webpage was made by Mo Byrne to be their Independent Project and Code Review for the Looping and Arrays lessons in the Introduction to Programming part of Epicodus full-time C#/REACT track 2022. There is a space to enter a number and a button to submit it. The website will return a range going from 0 to the number submitted. In this range every number with a 1 in it is replaced with "Beep!", every number with a two in it is replaced with "Boop!", and every number with a 3 in it is replaced with "Won't you be my neighbor?".

## Setup/Installation Requirements

* Clone repository to your local
* Move into mr-robogers-neiborhood folder
* Open index.HTML



## Known Bugs

* No known issues

## License

MIT

Copyright (c) 06/16/2022 Mo Byrne