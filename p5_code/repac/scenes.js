
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


////////////////////////////// 1 /////////////////
function intro()  {
    var textX;
    var textY;
    var loy= 0;  // exists as data saved when in the intro scene
    var loyS = 400; //for square ghost 
    let speedY = 6;  
    let btnevent1 =false;
    let btnevent2 =false;
    let btnevent3 =false; 
    let btnevent4 = false; 

    // scene1.setup
    this.setup = function() {
      console.log("We are at setup for intro");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      outputVolume(.15);  // turn down the volume.

    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering intro");
        background("grey");
        textAlign(CENTER);
        rectMode(CORNER); 
        textSize(30);
        textFont(tNeon);
        noStroke();
        fill(255); 

        // reset or disable the other scenes and their stuff
  //main/ game 
    //center box start 
      box1.visible = false;  
      box2.visible = false;  
      box3.visible = false;  
    //center box  
    endBox.visible = false; 
  
    //maze boxes 
      maze1.visible = false;  
      maze2.visible = false;
      maze3.visible = false;
      maze4.visible = false;
      maze5.visible = false;
      maze6.visible = false;
      maze7.visible = false;
      maze8.visible = false;
      maze9.visible = false;
      maze10.visible = false;
      maze11.visible = false;
      maze12.visible = false;
      maze13.visible = false;
      maze14.visible = false;
      maze15.visible = false;
      maze16.visible = false;
      maze17.visible = false;
      maze18.visible = false;
      maze19.visible = false;
      maze20.visible = false;
      maze21.visible = false;
      maze22.visible = false;
      maze23.visible = false;
      maze24.visible = false;
      maze25.visible = false;
      maze26.visible = false;
      maze27.visible = false;
      maze28.visible = false;
      maze29.visible = false;
      maze30.visible = false;
      maze31.visible = false;
      maze32.visible = false;  
      maze33.visible = false;
  
    //boarder outside box 
      boarder1.visible = false;
      boarder1W.visible = false;
      boarder2.visible = false;
      boarder2W.visible = false;
      boarder3.visible = false;
      boarder3W.visible = false;
      boarder4.visible = false;
      boarder4W.visible = false;
  
    //pac testing 
    pacTrack.visible = false; 
    pacTrack1.visible = false; 
    pacTrack2.visible = false; 
    pacTrack3.visible = false; 
  
    //ghost picture 
    redPlayer.visible = false; 
    //karma
      karmaHeart.visible = false;
      karmaBody.visible = false;
      karmaSoul.visible = false;
      karmaFree.visible = false;

        // turn off the other scene stuff
        sndElectric.stop();
        sndVictory.stop();
        sndDeath.stop();
        sndFART.stop(); 
        sndRizz.stop();

        //sound 
        if ( !sndGorillaz.isPlaying() ) { //change cueStart to 12 when done - or 15? 
          sndGorillaz.play(0, 1, 1, 15); // (startTime, rate, amp, cueStart, duration); ST= delay when song plays, CS= seconds into the song, D= when stop song 
        }

        //pac 
        pac.x = 200;
        pac.y = height/2; 
        //console.log (pac.position.y); 
        //pac.layer = 'Layer 2'; 
        pac.changeAnimation("waka_fast");
        pac.visible = true;

        //blue square 
        redSquare.position.x = 650; 
        //redSquare.position.y = loyS; //250 high, 400 middle, 550 low 
        //redSquare.layer = 'Layer 1'; 
        redSquare.visible = true; 

    }


    this.draw = function() {
      background("black");
      image(imgBGMap,400,400,800,800); //image BG 

      // //cross lines to position stuff 
      // strokeWeight(5); 
      // stroke(255,0,0); 
      // line(0,400,800,400); 
      // line(400,0,400,800); 
      // noStroke(); 

      //text title
      fill(255,0,0);
      textSize(100);   
      text("SQUARE", width/2, 100); 


      //console.log (pac.position.y); 
       // blue square movement 
      //rect(600,loyS,100,100); //test square 
      if ((loyS < 300) || (loyS > 515)) {
        speedY = -speedY;
      } 
      loyS += speedY;
      //console.log(speedY);
      //text("welcome", )
      redSquare.position.y = loyS; //250 high, 400 middle, 550 low 
   
      // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent1 = checkButtonPress("Help",width-110,height-50,100,40,color(252, 194, 3),color(255,0,0),color(255));  
      if (btnevent1) { // help
        btnevent1 = false;
        this.sceneManager.showScene( help );
      }
      // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent2 = checkButtonPress("Start Here",width/2-60,height-50,120,40,color(32, 252, 3),color(255,0,0),color(255));
      if (btnevent2) {   // main or next scene
        btnevent2 = false;
         playshortsound();
        this.sceneManager.showScene(main);
      }
      // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent4 = checkButtonPress("Info",width-790,height-50,100,40,color(252, 3, 207),color(255,0,0),color(255));  
      if (btnevent4) { // help
        btnevent4 = false;
        this.sceneManager.showScene( info );
      }

    }

}


///////////////////////  2  ////////////////////////

function main()  {
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

   let btnevent1 = false;

  this.setup = function() {
      console.log("We are at setup for main");
      // make sure ghost is gone from this scene
  }

  this.enter = function() {
    console.log("We are at entering main");
    rectMode(CENTER); 
    textFont(tOutline); 
    textSize(40); 
    noStroke(); 
    noFill(); 

    // reset or disable the other scenes and their stuff
    // turn off the other scene stuff
      sndGorillaz.stop(); 
      sndVictory.stop();
      sndDeath.stop();
      sndFART.stop(); 
      sndRizz.stop();
    pac.visible = false; 
    redSquare.visible = false; 


    if ( !sndElectric.isPlaying() ) { 
      sndElectric.play(0, 1, 2); // (startTime, rate, amp, cueStart, duration);
   }

   //main/ game 
    //center box start 
	box1.color = "blue";
  box1.collider = "static";
    box1.visible = true;  
	box2.color = "blue";  
  box2.collider = "static";
    box2.visible = true;  
	box3.color = "blue";  
  box3.collider = "static";
    box3.visible = true;  
  //center box 
	endBox.color = 'white';  
  endBox.collider = "none";
	endBox.visible = false; 

  //maze boxes 
	maze1.color = "blue"; 
    maze1.visible = true;  
	maze2.color = 'blue'; 
    maze2.visible = true;
	maze3.color = 'blue'; 
    maze3.visible = true;
	maze4.color = 'blue'; 
    maze4.visible = true;
	maze5.color = 'blue'; 
    maze5.visible = true;
	maze6.color = 'blue'; 
    maze6.visible = true;
	maze7.color = 'blue'; 
    maze7.visible = true;
	maze8.color = 'blue'; 
    maze8.visible = true;
	maze9.color = 'blue'; 
    maze9.visible = true;
	maze10.color = 'blue'; 
    maze10.visible = true;
	maze11.color = 'blue'; 
    maze11.visible = true;
	maze12.color = 'blue'; 
    maze12.visible = true;
	maze13.color = 'blue'; 
    maze13.visible = true;
	maze14.color = 'blue'; 
    maze14.visible = true;
	maze15.color = 'blue'; 
    maze15.visible = true;
	maze16.color = 'blue'; 
    maze16.visible = true;
	maze17.color = 'blue'; 
    maze17.visible = true;
	maze18.color = 'blue'; 
    maze18.visible = true;
	maze19.color = 'blue'; 
    maze19.visible = true;
	maze20.color = 'blue'; 
    maze20.visible = true;
	maze21.color = 'blue'; 
    maze21.visible = true;
	maze22.color = 'blue'; 
    maze22.visible = true;
	maze23.color = 'blue'; 
    maze23.visible = true; 
	maze24.color = 'blue'; 
    maze24.visible = true;
	maze25.color = 'blue'; 
    maze25.visible = true;
	maze26.color = 'blue'; 
    maze26.visible = true; 
	maze27.color = 'blue'; 
    maze27.visible = true; 
	maze28.color = 'blue'; 
    maze28.visible = true;
	maze29.color = 'blue'; 
    maze29.visible = true;
	maze30.color = 'blue'; 
    maze30.visible = true;
	maze31.color = 'blue'; 
    maze31.visible = true;
	maze32.color = 'blue'; 
    maze32.visible = true;
	maze33.color = 'blue';  
    maze33.visible = true;

  //boarder outside box 
	boarder1.color = "blue";
    boarder1.visible = true;
	boarder1W.color = "white";
    boarder1W.visible = true;
 
	boarder2.color = "blue"; 
    boarder2.visible = true;
	boarder2W.color = "white"; 
    boarder2W.visible = true;

	boarder3.color = "blue"; 
    boarder3.visible = true;
	boarder3W.color = "white"; 
    boarder3W.visible = true;

	boarder4.color = "blue"; 
    boarder4.visible = true;
	boarder4W.color = "white"; 
    boarder4W.visible = true;

  //pac testing 
	//pacTrack.img = imgPac; //single image 
  pacTrack.visible = true; 

	//pacTrack1.img = imgPac; //single image 
  pacTrack1.layer = '2'; 
	pacTrack1.visible = false; 

	//pacTrack2.img = imgPac; //single image 
  pacTrack2.layer = '2'; 
	pacTrack2.visible = false; 

	//pacTrack3.img = imgPac; //single image 
  pacTrack3.layer = '2'; 
	pacTrack3.visible = false; 

  //ghost picture 
	redPlayer.img = imgRSquare; 
	redPlayer.scale = 0.09;  
	//redPlayer.bounciness = 0.5; 
	redPlayer.visible = true; 


  //items/ points 
	//karmaHeart.img = ;
    karmaHeart.color = 'yellow'; 
    karmaHeart.visible = true;
	
	//karmaBody.img = ;
    karmaBody.color = 'yellow'; 
    karmaBody.visible = true;
	
	//karmaSoul.img = ;
    karmaSoul.color = 'yellow'; 
    karmaSoul.visible = true;
	
	//karmaFree.img = ;
    karmaFree.color = 'yellow'; 
    karmaFree.visible = true;

  }


  this.draw = function() {
	background(0); 
  noFill();
  noStroke(0) 
	textS = "Score " + score; 
	// //cross lines to help me position stuff 
	//   strokeWeight(5); 
	//   stroke(0,255,0); 
	//   line(0,400,800,400); 
	//   line(400,0,400,800); 
	//   noStroke(); 
  redPlayer.moveTowards(mouse); 

	//items removal 
	  if (redPlayer.overlaps(karmaHeart)){
		score += 1; 
	  }
	  if (redPlayer.overlaps(karmaHeart)) karmaHeart.remove();

	  if (redPlayer.overlaps(karmaBody)){
		score += 1; 
	  }
	  if (redPlayer.overlaps(karmaBody)) karmaBody.remove();

	  if (redPlayer.overlaps(karmaSoul)){
		score += 1; 
	  }
	  if (redPlayer.overlaps(karmaSoul)) karmaSoul.remove(); 

	  if (redPlayer.overlaps(karmaFree)){
		score += 1; 
	  }
	  if (redPlayer.overlaps(karmaFree)) karmaFree.remove();
    
	  if (pacTrack.overlaps(redPlayer)) {
      this.sceneManager.showScene( death );
    }; //change so it changes to a game over screeen 

	 

    //red square movement stuff  
	  //redPlayer.moveTowards(mouse, 0.10);

    //pacman tracking and speed 
	  pacTrack.attractTo(redPlayer, pacForce); //(position, force)

	  //console.log(pacForce); 
	//pacman speed text  
	  fill(255,0,0); 
	  text(textB,400,665); 
	  //console.log(textB); 

	// if (redPlayer.mouse.pressing()) {
	// 	redPlayer.moveTowards(mouse, 0.05);
	// 	redPlayer.bearing = -90;
	// 	//player.applyForceScaled(6,6); //(x,y)
		
	// }

	//shows collision squares 
	// if (kb.presses(2)) {
	// 	//redPlayer.scale = 0.1;
	// 	pacTrack.scale = 0.1; 
	// }
	// redPlayer.debug = mouse.pressing();
	// pacTrack.debug = mouse.pressing();
	  



	if (score >= 1) {
		pacTrack1.visible = true;  
		if (pacTrack1.overlaps(redPlayer)) {
    this.sceneManager.showScene( death );
  }
  pacTrack1.layer = '1'; 
		pacTrack1.attractTo(redPlayer, pacForce); //(position, force)
		//textS = "come here"; 
	} //change so it changes to winning screen 
	if (score >= 2){ 
    pacTrack2.visible = true;
    if (pacTrack2.overlaps(redPlayer)) {
      this.sceneManager.showScene( death );
    } //change so it changes to a game over screeen 
    pacTrack2.layer = '1'; 
		pacTrack2.attractTo(redPlayer, pacForce); //(position, force)
		//textS = "come here"; 
	}
	if (score >= 3) {
    
		pacTrack3.visible = true; 
		if (pacTrack3.overlaps(redPlayer)) {
      this.sceneManager.showScene( death );
    }; //change so it changes to a game over screeen 
    pacTrack3.layer = '1'; 
		pacTrack3.attractTo(redPlayer, pacForce); //(position, force)
		//textS = "come here"; 
	} 
	if (score >= 4){ 
    endBox.visible = true; 
    if (redPlayer.overlaps(endBox)) {
		 this.sceneManager.showScene(win);  
    }
    box1.visible = false; 
    box1.collider = "none";
    box1.visible = false; 
    box2.collider = "none";
    box1.visible = false; 
    box3.collider = "none";
    endBox.collider = "static"; 
		
		textS = "come here"; 
    
    // if (mouseIsPressed.endBox) {
    //   this.sceneManager.showScene(win);  
    // }
	}

	
	// if (redPlayer.overlaps(endBox)) {
	// 	redPlayer.visible = false; 
	// } 
	
	console.log(textS); 
	//text for score 
	fill(255,0,0); 
	text(textS, 400, 350); 

  if (kb.pressing('C')) { //cheat by pressing 'c' 
		redPlayer.overlaps(box1); redPlayer.overlaps(box2); redPlayer.overlaps(box3); redPlayer.overlaps(endBox); 
	 	redPlayer.overlaps(maze1); redPlayer.overlaps(maze2); redPlayer.overlaps(maze3); redPlayer.overlaps(maze4); redPlayer.overlaps(maze5); 
		redPlayer.overlaps(maze6); redPlayer.overlaps(maze7); redPlayer.overlaps(maze8); redPlayer.overlaps(maze9); redPlayer.overlaps(maze10); 
		redPlayer.overlaps(maze11); redPlayer.overlaps(maze12); redPlayer.overlaps(maze13); redPlayer.overlaps(maze14); redPlayer.overlaps(maze15); 
		redPlayer.overlaps(maze16); redPlayer.overlaps(maze17); redPlayer.overlaps(maze18); redPlayer.overlaps(maze19); redPlayer.overlaps(maze20); 
		redPlayer.overlaps(maze21); redPlayer.overlaps(maze22); redPlayer.overlaps(maze23); redPlayer.overlaps(maze24); redPlayer.overlaps(maze25); 
		redPlayer.overlaps(maze26); redPlayer.overlaps(maze27); redPlayer.overlaps(maze28); redPlayer.overlaps(maze29); redPlayer.overlaps(maze30); 
		redPlayer.overlaps(maze31); redPlayer.overlaps(maze32); redPlayer.overlaps(maze33);
		redPlayer.img = imgAh;
	 } else {
		redPlayer.collides(box1); redPlayer.collides(box2); redPlayer.collides(box3); redPlayer.collides(endBox); 
	 	redPlayer.collides(maze1); redPlayer.collides(maze2); redPlayer.collides(maze3); redPlayer.collides(maze4); redPlayer.collides(maze5); 
		redPlayer.collides(maze6); redPlayer.collides(maze7); redPlayer.collides(maze8); redPlayer.collides(maze9); redPlayer.collides(maze10); 
		redPlayer.collides(maze11); redPlayer.collides(maze12); redPlayer.collides(maze13); redPlayer.collides(maze14); redPlayer.collides(maze15); 
		redPlayer.collides(maze16); redPlayer.collides(maze17); redPlayer.collides(maze18); redPlayer.collides(maze19); redPlayer.collides(maze20); 
		redPlayer.collides(maze21); redPlayer.collides(maze22); redPlayer.collides(maze23); redPlayer.collides(maze24); redPlayer.collides(maze25); 
		redPlayer.collides(maze26); redPlayer.collides(maze27); redPlayer.collides(maze28); redPlayer.collides(maze29); redPlayer.collides(maze30); 
		redPlayer.collides(maze31); redPlayer.collides(maze32); redPlayer.collides(maze33);
	 	redPlayer.img = imgRSquare;
	 }

	//console.log(score); 
	//noLoop(); 

  // rectMode(CORNER); 
  //   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
  //   btnevent1 = checkButtonPress("Help",width-85,height-45,80,40,color(252, 194, 3),color(255,0,0),color(255));  
  //   if (btnevent1) { // help
  //     btnevent1 = false;
  //     this.sceneManager.showScene( help );
  //   }
  //   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
  //   btnevent3 = checkButtonPress("Home",width/2-40,height-795,80,40,color(32, 252, 3),color(255,0,0),color(255));
  //   if (btnevent3) {   // main or next scene
  //     btnevent3 = false;
  //       //playshortsound();
  //     this.sceneManager.showScene(intro);
  //   }
  //   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
  //   btnevent4 = checkButtonPress("Info",width-790,height-50,80,40,color(252, 3, 207),color(255,0,0),color(255));  
  //   if (btnevent4) { // help
  //     btnevent4 = false;
  //     this.sceneManager.showScene( info );
  //   }
    noFill(); 
    stroke(0,0); 
    noStroke(); 

  }  //end

    // this.mousePressed = function() {
    //   redPlayer.moveTowards(mouse, 0.05);
    //   redPlayer.bearing = -90;
    //   //player.applyForceScaled(6,6); //(x,y)
      
    // }

    // this.mouseIsPressed = function() {
    //   redPlayer.moveTowards(mouse, 0.05);
    //   redPlayer.bearing = -90;
    //   //player.applyForceScaled(6,6); //(x,y)
    // }

    this.keyPressed = function() {
        switch(key)
        {
            case '0':
          pacForce = 0;
          textB = 'Speed0'; 
          break;
        case 'q':
                pacForce = 250;
          textB = 'Speed250'; 
                break;
        case 'Q':
                pacForce = 250;
          textB = 'Speed250'; 
                break;
            case 'w':
                pacForce = 500;
          textB = 'Speed500'; 
                break;
        case 'W':
                pacForce = 500;
          textB = 'Speed500'; 
                break;
            case 'e':
                pacForce = 1000;
          textB = 'Speed1000'; 
                break;
         case 'E':
                pacForce = 1000;
          textB = 'Speed1000'; 
                break;
            case 'r':
                pacForce = 5000;
          textB = 'Speed5000'; 
                break;
        case 'R':
                pacForce = 5000;
          textB = 'Speed5000'; 
                break;
        case 't':
          pacForce = 9000;
          textB = 'Speed9000'; 
          break;
        case 'T':
          pacForce = 9000;
          textB = 'Speed9000'; 
          break;
        }

    }


}



////////////////////////////// 3 /////////////////

function help() {

    this.setup = function()  {
        console.log("We are at setup for help");
        // access a different scene using the SceneManager

    }

    this.enter = function() {
     console.log("We are at entering for help");
     noStroke(0); 
     rectMode(CORNER); 
     textFont(tNeon);
     noFill();

     // reset or disable the other scenes and their stuff
     //main/ game 
    //center box start 
    box1.visible = false;  
    box2.visible = false;  
    box3.visible = false;  
  //center box  
  endBox.visible = false; 

  //maze boxes 
    maze1.visible = false;  
    maze2.visible = false;
    maze3.visible = false;
    maze4.visible = false;
    maze5.visible = false;
    maze6.visible = false;
    maze7.visible = false;
    maze8.visible = false;
    maze9.visible = false;
    maze10.visible = false;
    maze11.visible = false;
    maze12.visible = false;
    maze13.visible = false;
    maze14.visible = false;
    maze15.visible = false;
    maze16.visible = false;
    maze17.visible = false;
    maze18.visible = false;
    maze19.visible = false;
    maze20.visible = false;
    maze21.visible = false;
    maze22.visible = false;
    maze23.visible = false;
    maze24.visible = false;
    maze25.visible = false;
    maze26.visible = false;
    maze27.visible = false;
    maze28.visible = false;
    maze29.visible = false;
    maze30.visible = false;
    maze31.visible = false;
    maze32.visible = false;  
    maze33.visible = false;

  //boarder outside box 
    boarder1.visible = false;
    boarder1W.visible = false;
    boarder2.visible = false;
    boarder2W.visible = false;
    boarder3.visible = false;
    boarder3W.visible = false;
    boarder4.visible = false;
    boarder4W.visible = false;

  //pac testing 
  pacTrack.visible = false; 
  pacTrack1.visible = false; 
  pacTrack2.visible = false; 
  pacTrack3.visible = false; 

  //ghost picture 
  redPlayer.visible = false; 
  //karma
    karmaHeart.visible = false;
    karmaBody.visible = false;
    karmaSoul.visible = false;
    karmaFree.visible = false;

        // turn off the other scene stuff
        sndGorillaz.stop(); 
        sndElectric.stop();
        sndVictory.stop();
        sndDeath.stop();
        sndRizz.stop();

        //sound 
        if ( !sndFART.isPlaying() ) { // (startTime, rate, amp, cueStart, duration);
          sndFART.play(0, 1, 4);
        }
      pac.visible = false; 
      redSquare.visible = false; 

    }

    this.draw = function() {
      background("black");
      image(imgGhast,400,730,100,100); //image BG 
      // this is the draw function for all p5.play commands
      
    push(); 
      translate(0,50);
      textAlign(CENTER); 
      textFont(tOutline); 
      // fill(0); 
      // noStroke(0); 
      // rect(140,10, 515, 50);
      fill(255,0,0); 
      textSize(35); 
      text( "HELP - INSTRUCTION PAGE" , 400,40);
       
      textSize(30); 
      fill(255,0,0); 
      text( "General Instructions:", 400, 100); 
      textSize(25); 
      fill(255); 
      text( "1 = intro/ start page \n2 = main/ game page \n3 = help page \n4 = info page" , 400,150);

      textSize(30); 
      fill(255,0,0); 
      text( "Main Page/ Game Instructions:", 400, 300); 
      textSize(25); 
      fill(255);
      text("Use mouse to navigate \nby clicking or holding the mouse. \nGather the orbs, the game ends when you \nget all four and get back to the start.", 400, 350);

      textSize(30); 
      fill(255,0,0); 
      text( "Speed Controls:", 400, 500); 
      textSize(25); 
      fill(255);
      text("q/Q = speed 0, w/W = speed 500, \ne/E = 1000, r/R = 9000", 400, 550);
    pop(); 

     // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
     btnevent3 = checkButtonPress("Home",width-130,height-790,120,40,color(32, 252, 3),color(255,0,0),color(255));
     if (btnevent3) {   // main or next scene
       btnevent3 = false;
        playshortsound();
       this.sceneManager.showScene(intro);
     }
     // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
     btnevent4 = checkButtonPress("Info",width-790,height-50,100,40,color(252, 3, 207),color(255,0,0),color(255));  
     if (btnevent4) { // help
       btnevent4 = false;
       this.sceneManager.showScene( info );
     }
        
    }

   

}


////////////////////////////// 4 /////////////////

function info() {

  this.setup = function()  {
      console.log("We are at setup for info");
      // access a different scene using the SceneManager

  }

  this.enter = function() {
   console.log("We are at entering for info");
    noStroke(0); 
    rectMode(CORNER); 
    textFont(tNeon);
    noFill(); 
   // reset or disable the other scenes and their stuff
   //main/ game 
    //center box start 
    box1.visible = false;  
    box2.visible = false;  
    box3.visible = false;  
  //center box  
  endBox.visible = false; 

  //maze boxes 
    maze1.visible = false;  
    maze2.visible = false;
    maze3.visible = false;
    maze4.visible = false;
    maze5.visible = false;
    maze6.visible = false;
    maze7.visible = false;
    maze8.visible = false;
    maze9.visible = false;
    maze10.visible = false;
    maze11.visible = false;
    maze12.visible = false;
    maze13.visible = false;
    maze14.visible = false;
    maze15.visible = false;
    maze16.visible = false;
    maze17.visible = false;
    maze18.visible = false;
    maze19.visible = false;
    maze20.visible = false;
    maze21.visible = false;
    maze22.visible = false;
    maze23.visible = false;
    maze24.visible = false;
    maze25.visible = false;
    maze26.visible = false;
    maze27.visible = false;
    maze28.visible = false;
    maze29.visible = false;
    maze30.visible = false;
    maze31.visible = false;
    maze32.visible = false;  
    maze33.visible = false;

  //boarder outside box 
    boarder1.visible = false;
    boarder1W.visible = false;
    boarder2.visible = false;
    boarder2W.visible = false;
    boarder3.visible = false;
    boarder3W.visible = false;
    boarder4.visible = false;
    boarder4W.visible = false;

  //pac testing 
  pacTrack.visible = false; 
  pacTrack1.visible = false; 
  pacTrack2.visible = false; 
  pacTrack3.visible = false; 

  //ghost picture 
  redPlayer.visible = false; 
  //karma
    karmaHeart.visible = false;
    karmaBody.visible = false;
    karmaSoul.visible = false;
    karmaFree.visible = false;

      // turn off the other scene stuff
      sndGorillaz.stop(); 
      sndElectric.stop();
      sndVictory.stop();
      sndDeath.stop();
      sndFART.stop();

      //sound 
      if ( !sndRizz.isPlaying() ) {
        sndRizz.play(0, 1, 4, 1); // (startTime, rate, amp, cueStart, duration);
      }
    pac.visible = false; 
    redSquare.visible = false; 

  }

  this.draw = function() {
    background("black");
    image(imgRunPac,400,700,100,100); //image BG 
    // this is the draw function for all p5.play commands
    
  push(); 
    translate(0,100);
    textFont(tOutline); 
    // fill(0); 
    // noStroke(0); 
    // rect(140,10, 515, 50);
    fill(255,0,0); 
    textSize(35); 
    text( "INFORMATION PAGE" , 400,50);
     
    fill(255);
    textSize(25); 
    text( "Based on Pac-Man" , 400,100); 

    textSize(30); 
    fill(255,0,0); 
    text("Images:", 400, 150); 
    fill(255);
    textSize(25); 
    text( "Pac-Man and Square Ghost: made in Photoshop \nBG image (intro): Pac-Man map \nBG images (help + info): orignal Pac-Man logos. \nOther images from Adobe Stock", 400, 190);
    
    textSize(30); 
    fill(255,0,0); 
    text("Sounds:", 400, 320); 
    fill(255);
    textSize(25); 
    text( "Intro: PAC-MAN by Gorillaz (ft. ScHool boy Q) \nMain: PacMan (Electro 2014 Remix) by sbzees \nDead: pacman death sound \nWin: pacman victory sound \nHelp: fart with reverb \nInfo: Rizz sound", 400, 360);

  pop(); 

  //  // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
  //  btnevent1 = checkButtonPress("Help",width-770,height-790,120,40,color(252, 194, 3),color(255,0,0),color(255));
  //  if (btnevent1) {   // main or next scene
  //    btnevent1 = false;
  //     playshortsound();
  //    this.sceneManager.showScene(help);
  //  }
    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Help",width-110,height-50,100,40,color(252, 194, 3),color(255,0,0),color(255));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
   btnevent3 = checkButtonPress("Home",width-130,height-790,120,40,color(32, 252, 3),color(255,0,0),color(255));
   if (btnevent3) {   // main or next scene
     btnevent3 = false;
      //playshortsound();
     this.sceneManager.showScene(intro);
   }
      
  }

 

}


////////////////////////////// 5 /////////////////

function win() {
let angle; 
  this.setup = function()  {
      console.log("We are at setup for win");
      // access a different scene using the SceneManager 

  }

  this.enter = function() {
   console.log("We are at entering for win");
   noStroke(0); 
   rectMode(CORNER); 
   textFont(tNeon);
   noFill();

   // reset or disable the other scenes and their stuff
   //main/ game 
    //center box start 
    box1.visible = false;  
    box2.visible = false;  
    box3.visible = false;  
  //center box  
  endBox.visible = false; 

  //maze boxes 
    maze1.visible = false;  
    maze2.visible = false;
    maze3.visible = false;
    maze4.visible = false;
    maze5.visible = false;
    maze6.visible = false;
    maze7.visible = false;
    maze8.visible = false;
    maze9.visible = false;
    maze10.visible = false;
    maze11.visible = false;
    maze12.visible = false;
    maze13.visible = false;
    maze14.visible = false;
    maze15.visible = false;
    maze16.visible = false;
    maze17.visible = false;
    maze18.visible = false;
    maze19.visible = false;
    maze20.visible = false;
    maze21.visible = false;
    maze22.visible = false;
    maze23.visible = false;
    maze24.visible = false;
    maze25.visible = false;
    maze26.visible = false;
    maze27.visible = false;
    maze28.visible = false;
    maze29.visible = false;
    maze30.visible = false;
    maze31.visible = false;
    maze32.visible = false;  
    maze33.visible = false;

  //boarder outside box 
    boarder1.visible = false;
    boarder1W.visible = false;
    boarder2.visible = false;
    boarder2W.visible = false;
    boarder3.visible = false;
    boarder3W.visible = false;
    boarder4.visible = false;
    boarder4W.visible = false;

  //pac testing 
  pacTrack.visible = false; 
  pacTrack1.visible = false; 
  pacTrack2.visible = false; 
  pacTrack3.visible = false; 

  //ghost picture 
  redPlayer.visible = false; 
  //karma
    karmaHeart.visible = false;
    karmaBody.visible = false;
    karmaSoul.visible = false;
    karmaFree.visible = false;

      // turn off the other scene stuff
      sndGorillaz.stop(); 
      sndElectric.stop();
      sndRizz.stop();
      sndDeath.stop();
      sndFART.stop();

      //sound 
      if ( !sndVictory.isPlaying() ) {
        sndVictory.play(0, 1, 4); // (startTime, rate, amp, cueStart, duration);
      }
    pac.visible = false; 
    redSquare.visible = false; 

  }

  this.draw = function() {
    background("green");
 
    push(); 
      translate(0,0); 
      //rotate(angle); 
      image(imgRSquare,400,700,100,100); //image BG 
    pop(); 
    // angle = angle + 1;
    // console.log(angle);  
    // this is the draw function for all p5.play commands
    
  push(); 
    translate(0,100);
    textFont(tOutline); 
    // fill(0); 
    // noStroke(0); 
    // rect(140,10, 515, 50);
    fill(255); 
    textSize(50); 
    text( "U PASSED! :D", 400, 100);
     
    fill(255);
    textSize(30); 
    text( "you gathered all you needed to move on", 400,250); 
    text("refresh the page to restart \nor go to the info page", 400, 400); 
  pop(); 

   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
   btnevent4 = checkButtonPress("Info",width-790,height-50,100,40,color(252, 3, 207),color(255,0,0),color(255));  
   if (btnevent4) { // help
     btnevent4 = false;
     this.sceneManager.showScene( info );
   }
      
  }

 

}

////////////////////////////// 6 /////////////////

function death() {

  this.setup = function()  {
      console.log("We are at setup for death");
      // access a different scene using the SceneManager

  }

  this.enter = function() {
   console.log("We are at entering for death"); 
   noStroke(0); 
   rectMode(CORNER); 
   textFont(tNeon);
   noFill(); 

   // reset or disable the other scenes and their stuff
   //main/ game 
    //center box start 
    box1.visible = false;  
    box2.visible = false;  
    box3.visible = false;  
  //center box  
  endBox.visible = false; 

  //maze boxes 
    maze1.visible = false;  
    maze2.visible = false;
    maze3.visible = false;
    maze4.visible = false;
    maze5.visible = false;
    maze6.visible = false;
    maze7.visible = false;
    maze8.visible = false;
    maze9.visible = false;
    maze10.visible = false;
    maze11.visible = false;
    maze12.visible = false;
    maze13.visible = false;
    maze14.visible = false;
    maze15.visible = false;
    maze16.visible = false;
    maze17.visible = false;
    maze18.visible = false;
    maze19.visible = false;
    maze20.visible = false;
    maze21.visible = false;
    maze22.visible = false;
    maze23.visible = false;
    maze24.visible = false;
    maze25.visible = false;
    maze26.visible = false;
    maze27.visible = false;
    maze28.visible = false;
    maze29.visible = false;
    maze30.visible = false;
    maze31.visible = false;
    maze32.visible = false;  
    maze33.visible = false;

  //boarder outside box 
    boarder1.visible = false;
    boarder1W.visible = false;
    boarder2.visible = false;
    boarder2W.visible = false;
    boarder3.visible = false;
    boarder3W.visible = false;
    boarder4.visible = false;
    boarder4W.visible = false;

  //pac testing 
  pacTrack.visible = false; 
  pacTrack1.visible = false; 
  pacTrack2.visible = false; 
  pacTrack3.visible = false; 

  //ghost picture 
  redPlayer.visible = false; 
  //karma
    karmaHeart.visible = false;
    karmaBody.visible = false;
    karmaSoul.visible = false;
    karmaFree.visible = false;

      // turn off the other scene stuff
      sndGorillaz.stop(); 
      sndElectric.stop();
      sndVictory.stop();
      sndDeath.stop();
      sndFART.stop();
      sndRizz.stop();

      //sound 
      if ( !sndDeath.isPlaying() ) {
        sndDeath.play(0, 1, 4); // (startTime, rate, amp, cueStart, duration);
      }
    pac.visible = false; 
    redSquare.visible = false; 

  }

  this.draw = function() {
    background("red");
    push(); 
      translate(0,0); 
      //rotate(angle); 
      image(imgDSquare,400,700,100,100); //image BG 
    pop(); 
    // this is the draw function for all p5.play commands
    
  push(); 
    translate(0,80);
    textFont(tOutline); 
    // fill(0); 
    // noStroke(0); 
    // rect(140,10, 515, 50);
    fill(0); 
    textSize(50); 
    text( "Y O U   F A I L E D ", 400, 100);
   
    textSize(30); 
    text( "so close but so far \nyou don't have what it takes to move on \n so you will stay here", 400,200); 
    textSize(50);
    text("F O R E V E R", 400, 380); 
    textSize(30);
    text("refresh the page to restart", 400, 480); 
  pop(); 

   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
   btnevent3 = checkButtonPress("Home",width-130,height-790,120,40,color(32, 252, 3),color(255,0,0),color(255));
   if (btnevent3) {   // main or next scene
     btnevent3 = false;
      playshortsound();
     this.sceneManager.showScene(intro);
   }
      
  }

 

}


function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH,10); // draw the box

  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text (str,boxW/2,28);

    pop();

    return btnstate;
    noStroke(); 
    noFill(); 

}



function playshortsound() {
  if ( !sndFART.isPlaying() ) {
    sndFART.play();
  } else {
     sndFART.stop();
 }


}