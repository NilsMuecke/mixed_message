//Message Generator
//create a random message each time the script is executed

//generate random number
function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

//store the parts of the message
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
  moodOfTheDay: ["moody", "happy", "relaxed", "sad", "mad"],
};

//array for storing the message parts
let message = [];

//generate the message output
for (let prop in messageParts) {
  //get a random index of each property
  let propIndex = generateRandomNumber(messageParts[prop].length);

  //create output depending on property
  switch (prop) {
    case "weekday":
      message.push(`On ${messageParts[prop][propIndex]}:`);
      break;
    case "taskOfTheDay":
      message.push(
        `Your task of the day will be "${messageParts[prop][propIndex]}".`
      );
      break;
    case "moodOfTheDay":
      message.push(`You will be ${messageParts[prop][propIndex]} on this day.`);
      break;
    default:
      message.push("Information is missing.");
      break;
  }
}

function formatMessage(message) {
  let formattedMessage = message.join("\n");

  return formattedMessage;
}

console.log(formatMessage(message));
