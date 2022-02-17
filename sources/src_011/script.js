const button = document.getElementById("button");
const wrapper = document.getElementById("wrapper");
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

button.addEventListener("click", () => {
  let R = number[getRandomInt(0, number.length - 1)],
    G = number[getRandomInt(0, number.length - 1)],
    B = number[getRandomInt(0, number.length - 1)];
  wrapper.style.backgroundColor = `#${R}${G}${B}`;
});
