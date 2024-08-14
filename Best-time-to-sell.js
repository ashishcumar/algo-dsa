let a = [];

const calcMaxProf = (prizerArr) => {
  let maxProf = 0;

  for (let i = 0; i < prizerArr.length; i++) {
    for (let j = 0; j < prizerArr.length; j++) {
      if (i !== j && prizerArr[j] - prizerArr[i] > max) {
        max = prizerArr[j] - prizerArr[i];
      }
    }
  }

  return maxProf;
};

// Approach two
const betterApproach = (prize) => {
  let maxProf = 0;
  let minPrice = prize[0];

  for (const element of prize) {
    let sellPrize = element;
    let profit = sellPrize - minPrice;

    maxProf = Math.max(profit, maxProf);
    if (sellPrize < minPrice) minPrice = sellPrize;
  }
  return maxProf;
};

console.log(calcMaxProf(a));

// RUN COMMAND node Best-time-to-sell.js
