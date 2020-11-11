// 2)დაწერეტ ფუნქცია რომელიც ღებულობს რიცხვენის მასივს და ანრუნებს
//   დადებითი რიცხვების საშუალო მნიშვნელობას. (მაგალითად თუ გადაეცემა მასივი [-1, 2, 4] უნდა დააბრუნოს 3: (4 + 2) / 2)

function getPositiveNumbersAverage(numbersArray) {
    const positiveNumbersArray = numbersArray.filter((number) => {
      return number > 0;
    });
  
    const positiveNumbersSum = positiveNumbersArray.reduce((acc, number) => {
      return acc + number;
    }, 0);
  
    return positiveNumbersSum / positiveNumbersArray.length;
  }
  