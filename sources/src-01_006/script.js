const button = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");
const buttonValue = document.querySelector(".button-value");
const number = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
/* Random number generation */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
/* Main event function */
button.addEventListener("click", () => {
  let R = number[getRandomInt(0, number.length - 1)], // R- RED
    G = number[getRandomInt(0, number.length - 1)], // G - GREEN
    B = number[getRandomInt(0, number.length - 1)], // B - BLUE
    color = `#${R}${G}${B}`; // Summury: RGB (HEX)
  wrapper.style.backgroundColor = color;
  buttonValue.innerHTML = color;
});
