// Code your solutions in this file
function countDown(startingNumber) {
  let currentNumber = startingNumber;

  while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
  }
}




function writeCards(namesArray, eventName) {
  let thankYouMessages = [];
  for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankYouMessages
}