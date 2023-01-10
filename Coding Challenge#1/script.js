/*
A
1.	Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
2.	Log their values to the console
*/

let country = "China";
let continent = "Asia";
let population = 1426;
console.log(country, continent, population);

/*
B
1.	Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
2.	Log the types of 'isIsland', 'population', 'country' and 'language' to the console
*/

let isIsland = false;
let language;
console.log(isIsland);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/*
C
1.	Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
2.	Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
3.	Try to change one of the changed variables now, and observe what happens
*/
language = "mandarin";
//const country = "China";
//const continent = "Asia";
//const isIsland = false;
//isIsland = true;

/*
D
1.	If your country split in half, and each half would contain half the population, then how many people would live in each half?
2.	Increase the population of your country by 1 and log the result to the console
3.	Finland has a population of 6 million. Does your country have more people than Finland?
4.	Finland has a population of 6 million. Does your country have more people than Finland?
5.	Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
*/
console.log(population / 2);

population++;
console.log(population);

console.log(population > 6);

population--;
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

/*
E
Recreate the 'description' variable from the last assignment, this time using the template literal syntax
*/
const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

/*
F
Predict the result of these 5 operations without executing them: 
'9' - '5'; 
'19' - '13' + '17'; 
'19' - '13' + 17; 
'123' < 57; 
5 + 6 + '4' + 9 - 4 - 2; 
Execute the operations to check if you were right
*/
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> '617'
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

/*
G
1.	Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
2.	If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
3.	Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
4.	Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
5.	Test the code with different values of 'numNeighbours', including 1 and 0.
6.	Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
7.	Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
8.	Reflect on why we should use the === operator and type conversion in this situation
*/
//const numNeighbours = prompt(
//  "How many neighbour countries does your country have?"
//);

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

/*
F
1.	Comment out the previous code so the prompt doesn't get in the way
2.	Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
3.	Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
4.	If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria:('
5.	Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)
*/
if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria:(`);
}

/*
G
Challenge
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below:
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
*/
const avgDolphinsScore = (96 + 108 + 89) / 3;
const avgKoalasScore = (88 + 91 + 110) / 3;

console.log(avgDolphinsScore, avgKoalasScore);

if (avgDolphinsScore > avgKoalasScore) {
  console.log(`Dolphins Win!`);
} else if (avgDolphinsScore < avgKoalasScore) {
  console.log(`Koalas Win!`);
} else {
  console.log(`Draw!`);
}

/*
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
*/

const DolphinsScore = (97 + 112 + 101) / 3;
const KoalasScore = (109 + 95 + 123) / 3;

console.log(DolphinsScore, KoalasScore);

if (DolphinsScore > KoalasScore && DolphinsScore >= 100) {
  console.log(`Dolphins Win!`);
} else if (DolphinsScore < KoalasScore && KoalasScore >= 100) {
  console.log(`Koalas Win!`);
} else if (DolphinsScore === KoalasScore) {
  console.log(`Draw!`);
}

/*
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
const DolphinScore = (97 + 112 + 101) / 3;
const KoalaScore = (109 + 95 + 106) / 3;

console.log(DolphinScore, KoalaScore);

if (DolphinScore > KoalaScore && DolphinScore >= 100) {
  console.log(`Dolphins Win!`);
} else if (DolphinScore < KoalaScore && KoalaScore >= 100) {
  console.log(`Koalas Win!`);
} else if (
  DolphinScore === KoalaScore &&
  DolphinScore >= 100 &&
  KoalaScore >= 100
) {
  console.log(`Draw!`);
} else {
  console.log(`No team wins the trophy!`);
}
