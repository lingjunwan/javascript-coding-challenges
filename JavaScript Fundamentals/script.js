/*
LECTURE: Taking Decisions: if / else Statements
1.If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
2.After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/
const ChinaPopulation = 1426;
const AvgPopulation = 33;
const diff = AvgPopulation - ChinaPopulation;
if (ChinaPopulation > AvgPopulation) {
  console.log(`China's Population is above average`);
} else {
  console.log(`China's Population is ${diff} million below average`);
}

/*
LECTURE: The switch Statement
1.Use a switchstatement to log the following string for the given 'language':chineseor mandarin: 'MOST number of native speakers!'spanish: '2nd place in number of native speakers'english: '3rd place'hindi: 'Number 4'arabic: '5th most spoken language'for all othersimply log 'Great language too :D'
*/
const language = prompt(`which language?`);
switch (language) {
  case "chinese":
  case "mandarin":
    console.log(`Most number of native speakers`);
    break;
  case "spanish":
    console.log(`2nd`);
    break;
  case "english":
    console.log(`3rd`);
    break;
  case "hindi":
    console.log(`4th`);
    break;
  case "arabic":
    console.log(`5th`);
    break;
  default:
    console.log(`Great language too:D`);
}

/*
LECTURE: The Conditional (Ternary) Operator
1.If your country's population is greater than33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how onlyone word changes between these two sentences!2.After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/
const population = 1426;
console.log(
  `China's population is ${population > 33 ? "above" : "below"} average`
);

/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki' 
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console
*/
function describeCountry(country1, population1, capitalCity) {
  return `${country1} has ${population1} million people and its capital city is ${capitalCity}.`;
}

const Finland = describeCountry("Finland", 6, "Helsinki");
const Japan = describeCountry("Japan", 3, "Tokyo");
const China = describeCountry("China", 14, "Beijing");

console.log(Finland, "\n", Japan, "\n", China);

/*
LECTURE: Function Declarations vs. Expressions 
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population 2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console 4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
*/

//function declaration
function percentageOfWorld1(populationa) {
  return (populationa / 7900) * 100;
}
//function expression
const percentageOfWorld2 = function (populationa) {
  return (populationa / 7900) * 100;
};

// const percFinland = percentageOfWorld1(6);
// const percJapan = percentageOfWorld1(3);
// const percChina = percentageOfWorld1(1441);

//console.log(percFinland, percJapan, percChina);

/*
LECTURE: Arrow Functions
1.Recreate the last assignment, but this time create an arrowfunctioncalled 'percentageOfWorld3'
*/
const percentageOfWorld3 = (populationb) => {
  (populationb / 7900) * 100;
};

const percFinland = percentageOfWorld1(6);
const percJapan = percentageOfWorld1(3);
const percChina = percentageOfWorld1(1441);

console.log(percFinland, percJapan, percChina);

/*
LECTURE: Functions Calling Other Functions
1.Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country'and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
2.To calculate the percentage, 'describePopulation'call the 'percentageOfWorld1'you created earlier
3.Call 'describePopulation'with data for 3 countries of your choice
*/
function describePopulation(country1, populationb) {
  console.log(
    `${country1} has ${populationb} million people, which is about ${percentageOfWorld1(
      populationb
    )}% of the world.`
  );
}
describePopulation("Finland", 6);
describePopulation("USA", 332);
describePopulation("China", 1441);

/*
LECTURE: Introduction to Arrays
1.Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
2.Log to the console whether the array has 4 elements or not (trueor false)
3.Create an array called 'percentages'containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1'that you created earlier to compute the 4 percentage values
*/
const populations = [3, 1441, 6, 9];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
