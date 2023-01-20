/*
PART 1
The object of this script will be to complete a tip calculator.
The instructions for each as provided below.
When told to alert something, call the function output() already provided in the JavaScript file and copy the provided string as it is written.
1. Retrieve the three values from the HTML form elements and save them into variables.
• Use the variable names: billAmount, service, and numPeople
2. Validate that "Bill Total" and "Service Satisfaction" have been entered and are numbers
• If validation fails, you should show an alert that says "Please fill out all the fields"
• If validation passes, continue to the next step.
3. For "People in Party" if nothing is entered, or a negative value is entered, assume that there is
only one person in the party
• Update the HTML form element to reflect this value.
4. Calculate the tip and save in variable billTip
• Tip is calculated by multiplying the bill amount by the service.
5. Calculate the total amount of the bill and save in variable billTotal
• Total amount is calculated by adding the bill amount and the tip.
6. Display the total tip per persons in tipAndTotal
• Amounts should only display 2 decimal points
• Tip/person: ____ $
7. Display the total amount per persons in tipAndTotal
• Amounts should only display 2 decimal points
• Total/person: _____ $
8. Show an Alert to say "Your waiter, thanks you";
BONUS:
1. CSS can be applied to the total tip and total amount that you display in steps 6 and 7
*/

//----- DO NO TOUCH BELOW ----//
function output() {
  alert(str);
}
//----- DO NOT TOUCH ABOVE ----//

function tipCalculator() {
  // 1.Retrieve the three values
  const billAmount = document.querySelector("#totalBill").value;
  const service = document.querySelector("#service").value;
  const numPeople = document.querySelector("#peopleCount").value;

  // 2.Validation for "Bill Total" and "Service Satisfaction"
  if (!billAmount || !service || isNaN(billAmount) || isNaN(service)) {
    alert("Please fill out all the fields");
    return;
  }

  // 3.If nothing is entered, or a negative value is entered for "People in Party", assume that there is only one person in the party
  if (!numPeople || numPeople <= 0) {
    document.querySelector("#peopleCount").value = 1;
    numPeople = 1;
  }

  // 4. Calculate the tip
  const billTip = billAmount * service;

  // 5.Calculate the total amount of the bill
  const billTotal = Number(billAmount) + Number(billTip);

  // 6.Display the total tip per persons
  const tipAndTotal = document.querySelector("#tipAndTotal");
  tipAndTotal.innerHTML = `Tip/person: ${(billTip / numPeople).toFixed(2)} $\n`;

  // 7.Display the total amount per persons
  tipAndTotal.innerHTML += `Total/person: ${(billTotal / numPeople).toFixed(
    2
  )} $`;

  // 8.Show an Alert
  alert("Your waiter, thanks you");

  document.querySelector("#tipAndTotal").classList.add("tipAndTotalTextStyle");
}

/*
PART 2
Function description: Convert a given string into an acronym and output it. Use tooManyWords in the
app.js
The function should perform the following:
When the parameter passed function is an empty string or the data type is not a string, output the
following "Cannot complete request" and nothing else happens
Given a string, you must convert string to its acronym
An acronym is an abbreviations formed from the initial letters of words
• The generated acronym should be in uppercase
• Assume that only spaces are the only character that will split words
Output the acronym using the following format
• "X stands for Y"
X being the newly created acronym and Y being the phrase they submitted
Example of successfully function calls
tooManyWords("Too Many Words");
// TMW stands for Too Many Words
tooManyWords("OMG,.It’s Test Day");
// OITD stands for OMG. It’s Test Day
tooManyWords("It's not T-shirt season anymore");
// INTSA stands for It's not T-shirt season anymore
tooManyWords("supercalifragilisticexpialidocious");
// S stands for supercalifragilisticexpialidocious
tooManyWords("");
// Cannot complete request
*/

function tooManyWords(slogan) {
  //input check
  if (typeof slogan !== "string" || slogan.length === 0) {
    console.log("Cannot complete request");
    return;
  }
  // split()
  let words = slogan.split(" ");
  let acronym = "";
  // loop
  for (let i = 0; i < words.length; i++) {
    acronym += words[i][0].toUpperCase();
  }
  // output
  console.log(acronym + " stands for " + slogan);
}
//Test
console.log(tooManyWords("Too Many Words"));
console.log(tooManyWords("OMG,. It's Test Day"));
console.log(tooManyWords("It's not T-shirt season anymore"));
console.log(tooManyWords("supercalifragilisticexpialidocious"));
console.log(tooManyWords(""));
