let gameSeq = [];
let userSeq = [];

let score = [level];

let btns = ['yellow', 'red', 'purple', 'green'];

let started = false;
let h2 = document.querySelector('h2');
let level = 0;
document.addEventListener("keypress", function () {
  if (!started) {
    console.log("started")
    started = true;

    levelUp();
  }
});
function userFlash(btn) {
  btn.classList.add('flash');
  setTimeout(function () {
    btn.classList.remove('flash');
  }, 250)
}

function gameFlash(btn) {
  btn.classList.add('flash2');
  setTimeout(function () {
    btn.classList.remove('flash2');
  }, 250)
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`)
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function btnPress() {
  // console.log(this)
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute('id');
  userSeq.push(userColor);
  checkAns();
}
score.push(level);
console.log(score);
function checkAns() {
  // console.log("Curr level : ",level );
  let idx = userSeq.length - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    // console.log("same value");
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `Game over! Your Score was ${level}\n Highest Score is ${highestScore}\nPress any key to start `
    let body = document.querySelector('body').style.backgroundColor = "orange";
    setTimeout(function () {
      let body = document.querySelector('body').style.backgroundColor = "white";
    }, 150)
    
    reset();
  }
}


let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
  btn.addEventListener('click', btnPress);
}
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}