let GameArea = document.getElementById("gameArea");
let ctx = GameArea.getContext("2d");

GameArea.width = 600;
GameArea.height = 590;

//ZoneInteraction
ctx.beginPath();
ctx.moveTo(0, 650);
ctx.lineTo(600, 650);
ctx.stroke();

class Circle {
  constructor(x, y) {
    this.colorRandom = 0;
    this.colors = ["blue", "red", "purple", "green", "orange", "yellow"];
    this.velocity = 0;
    this.x = x;
    this.y = y;
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  getRandomColors() {
    this.colorRandom = this.getRandomInt(this.colors.length);
  }
  movingForwardAnimation() {
    this.y += 1;
    //context.clearRect(0, 0, canvas.width, canvas.height);
    this.update();
  }
  area() {
    let area1 = ctx.fillRect(100, 0, 1, 750);
    let area2 = ctx.fillRect(200, 0, 1, 750);
    let area3 = ctx.fillRect(300, 0, 1, 750);
    let area4 = ctx.fillRect(400, 0, 1, 750);
    let area5 = ctx.fillRect(500, 0, 1, 750);
    ctx.beginPath();
    ctx.moveTo(0, 650);
    ctx.lineTo(600, 650);
    ctx.stroke();
  }
  createCircle() {
    this.getRandomColors();
    //ctx.clearRect(this.x, this.y, 60, 60);
    ctx.beginPath();
    ctx.arc(this.x + 100 * this.colorRandom, this.y, 25, 0, 2 * Math.PI);
    ctx.fillStyle = this.colors[this.colorRandom];
    ctx.fill();
    ctx.stroke();
  }
  createCircle2() {
    this.getRandomColors();
    let entityCircle = {
      nbcolor: this.colorRandom,
      x: this.x,
      y: this.y,
    };
    return entityCircle;
  }
  update() {
    ctx.beginPath();
    ctx.arc(this.x + 100 * this.colorRandom, this.y, 25, 0, 2 * Math.PI);
    ctx.fillStyle = this.colors[this.colorRandom];
    ctx.fill();
    ctx.stroke();
  }
}

let colors = ["blue", "red", "purple", "green", "orange", "yellow"];
let cercle = new Circle(50, 50);
let test = cercle.createCircle2();
let ArrayEntityCircle = [];
ArrayEntityCircle.push(test);
let canvas;
let context;
let secondsPassed;
let oldTimeStamp;
let fps;
let slow = 0;
let score = 0;
let tabscore = document.getElementById("score");
let text = document.createElement("h1");
let del = []
//console.log(ArrayEntityCircle[0].x,ArrayEntityCircle.nbcolor,ArrayEntityCircle.y)

const init = () => {
  window.requestAnimationFrame(gameLoop);
};

window.onload = init;

const gameLoop = () => {
  ctx.clearRect(0, 0, GameArea.width, GameArea.height);
  cercle.area();
  ArrayEntityCircle.x = ArrayEntityCircle.x + 10;

  for (let i = 0; i < ArrayEntityCircle.length; i++) {
    ctx.beginPath();
    ArrayEntityCircle[i].y = ArrayEntityCircle[i].y + 3;
    ctx.arc(
      ArrayEntityCircle[i].x + 100 * ArrayEntityCircle[i].nbcolor,
      ArrayEntityCircle[i].y,
      25,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = colors[ArrayEntityCircle[i].nbcolor];
    ctx.fill();
    ctx.stroke();
  }

  slow += 1;
  if (slow == 20) {
    for(let i=0;i<ArrayEntityCircle.length;i++){
      eventKey(i);
      if (ArrayEntityCircle[i].y>710){
        del.push(i)
      }
    }
    for (let i=0;i<del.length;i++){
      deleteEntityCircle(ArrayEntityCircle, del[i])
    }
    del = []
    test = cercle.createCircle2();
    ArrayEntityCircle.push(test);
    slow = 0;
  }
  ctx.fillStyle = "black";
  window.requestAnimationFrame(gameLoop);
};
let A = document.getElementById('a')
let z = document.getElementById('z')
let E = document.getElementById('e')
let R = document.getElementById('r')
let T = document.getElementById('t')
let Y = document.getElementById('y')



function deleteEntityCircle(Array, i) {
  if (ArrayEntityCircle[i].y > 704) {
    ArrayEntityCircle.splice(i, i);
  }
}

const eventKey = (i) => {
  window.addEventListener("keyup", (keyevents) => {
    if (
      keyevents.key === "a" &&
      ArrayEntityCircle[i].y > 600 &&
      ArrayEntityCircle[i].y < 700 &&
      ArrayEntityCircle[i].nbcolor === 0
    ) {
      ArrayEntityCircle[i].isTouchable = true
      text.innerHTML = score;
      tabscore.appendChild(text);
      score += 1;
    }
    if (
      keyevents.key === "z" &&
      ArrayEntityCircle[i].y > 650 &&
      ArrayEntityCircle[i].y < 690 &&
      ArrayEntityCircle[i].nbcolor === 1
    ) {
      text.innerHTML = score;
      tabscore.appendChild(text);
      score += 1;
    }
    if (
      keyevents.key === "e" &&
      ArrayEntityCircle[i].y > 650 &&
      ArrayEntityCircle[i].y < 690 &&
      ArrayEntityCircle[i].nbcolor === 2
    ) {
      text.innerHTML = score;
      tabscore.appendChild(text);
      score += 1;
    }
    if (
      keyevents.key === "r" &&
      ArrayEntityCircle[i].y > 650 &&
      ArrayEntityCircle[i].y < 690 &&
      ArrayEntityCircle[i].nbcolor === 3
    ) {
      text.innerHTML = score;
      tabscore.appendChild(text);
      score += 1;
    }
    if (
      keyevents.key === "t" &&
      ArrayEntityCircle[i].y > 650 &&
      ArrayEntityCircle[i].y < 690 &&
      ArrayEntityCircle[i].nbcolor === 4
    ) {
      text.innerHTML = score;
      tabscore.appendChild(text);
      score += 1;
    }
    if (
      keyevents.key === "y" &&
      ArrayEntityCircle[i].y > 650 &&
      ArrayEntityCircle[i].y < 690 &&
      ArrayEntityCircle[i].nbcolor === 5
    ) {
      text.innerHTML = score;
      tabscore.appendChild(text);
      score += 1;
    }
  });
};