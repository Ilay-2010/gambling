
const num1 = document.getElementById("num1id");
const num2 = document.getElementById("num2id");
const num3 = document.getElementById("num3id");
const btn = document.getElementById("btnid");
let times = 29;

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

async function spin() {
    for (let i = 0; i < 50; i++) {
        num1.textContent = getRandomInt(9);
        await delay(29);
    }
    num1.textContent = getRandomInt(3);

    for (let i = 0; i < 50; i++) {
        num2.textContent = getRandomInt(9);
        await delay(29);
    }
    num2.textContent = getRandomInt(3);

    for (let i = 0; i < 50; i++) {
        num3.textContent = getRandomInt(9);
        await delay(29);
    }
    num3.textContent = getRandomInt(3);

    if (num1.textContent === num2.textContent && num2.textContent === num3.textContent) {
        await delay(100);
        num2.textContent = "Win!";
        num1.textContent = "";
        num3.textContent = "";
    }

}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


