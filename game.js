const input = document.getElementById("input");
const check = document.getElementById("check");
const restart = document.getElementById("restart");
const limit = document.getElementById("limits");
const chance = document.getElementById("chance");
const answer = document.getElementById("answer");

let random = Math.round(Math.random() * 100);
// let result;
let upper = 100;
let lower = 0;
// let count = 0;
let countDown = 5;

console.log(random);

check.addEventListener("click", () => {
  if (0 < countDown) {
    if (random == input.value) {
      answer.textContent = `Congratulations You Win`;
    } else if (input.value > 100 || input.value < 0) {
      answer.textContent = `Please try a number between 1-100`;
    } else if (random < input.value) {
      answer.textContent = `Please try a smaller number`;
      upper = input.value;
    } else if (random > input.value) {
      answer.textContent = `Please try a bigger number`;
      lower = input.value;
    }
    limit.textContent = `${lower} - ${upper} `;
    // count++;
    countDown--;
    input.value = "";
    input.focus();
    chance.textContent = `You have ${countDown} left`;
    chance.animate({ fontSize: "40px" }, 1000);
  }
  if (0 == countDown) {
    chance.textContent = `You lose, Try again`;
    return (answer.textContent = `Answer was ${random}`);
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    check.click();
  }
});

restart.addEventListener("click", () => {
  location.reload();
});
