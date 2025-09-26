


//solo clock vars 
//for images 
//pikmin // Bounce - more pikmin can appear with an array and minutes 
let bounceCountYellow; 
let bounceCountBlue; 
//flowers 
let sunflower; 
let moonflowerBlue;  
//other plants 
let grassLong; 
let bushShort; 
let treeTop; 
//dog 
let rockSmally; 
let smally; 
//bg
let stars;  
let cloud1; 
// system 
let rainIntensity = 0.000005; // Initial rain intensity
let maxRainIntensity = 5; // Maximum rain intensity
let intensityChangeSpeed = 0.005; // Rate of change of rain intensity
let heavyRainDelay = 20000000000000000000000; // Delay before heavy rain starts (in milliseconds)
let heavyRainStarted = false; // Flag to track if heavy rain has started
let heavyRainStartTime; // Timestamp when heavy rain started
//rain
let middleRain;
//toggles 
let middleToggle = false; 

let bgc;
let shc;

let mainClockObj;
let mask1;
let cc;
let currentPage = 0;
//images
let grass; 
let redPik; 
let bluePik; 
let yellowPik; 
//text 
let earth; 


function preload() {
  //load text 
   earth = loadFont("assets/Earth2073.ttf"); 
 // any solo clock images or data can be here -> has to be before the callback so put all images and other loads here 
  //load images  
  //flowers 
  sunflower = loadImage("assets/sun_flower.png"); 
  moonflowerBlue = loadImage("assets/moon_flower_b.png"); 
  //other plants 
  grassLong = loadImage("assets/grass_long.png"); 
  bushShort = loadImage("assets/bush_short.png"); 
  treeTop = loadImage("assets/tree_top.png");
  //dog
  rockSmally = loadImage("assets/closeupdog.jpeg");
  smally = loadImage("assets/smally.png");
  //bg 
  stars = loadImage("assets/stars.png");  
  cloud1 = loadImage("assets/cloud_1.png"); 

  
    grass = loadImage("assets/grass.png"); 
    redPik = loadImage("assets/run_red_pikmin.png"); 
    bluePik = loadImage("assets/run_blue_pikmin.png"); 
    yellowPik = loadImage("assets/run_yellow_pikmin.png"); 
  }



function setup() {
  createCanvas(900,800);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
  angleMode(DEGREES);
  imageMode(CENTER); 
  textSize(25);
  textFont(earth);
  textAlign(CENTER);
  //bgc = color(20,20,255);
  bgc = color(255,231,150);
  shc = color(0);
  //shc = color(200);

  //Classes/ Arrays  
  //sytem for bouncing Pikmin  
  bounceCountYellow = new Array(60); // Create yellow pikmin 
  for (let i = 0;  i < 60;i++) {
    bounceCountYellow[i] = new ncPikmin(color(255,230,3),390,320,0,.35);
  }
  bounceCountBlue = new Array(60); // Create Blue pikmin 
  for (let i = 0;  i < 60;i++) {
    bounceCountBlue[i] = new ncPikmin(color(30,30,235),390,320,0,.35);
  }

  //rain/ water plants 
  middleRain = new ParticleSystem(createVector(width / 2, -50));




}


function draw() {
  if (currentPage == 1) {
  background(0,0,100);
  push();
  //translate(80,100);
  fill(200);
  textSize(40);
  text ("My Clock", 0,0);
  //translate(250,120);
  // solo clock stuff goes here
  displayMyClock(); 
 
  // ends here
  pop();
 

}  else {

  background(0);
  push();
  translate(width/2,100);
  fill(200);
  textSize(40);
  text ("Welcome!", 0,-25);
  translate(0,50);
  text ("Type 1 for My Clock",0 ,0,800 );
  text ("My Clock: Focuses on my daily schedule and inspired by my garden and love for the game Pikmin (and Smally too).",0 ,150,800 );
  text ("Take a look around!",0 ,550,800 );
  translate(250,120);
  // mapToColorPixels(gridarr1, 0, 0, 0, .45, 255);
  pop();


  // // click to advance splash screen
  // if (mouseIsPressed) {
  //   currentPage = 1;
  // }


}


}





function keyPressed() { 

  
  //console.log(key);
   // or 
  if ( key == '1' ) { 
    console.log("Page 1");
    currentPage = 1;

   } else if ( key == '2' ) { 
      console.log("Page 2");
      currentPage = 2;
  
   } else {
    console.log("Page 0");
      currentPage = 0;

   }

  }



// the map functions.

//display My Clock 
function displayMyClock () {
  background (bgc); 
//time system 
let h = hour();   // 0-23
let m = minute(); // 0- 59
let s = second();  // 0-59
let mm = millis(); 
let ms = map(s,0,59,0,360);
let mmm = map(mm,0,59,0,360);


//Display sunflowers based on the current hour
if (h >= 0 && h <= 12) { // Display sunflowers only during daytime (0= 12AM, 12= 12PM) 
  bgc = color(77,170,209); 
  for (let i = 0; i < h+1; i++) {
  //clouds 
  let cloudSpacing = 100; 
  let randoSpacing = random(100,200); 
  let cx = map(sin(frameCount * 0.5), -1, 1, 300, 500); // Adjust the x position based on the hour
  let cy =  map(i * randoSpacing, 0, 23, 100, width - 100) + cloudSpacing * i;// Adjust the y position with a sine function for animation
  cloudTime(cx,cy,0,2);
  cloudTime(cx-400,cy+200,50,1); 
  cloudTime(cx+600,cy,150,1); 
  cloudTime(cx+400,cy+300,100,1); 
  cloudTime(cx,cy+480,0,1.5); 
  }
  for (let i = 0; i < h; i++) {
    //sunflowers 
    let sunSpacing = 50; 
    let sx = map(i, 0, 23, 100, width - 100) + sunSpacing * i; // Adjust the x position based on the hour
    let sy = map(sin(frameCount * 1), -1, 1, 280, 100); // Adjust the y position with a sine function for animation
      sunflowerTime(sx-60, sy+150, 0, 3); 

  }
  //landscape 
  image(treeTop,400,40,800,400); 
  image(bushShort,-400,410,1500,1000); 
  image(bushShort,650,450,1500,1000);    
  image(grassLong,400,650,1000,400); 
  
  //Blue Bouncing Pikmin 
  for (let i = 0;i < m;i++) {
    bounceCountBlue[i].drawPikminBluePan();
    bounceCountBlue[i].bouncingPikmin();  
  }
} 
// Display moonflowers based on the current hour
else { // Display moonflowers only during nighttime (13= 1PM, 23= 12AM) 
bgc = color(11,3,130); 
image(stars,455,450,1000,1000);     
//landscape 
  image(treeTop,400,20,800,400); 
  image(bushShort,-300,360,1500,1000); 
  image(bushShort,650,400,1500,1000); 
  image(grassLong,400,620,1000,400); 
for (let i = 0; i < h; i++) {
  //flowers bottom row 
  let moonSpacing = 50; 
  let mx = map(i, 0, 23, 100, width - 100) + moonSpacing * i; // Adjust the x position based on the hour
  let my = map(sin(frameCount * 0.8), -1, 1, 300, 330); // Adjust the y position with a sine function for animation
  let moonrot = map(i, 0, 23, 0, 360);
  moonflowerBlueTime(mx-85, my+135, moonrot, 0.8); 

  //flowers top row 
  let mooSpacing = 50; 
  let mox = map(i, 0, 23, 100, width - 100) + mooSpacing * i; // Adjust the x position based on the hour
  let moy = map(sin(frameCount * 0.8), -1, 1, 300, 350); // Adjust the y position with a sine function for animation
  moonflowerBlueTime(mox-1040, moy+55, moonrot, 0.8); 
}
//Yellow Boucing Pikmin 
for (let i = 0;i < m;i++) {
  bounceCountYellow[i].drawPikminYellowPan();
  bounceCountYellow[i].bouncingPikmin(); 
}
}

//messed up sleep schedule 
if (h >= 7 && h <= 23) { //awake (7 =7AM, 23 = 12AM)
  fill(227,87,68); 
  text("AWAKE", 700, 330);
  strokeWeight(10); 
  stroke(0); 
  line(random(795,810),400, 730, 560); 
  strokeWeight(1.5);  
  pinwheel(random(795,810),400,mmm,0.5); 
} else { //asleep (1AM, 6AM)
  fill(89,227,68); 
  text("asleep", 700, 330);
  strokeWeight(8); 
  stroke(0); 
  line(800,400, 730, 560); 
  strokeWeight(1.5);  
  pinwheel(800,400,ms,0.5); 
}

if (middleToggle) {
  middleRain.addParticle();
  middleRain.run();
}

if (h >= 15 && h <= 17) { //water plants (15 =3PM, 17 =5PM)
  middleToggle = true; 
  fill(146, 252, 252); 
  text("WATER!", width/2, 50);
  fill(159, 252, 146); 
  text("YIPPEE!!!!", width/2, 780);
} else { //no water 
  middleToggle = false; 
  fill(252, 212, 146); 
  text("we thirst...", width/2, 780);
}

if (h >= 9 && h <= 10) { //take smally outside to do her morning dump (9AM, 10AM)
  fill(43, 255, 0); 
  text("STINKY!", 60, 680);
  image(smally,60,740,150,100);  
  
}

if (h >= 15 && h <= 16) { //take smally outside to water the plants & bark at the neighbor's dogs (3PM, 4PM)
  fill(255, 0, 64); 
  text("BORK!", 60, 680);
  image(rockSmally,75,780,150,100);
}
}

function sunflowerTime (lx,ly,rot,sc) { // (x,y,rotate,scale)  //hours 
  push(); 
    translate(lx,ly);
    rotate(rot);
    scale(sc); 
    image(sunflower,0,0,100,100); 
  pop();
}
function cloudTime (lx,ly,rot,sc) { // (x,y,rotate,scale)  //hours 
  push(); 
    translate(lx,ly);
    rotate(rot);
    scale(sc); 
    image(cloud1,0,0,300,300); 
  pop();
}

function moonflowerBlueTime(lx,ly,rot,sc) {
  push(); 
    translate(lx,ly);
    rotate(rot);
    scale(sc); 
    image(moonflowerBlue,0,0,100,100); 
 pop();
}

function pinwheel(wx,wy,wrot,wsc){ //(x,y,rotate,scale)
  push();     
  strokeWeight(4); 
    translate(wx,wy) 
    scale(wsc); 
    pinTri(color(30,30,235),0,0,180+wrot,1); //top blue 
    pinTri(color(255,230,3),0,0,240+wrot,1); //top right yellow 
    pinTri(color(30,30,235),0,0,300+wrot,1); //bottom right blue
    pinTri(color(255,230,3),0,0,0+wrot,1); //bottom yellow 
    pinTri(color(30,30,235),0,0,60+wrot,1); //bottom left blue 
    pinTri(color(255,230,3),0,0,120+wrot,1); //top left yellow
  
  pop(); 
} 
  
function pinTri(pk,px,py,prot,psc) { //(color, x,y,rotate,scale)
  push()
    translate(px,py);  
    fill(pk); 
    rotate(prot); 
    scale(psc);  
    triangle(0,0,-75,100,75,100) //was (0,0,-5,20,5,20) but changed it so they are bigger 
  pop()
}



// A simple Particle class
let Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-10, 10), random(-1, 10));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(131, 207, 214, this.lifespan);
  strokeWeight(2);
  fill(43, 160, 171, this.lifespan);
  ellipse(this.position.x, this.position.y, random(5,15),random(5,15));
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};



 