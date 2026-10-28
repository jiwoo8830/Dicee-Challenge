const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const resetBtn = document.querySelector(".reset-btn");
const h1 = document.querySelector("h1");

function randomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function showResult(random1, random2) {
  if (random1 > random2) {
    h1.textContent = "🏆 1팀 이김";
  } else if (random1 < random2) {
    h1.textContent = "🏆 2팀 이김";
  } else {
    h1.textContent = "🤝 비김";
  }
}

function rollDice() {
  resetBtn.disabled = true; // 굴리는 동안 연타 방지
  image1.classList.add("rolling");
  image2.classList.add("rolling");
  h1.textContent = "🎲 굴리는 중...";

  let count = 0;

  const timer = setInterval(() => {
    // 0.1초마다 임시로 랜덤 이미지 보여주기
    image1.setAttribute("src", `images/dice${randomDice()}.png`);
    image2.setAttribute("src", `images/dice${randomDice()}.png`);
    count++;

    if (count === 10) {
      clearInterval(timer); // 반복 멈추기

      // 최종 결과
      const random1 = randomDice();
      const random2 = randomDice();
      image1.setAttribute("src", `images/dice${random1}.png`);
      image2.setAttribute("src", `images/dice${random2}.png`);

      image1.classList.remove("rolling");
      image2.classList.remove("rolling");
      showResult(random1, random2);
      resetBtn.disabled = false;
    }
  }, 100);
}

rollDice();
resetBtn.addEventListener("click", rollDice);
