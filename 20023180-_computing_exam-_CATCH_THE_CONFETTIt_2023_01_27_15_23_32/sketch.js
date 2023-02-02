//setting global vairables for circle and for colours and score
var x, y;
var score = 0;
const radius = 100;
var r, g, b;
// set slider as a golbal varaible
let bgSlider;

function setup() {
  //create canvas size to fit whatever page it is showing on
  createCanvas(windowWidth, windowHeight);
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
  colorMode(RGB);
  slider = createSlider(0, 400, 200, 200);
  //create slider
  bgSlider = createSlider(0, 255, 255);
  
  //set position of slider to next to text
  bgSlider.position(590, 45);
}

function draw() {
  //get the value of the slider
  let bg = bgSlider.value();
  // set the background colour to the value of the slider on a scale of 0-255
  // white is 255 black is 0
  // this goes before the rest of draw so it doesnt layer on top of the other things
  background(bg);
  console.log(bg);  
  // write title for page
  text("CATCH THE CONFETTI TO WIN POINTS!" ,150,35);
  text("Swipe for LIGHT or DARK mode ---->", 150, 60);
  textStyle(BOLD);
  //draw circle 
  noStroke();
  // allow it to change color
  fill(r, g, b);
  ellipse(x, y, radius*2, radius*2);
  // draw the score tally and make bold
  textSize(24);
  text("Score: " + score, 10, 30);

}
//create a function to press mouse
//when user clicks mouse function
 function mousePressed() {
  //make sure mouse is in radius of circle
   var d = dist(mouseX, mouseY, x, y);
   // set conditional statement for circle being clicked and score goes up
   if (d < radius) {
     newCircle();
     score++;
   }
   
}
//create new function for circle
function newCircle() {
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}
// every second a new circle appears
setInterval(newCircle, 1000);