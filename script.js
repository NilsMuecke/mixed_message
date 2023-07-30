//random number
function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

//storing the parts of the message
const messageParts = {
  weekday: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  taskOfTheDay: [
    "wash the dishes",
    "do the laundry",
    "prepare dinner",
    "go walkies",
    "make the bed",
    "water the flowers",
    "clean the car",
  ],
  moodOfTheDay: [
    "moody", 
    "happy", 
    "relaxed", 
    "sad", 
    "mad"
  ],
};

//console.log(messageParts.weekday);

//array for storing the message parts
const message = [];

//creating the message output
