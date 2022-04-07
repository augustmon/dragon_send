// output

let valX;
let valY;

let facedown = true;
// let old_valX = 0;
// let old_valY = 0;

let sendColor;
let myColor;
let size = 100;

// sound variables
let daySound;
let nightSound;


function preload() {
  daySound = loadSound("data/daytime.mp3");
  nightSound = loadSound("data/crickets.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  // nightSound.play();

}

function playNight() {
  nightSound.playMode("untilDone");
  nightSound.setVolume(0.5);
  nightSound.play();
  daySound.stop();
}

function playDay() {
  daySound.playMode('untilDone');
  daySound.setVolume(0.5);
  daySound.play();
  nightSound.stop();
}

function doSensor(e) {

  valX = e.beta;
  valX = Math.floor(valX);
  console.log("valX is " + valX);
  valY = e.gamma;
  valY = Math.floor(valY);
  console.log("valY is " + valY);

  // threshold = Math.abs(valX, old_valX) > 5 && Math.abs(valY, old_valY) > 5

}

function draw() {


  // if (threshold) {

  // old_valX = valX;
  // old_valY = valY;
  facedown = (Math.abs(valX) > 170 && Math.abs(valY) < 10)

  if (facedown) {
    myColor = [0, 0, 255];
    // text("sleeping", 10, 20);
    sendMessage({color: "pink"});
    // sendMessage(["audio", false]);
    playNight();


  }
  else {
    myColor = [255, 255, 0];
    // text("awake!", 10, 20);
    sendMessage({color: "white"});
    // sendMessage(["audio", true]);
    playDay();
  }


  background(myColor);

  //input1
  // do stuff if the difference between value and the previous value is greater than tolerance 

  // if(threshold(valX, 5)) {


  // if(valX >= -200 || valX <= -160) {


  // }


  //input2

  // if(threshold(mouseY, 20)) {
  // sendMessage(["size", mouseY]);
  // }

  // output
  // background(color);
  // ellipse(width/2,height/2);

}
