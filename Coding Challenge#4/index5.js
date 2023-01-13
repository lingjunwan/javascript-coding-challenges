/*
Your task is to select all spans, iterate over them, and assign them each one of the colors from the colors array.
The first span should be red, the second should be orange, etc.
*/

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let spans = document.querySelectorAll("span");

for (let i = 0; i < colors.length; i++) {
  spans[i].style.color = colors[i];
}
