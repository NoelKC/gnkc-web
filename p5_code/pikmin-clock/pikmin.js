


//Pikmin Classes - just standing around - no animations 
class ncPikmin { //norm red pikmin looking left 
  k; 
  cx;
  cy;
  rot;
  sc;
  //prof made 
  sx; 
  sy; 
//sytem for bouncing Pikmin 
  speedX; 
  speedY;
  loX;
  loY;
  randomRot; 


  constructor( Pk,  Plx,  Ply,  Prot, Psc) {
  //general - for main standing Pikmin 
   this.k = Pk;  
   this.cx = Plx;
   this.cy = Ply;
   this.rot = Prot; 
   this.sc = Psc; 
  //prof made 
   this.sx = random(-2,2); 
   this.sy = random(-2,2); 
  //sytem for bouncing Pikmin 
   this.speedX = random(-5, 5); 
   this.speedY = random(-5, 5);
   this.loX = 390;
   this.loY = 320; 
   this.randomRot = random(-10,10);  

  }

  //key - (color, x,y,rotate,scale)
  //red pikmin
  drawPikminRedPan () { //Red Pikmin - Panik - flower 
    push();
      translate(this.cx,this.cy);
      //rotate(random(10,20));
      rotate(this.rot);
      scale(this.sc);
      this.flower(this.k,40,25,35);    
      this.neck(this.k,40,30);
      this.head(this.k,40,30);
      this.sclera(255,30,28);
      this.pupil(0,25,28);
      this.nose(this.k,40,30,0);
      this.sclera(255,49,28);
      this.pupil(0,55,28);
      this.body(this.k,40,72);
      this.ArmLeg(this.k,32,60,15); //left arm 
      this.ArmLeg(this.k,52,72,135,1.2); //right arm 
      this.ArmLeg(this.k,28,78,290); //left leg 
      this.ArmLeg(this.k,44,78,265); //right leg 
    pop();
  } 

  //yellow pikmin 
  drawPikminYellowPan () { //yellow pikmin - panik - leaf 
    push();
      translate(this.cx,this.cy);
      rotate(this.rot);
      scale(this.sc);
      this.leaf(this.k,40,25,35);    
      this.neck(this.k,40,30);
      this.EarLeft(this.k,40,30,0);
      this.EarRight(this.k,65,30,0);
      this.head(this.k,40,30);
      this.sclera(255,30,28);
      this.pupil(0,25,28);
      this.sclera(255,49,28);
      this.pupil(0,55,28);
      this.body(this.k,40,72);
      this.ArmLeg(this.k,32,60,15); //left arm 
      this.ArmLeg(this.k,52,72,135,1.2); //right arm 
      this.ArmLeg(this.k,28,78,290); //left leg 
      this.ArmLeg(this.k,44,78,265); //right leg 
    pop();
  } 

  //blue pikmin 
  drawPikminBluePan () { //blue pikmin - panik - bud
    push();
      translate(this.cx,this.cy);
      rotate(this.rot);
      scale(this.sc);
      this.bud(this.k,40,25,35);    
      this.neck(this.k,40,30);
      this.head(this.k,40,30);
      this.sclera(255,30,28);
      this.pupil(0,25,28);
      this.sclera(255,49,28);
      this.pupil(0,55,28);
      this.mouth(this.k,36,38,0);
      this.body(this.k,40,72);
      this.ArmLeg(this.k,32,60,15); //left arm 
      this.ArmLeg(this.k,52,72,135,1.2); //right arm 
      this.ArmLeg(this.k,28,78,290); //left leg 
      this.ArmLeg(this.k,44,78,265); //right leg 
    pop();
  } 
 
//Animation - Movement - they are moving and groving 
//bouncing Pikmin 
  bouncingPikmin(){ 
      this.cx = this.loX; 
      this.cy = this.loY; 
    if ((this.loX < 15) || (this.loX > width-20)) {
      this.speedX = -this.speedX; 
    }
    if ((this.loY < 300) || (this.loY > 780)) {
      this.speedY = -this.speedY;
  }
      this.loX += this.speedX;
      this.loY += this.speedY;
      this.rot += this.randomRot;
    console.log(this.speedX + " || " + this.speedY);  
  }
 
 
 
 
 //test movement Prof. made 
  update(){
  this.cx += this.sx;  
  this.cy += this.sy;  

 }


  
  //basic body 
  body(k,lx,ly,rot,sc){ 
    push();
      translate(lx,ly);
      rotate(rot);
      scale(sc); 
      fill(k);
      strokeWeight(0);
    //body
       ellipse(0,0,25,35);
       ellipse(0,5,30,30);
  
    pop();
  }
  
  ArmLeg(k,lx,ly,rot,sc){ //this is funky to rotate but might fix it later idk :/ might just have to add push, pop, and translate then edit all of the code afterwards 
    //no toes/ fingers 
    push(); 
      translate(lx,ly); 
      rotate(rot);
      scale(sc); 
      strokeWeight(0);
      //stroke(0,50);
      fill(k);
    //limb 
      triangle(0,0,-40,10,0,10);
    pop(); 
  }
    
  head(k,lx,ly,rot,sc){ //Head 
    push();
      translate(lx,ly); 
      rotate(rot);
      scale(sc); 
      fill(k);
     strokeWeight(0); 
    //head 
       ellipse(0,0,40,40);
       ellipse(0,5,40,40);
    pop();
  }
  
  sclera(k,lx,ly,rot,sc){ //outside of the eye 
    push(); 
      translate(lx,ly); 
      rotate(rot);
      scale(sc); 
      strokeWeight(0);
      fill(k);
    //sclera 
      ellipse(0,0,18,15);
    pop(); 
  }
  
  pupil(k,lx,ly,rot,sc){ //center of the eye  
    push(); 
      translate(lx,ly); 
      rotate(rot);
      scale(sc); 
      strokeWeight(0);
      fill(k); 
    //pupil
      ellipse(0,0,8,8);
    pop(); 
  }
  
  neck(k,lx,ly,rot,sc){ 
    push();
     translate(lx,ly);
     fill(k);
     strokeWeight(0);
    //neck 
     rect(0,22,15,20,    15,15,15,15);
    pop();
  }


  //more specialized body parts - for specific Pikmin 
  nose(k,lx,ly,rot,sc){ //Mainly for Red Pikmin 
    push();
     translate(lx,ly);
     rotate(rot);
     scale(sc); 
     fill(k);
    //nose 
     triangle(0,0,-30,15,0,10);
     strokeWeight(2);
     stroke(173,12,12);
     line(0,0,-30,15);
     line(-30,15,0,10);
    pop();
  }
  
  EarLeft(k,lx,ly,rot,sc){ //Mainly for Yellow Pikmin - left 
    push();
     translate(lx,ly);
     rotate(rot);
     scale(sc); 
     fill(k);
    //ear outline 
       triangle(-50,-12,-12,-8,-12,20);
    //inner ear  
       fill(255,185,3);
       triangle(-40,-8,-12,-2,-12,15);
       strokeWeight(2);
       stroke(255,149,0);
       line(-40,-8,-13,-2);
    pop();
  }
  
  EarRight(k,lx,ly,rot,sc){ //Mainly for Yellow Pikmin - right 
    push();
     translate(lx,ly);
     rotate(rot);
     scale(sc); 
     fill(k);
    //ear outline 
       triangle(30,-12,-12,-8,-12,20);
    //inner ear  
       fill(255,185,3);
       triangle(20,-8,-12,-2,-12,15);
       strokeWeight(2);
       stroke(255,149,0);
       line(20,-8,-13,-2);
    pop();
  }
  
  mouth(k,lx,ly,rot,sc){ //Mainly for Blue Pikmin 
    push(); 
     translate(lx,ly);
     rotate(rot);
     scale(sc); 
     strokeWeight(2);
    //mouth 
     stroke(251,207,252);
     fill(253,181,255);
     triangle(0,0,5,8,-5,8);
    pop(); 
  }
  
  hair(k,lx,ly,rot,sc){ //Mainly for Purple Pikmin 
    push();
     translate(lx,ly);
     rotate(rot);
     scale(sc); 
     fill(k);
     strokeWeight(4);
     stroke(k)
    //left side  - center to left 
      line(-9,-19,-16,-30);
      line(-16,-15,-20,-20);
      line(-15,-5,-28,-18);
    //right side   
      line(9,-19,16,-30);
      line(16,-15,20,-20);
      line(15,-5,28,-18);
    pop();
  }
  
  wing (k,lx,ly,rot,sc){ //Mainly for pink pikmin 
    push();
    translate(lx,ly);
    rotate(rot);
    scale(sc); 
    fill(k);
    strokeWeight(1);
    stroke(2,121,207,150)
   //base of the wing 
    ellipse(0,0,15,22);
   //lines in the wing 
    line(1,2,3,10); 
    line(-1,2,-3,10); 
    line(-1,2,1,2); 
    line(-1,2,-6,-5);
    line(1,2,6,-5); 
    line(0,1,0,-10);
   pop();
  }
  

  //the stems for all the Pikmin 
  leaf(k,lx,ly,rot,sc){
    strokeWeight(0);
    push();
     translate(lx,ly);
     rotate(rot);
     scale(sc); 
    //leaf 
       fill(12,148,14);
       ellipse(0,-50,20,20);
       triangle(-10,-52,0,-80,10,-52);
       strokeWeight(2);
       stroke(5,92,6);
       line(0,-45,0,-75);
       line(0,-45,5,-50);
       line(0,-50,-5,-55);
       line(0,-55,3,-60);
       line(0,-60,-3,-65);
       strokeWeight(0);
    //stem 
       fill(k);
       triangle(-8,-10,0,-50,8,-10);
    pop();
  } 

  bud(k,lx,ly,rot,sc){
    strokeWeight(0);
    push();
     translate(lx,ly);
     rotate(rot);
     scale(sc); 
    //stem    
     fill(k);
     strokeWeight(0);
     triangle(-8,-10,0,-50,8,-10);
    //bud  
     fill(5,92,6);
     ellipse(0,-52,20,20);
     fill(182,240,183);
     ellipse(0,-60,10,10);
     ellipse(5,-58,10,10);
     ellipse(-5,-58,10,10);
     ellipse(-8,-54,5,5);
     ellipse(8,-54,5,5);
     ellipse(0,-54,5,5);
    pop();
  }
  
  flower(k,lx,ly,rot,sc){
    strokeWeight(0);
    push();
     translate(lx,ly);
     rotate(rot);
     scale(sc); 
    //stem 
     fill(k);
     strokeWeight(0);
     triangle(-8,-10,0,-50,8,-10);
    //flower 
     strokeWeight(1);
     stroke(237,232,213);
     fill(250)   
     ellipse(0,-50,18,15)
     ellipse(10,-50,11,12)
     ellipse(-10,-50,11,12)
     fill(242,197,15)
     ellipse(0,-50,15,15); //center bud 
     fill(250)
     ellipse(10,-45,13,13);
     ellipse(-10,-45,13,13);
     ellipse(0,-42,15,15);
    pop();
  }


}

