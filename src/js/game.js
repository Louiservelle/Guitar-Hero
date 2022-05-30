let facile = document.getElementById("facile")
let moyen = document.getElementById("moyen")
let hardcore = document.getElementById("hardcore")
let global = document.getElementById("global")
let menu = document.getElementById("menu")
let start = document.getElementById("start")
let modal= document.getElementById("myModal")
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
  location.reload();
}
console.log(facile)
let game = false
global.style.visibility = "hidden"

const init = () => {
  window.requestAnimationFrame(gameLoop);
};
facile.onclick = init;
moyen.onclick = init;
hardcore.onclick = init;
start.onclick = init;
facile.addEventListener("click",() => {
  menu.style.display = "none"
  global.style.visibility = "visible"
  survivaltimer = 137;
  audio.src = musique[0]
})
moyen.addEventListener("click",() => {
  menu.style.display = "none"
  global.style.visibility = "visible"
  survivaltimer = 200;
  audio.src = musique[2]
})
hardcore.addEventListener("click",() => {
  menu.style.display = "none"
  global.style.visibility = "visible"
  survivaltimer = 280;
  audio.src = musique[1]
})
start.addEventListener("click",() => {
  game = true
  start.style.display = "none"
})
















let GameArea = document.getElementById("gameArea");
let ctx = GameArea.getContext("2d");



GameArea.width = 600;
GameArea.height = 690;

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
    ctx.fillRect(100, 0, 1, 750);
    ctx.fillRect(200, 0, 1, 750);
    ctx.fillRect(300, 0, 1, 750);
    ctx.fillRect(400, 0, 1, 750);
    ctx.fillRect(500, 0, 1, 750);
    ctx.beginPath();
    ctx.moveTo(0, 610);
    ctx.lineTo(600, 610);
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
  musique(){
    let g = this.getRandomInt(3)
    audio.src = musique[g]
    if(g==0){
      survivaltimer = 137;
    }
    if(g==2){
      survivaltimer = 180
    }
    if(g==1){
      survivaltimer = 290
    }
  }

  DrawCircle(ArrayEntityCircle,slow,mouveCircle){
    let i = 0

    while(i < ArrayEntityCircle.length) {
      ctx.beginPath();
        ArrayEntityCircle[i].y += 2 + 1 * mouveCircle;
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
      eventKey(i);
      if (slow == 10) {
        if (ArrayEntityCircle[i].y > 800) {
          fail += 1
          //console.log(fail)
          ArrayEntityCircle.shift()
        }
      }
      i++
    }
  }
}
let fail = 0
let colors = ["blue", "red", "purple", "green", "orange", "yellow"];
let musique = ["./src/musique/banger.mp3","./src/musique/pnl.mp3","./src/musique/kiffness.mp3"];
let cercle = new Circle(50, 50);
let test = cercle.createCircle2();
let ArrayEntityCircle = [];
ArrayEntityCircle.push(test);
let secondsPassed;
let slow = 0;
let slowSpownCircle = 100
let score = 0;
let tabscore = document.getElementById("score");
let text = document.createElement("h1");
let mouveCircle = 0
let erreur = document.getElementById("erreur")
let vie = 10
let audio  = document.getElementById("audio")
let survivaltimer = 100








const gameLoop = (timeStamp) => {
  if (game){
    audio.play()
    secondsPassed = timeStamp/1000
    console.log(secondsPassed)
    if (secondsPassed>survivaltimer || fail == 1){
      ArrayEntityCircle = []
      cercle.DrawCircle(ArrayEntityCircle,slow,mouveCircle)
      audio.pause()
      game = false
      modal.style.display = "block";
    }
    ctx.clearRect(0, 0, GameArea.width, GameArea.height);
    cercle.area();
    ArrayEntityCircle.x = ArrayEntityCircle.x + 10;
    cercle.DrawCircle(ArrayEntityCircle,slow,mouveCircle)
    slow += 1;
    if (slowSpownCircle > 35){
      slowSpownCircle = 100 - (secondsPassed* 0.25)
    }
    if (slow > slowSpownCircle) {
      test = cercle.createCircle2();
      ArrayEntityCircle.push(test);
      slow = 0;
      mouveCircle = niveau1(secondsPassed)
    }
    timer.textContent = survivaltimer - Math.round(secondsPassed)
    erreur.textContent = vie - fail
    ctx.fillStyle = "black";
    window.requestAnimationFrame(gameLoop);
  }
};
let A = document.getElementById('a')
let z = document.getElementById('z')
let E = document.getElementById('e')
let R = document.getElementById('r')
let T = document.getElementById('t')
let Y = document.getElementById('y')
















const eventKey = (i) => {

  window.addEventListener("keyup", (keyevents) => {
    if (typeof(ArrayEntityCircle[i]) == 'undefined'){
      return 0;
    }
    switch (keyevents.key) {
      case 'a':
        if (ArrayEntityCircle[i].y > 610 && ArrayEntityCircle[i].y < 705 && ArrayEntityCircle[i].nbcolor == 0){
          ArrayEntityCircle[i].isTouchable = true
          text.innerHTML = score;
          tabscore.appendChild(text);
          score += 1;
          ArrayEntityCircle.shift()
        }
        break;
      case 'z':
        if (ArrayEntityCircle[i].y > 610 && ArrayEntityCircle[i].y < 705 && ArrayEntityCircle[i].nbcolor == 1){
          ArrayEntityCircle[i].isTouchable = true
          text.innerHTML = score;
          tabscore.appendChild(text);
          score += 1;
          ArrayEntityCircle.shift()
        }
        break;
      case 'e':
        if (ArrayEntityCircle[i].y > 610 && ArrayEntityCircle[i].y < 705 && ArrayEntityCircle[i].nbcolor == 2){
          ArrayEntityCircle[i].isTouchable = true
          text.innerHTML = score;
          tabscore.appendChild(text);
          score += 1;
          ArrayEntityCircle.shift()
        }
        break;
      case 'r':
        if (ArrayEntityCircle[i].y > 610 && ArrayEntityCircle[i].y < 705 && ArrayEntityCircle[i].nbcolor == 3){
          ArrayEntityCircle[i].isTouchable = true
          text.innerHTML = score;
          tabscore.appendChild(text);
          score += 1;
          ArrayEntityCircle.shift()
        }
        break;
      case 't':
        if (ArrayEntityCircle[i].y > 610 && ArrayEntityCircle[i].y < 705 && ArrayEntityCircle[i].nbcolor == 4){
          ArrayEntityCircle[i].isTouchable = true
          text.innerHTML = score;
          tabscore.appendChild(text);
          score += 1;
          ArrayEntityCircle.shift()
        }
        break;
      case 'y':
        if (ArrayEntityCircle[i].y > 610 && ArrayEntityCircle[i].y < 705 && ArrayEntityCircle[i].nbcolor == 5){
          ArrayEntityCircle[i].isTouchable = true
          text.innerHTML = score;
          tabscore.appendChild(text);
          score += 1;
          ArrayEntityCircle.shift()
        }
        break;
      default:
        return 0;
    }
  });
};


const niveau1 = (secondsPassed) => {
    return secondsPassed * 0.02
}
