
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over, imgCyan, imgRunPac, imgGhast, imgRSquare, imgDSquare, imgBGMap, imgsWakaFast, imgAh, imgHeart, imgBody, imgSoul, imgFree;
let sndGorillaz, sndWaka, sndElectric, sndVictory, sndYIPPEE, sndDeath, sndFART, sndRizz;
let tOutline, tNeon, tKing; 
let player, textA, textB, colorA, redPlayer, karmaHeart, karmaBody, karmaSoul, karmaFree, pacTrack, pacTrack1, pacTrack2, pacTrack3; //for the drawing 
let box1, box2, box3, endBox, maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8, maze9, maze10, maze11, maze12, maze13, maze14, 
maze15, maze16, maze17, maze18, maze19, maze20,  maze21,  maze22,  maze23,  maze24,  maze25,  maze26,  maze27,  maze28,  maze29,  
maze30,  maze31, maze32,  maze33,  boarder1,  boarder1W,  boarder2,  boarder2W,  boarder3,  boarder3W,  boarder4,  boarder4W; 

let score = 0; //score desides when the game ends 
//let maze; 
let pacForce = 500;
// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var pac, redSquare; 

function preload() {
   // sound should be loaded so its available for all places.
     sndGorillaz = loadSound("assets/Gorillaz_PACMAN.mp3"); //for intro? - PAC-MAN by Gorillaz ft ScHool boy Q 
     sndWaka = loadSound("assets/wakaWakaPacEating.mp3"); //for intro - waka sound 
     sndElectric = loadSound("assets/pacmanElectric.mp3"); //for main - by sbzees 
     sndVictory = loadSound("assets/PacManVictory.mp3"); //for winning scene 
     sndYIPPEE = loadSound("assets/yippee.mp3"); //for alternate winning scene 
     sndDeath = loadSound("assets/pacmanDeath.mp3"); //for when you die 
     sndFART = loadSound("assets/fartReverb.mp3"); //for when you go to help/ instruction scene 
     sndRizz = loadSound("assets/rizz.mp3"); //for when you go to info scene 
   // text 
     tOutline = loadFont("assets/outline_pixel-7.ttf");
     tNeon = loadFont("assets/neon_pixel-7.ttf");
     tKing = loadFont("assets/Kingthings Extortion.ttf"); 
   //images 
     imgCyan = loadImage("assets/cyanGhostL.png"); 
     imgRunPac = loadImage("assets/runPacR.png"); 
     imgGhast = loadImage("assets/blueGhostLogoR.png"); 
     imgsWakaFast = loadAnimation("assets/pac_fast/pac0001.png",  "assets/pac_fast/pac0016.png"); 
     imgRSquare = loadImage("assets/ghost/ghost_red_R.png"); 
     imgDSquare = loadImage("assets/ghost/ghost_blue_ah.png"); 
     imgBGMap = loadImage("assets/pac_map_BG.png"); 
     imgAh = loadImage('assets/ghost/ghost_blue_ah.png'); 
     imgHeart = loadImage('assets/karma/heart.png'); 
     imgBody = loadImage('assets/karma/body.png'); 
     imgSoul = loadImage('assets/karma/soul.png'); 
     imgFree = loadImage('assets/karma/free.png'); 

}

function setup() {
    createCanvas(800, 800);
    //console.log(hell);
    imageMode(CENTER); 
    rectMode(CORNER); // have to change the mode depending on the scene  CORNER VS CENTER 

    mgr = new SceneManager();

    //pac - intro page 
    pac = new Sprite(400, 400); 
    pac.addAnimation("waka_fast", imgsWakaFast);  // first image, and last image
    //other stuff 
    pac.scale = 0.8; 
    pac.collider = 'none'; 
    pac.layer = "Layer 2"; 
    pac.visible = false; 

    //square ghost - intro page 
	redSquare = new Sprite(); 	
	redSquare.img = imgRSquare; 
	redSquare.scale = 0.5;
    redSquare.collider = 'none';
    redSquare.layer = "Layer 2"; 
	//blueSquare.bounciness = 0.5;
    redSquare.visible = false;

//main/ game 
    //center box start 
    box1 = new Sprite(400, 430, 70, 10,'static'); //left 
	box1.color = "blue";
    box1.visible = false;  
	box2 = new Sprite(360, 400, 10, 70,'static'); //center bottom 
	box2.color = "blue";  
    box2.visible = false;  
	box3 = new Sprite(440, 400, 10, 70, 'static'); //right
	box3.color = "blue";  
    box3.visible = false;  
  //center box 
	endBox = new Sprite(400, 400, 70, 50) //end box 
	endBox.color = 'white';   
    endBox.collider = 'none'; 
	endBox.visible = false; 

  //maze boxes 
	maze1 = new Sprite(400, 80, 60, 110, 'static'); //top box 
	maze1.color = "blue"; 
    maze1.visible = false;  
	maze2 = new Sprite(400, 260, 20, 50, 'static'); //top 'T' bottom part 
	maze2.color = 'blue'; 
    maze2.visible = false;
	maze3 = new Sprite(400, 225, 80, 20, 'static'); //top 'T' top part 
	maze3.color = 'blue'; 
    maze3.visible = false;
	maze4 = new Sprite(400, 570, 20, 70, 'static'); //center 'T' bottom part 
	maze4.color = 'blue'; 
    maze4.visible = false;
	maze5 = new Sprite(400, 525, 80, 20, 'static'); //center 'T' top part 
	maze5.color = 'blue'; 
    maze5.visible = false;
	maze6 = new Sprite(400, 740, 20, 60, 'static'); //bottom 'T' bottom part 
	maze6.color = 'blue'; 
    maze6.visible = false;
	maze7 = new Sprite(400, 700, 80, 20, 'static'); //bottom 'T' top part 
	maze7.color = 'blue'; 
    maze7.visible = false;
	maze8 = new Sprite(720, 700, 100, 20, 'static'); //right bottom 'L' 
	maze8.color = 'blue'; 
    maze8.visible = false;
	maze9 = new Sprite(665, 660, 20, 100, 'static'); //right bottom 'L' 
	maze9.color = 'blue'; 
    maze9.visible = false;
	maze10 = new Sprite(550, 620, 20, 190, 'static'); //right bottom upside down 'L' 
	maze10.color = 'blue'; 
    maze10.visible = false;
	maze11 = new Sprite(610, 525, 140, 20, 'static'); //right bottom upsidedown 'L' 
	maze11.color = 'blue'; 
    maze11.visible = false;
	maze12 = new Sprite(730, 400, 90, 60, 'static'); //right center box  
	maze12.color = 'blue'; 
    maze12.visible = false;
	maze13 = new Sprite(70, 400, 90, 60, 'static'); //left center box  
	maze13.color = 'blue'; 
    maze13.visible = false;
	maze14 = new Sprite(80, 700, 100, 20, 'static'); //left bottom 'L' 
	maze14.color = 'blue'; 
    maze14.visible = false;
	maze15 = new Sprite(135, 660, 20, 100, 'static'); //left bottom 'L' 
	maze15.color = 'blue'; 
    maze15.visible = false;
	maze16 = new Sprite(250, 620, 20, 190, 'static'); //left bottom upside down 'L' 
	maze16.color = 'blue'; 
    maze16.visible = false;
	maze17 = new Sprite(190, 525, 140, 20, 'static'); //left bottom upsidedown 'L' 
	maze17.color = 'blue'; 
    maze17.visible = false;
	maze18 = new Sprite(510, 280, 50, 20, 'static'); //top right side 'T' 
	maze18.color = 'blue'; 
    maze18.visible = false;
	maze19 = new Sprite(530, 300, 20, 140, 'static'); //top right side 'T'  
	maze19.color = 'blue'; 
    maze19.visible = false;
	maze20 = new Sprite(608, 320, 20, 220, 'static'); //top right side puz   
	maze20.color = 'blue'; 
    maze20.visible = false;
	maze21 = new Sprite(700, 250, 20, 100, 'static'); //top right side puz 
	maze21.color = 'blue'; 
    maze21.visible = false;
	maze22 = new Sprite(654, 200, 112, 20, 'static'); //top right side puz  
	maze22.color = 'blue'; 
    maze22.visible = false;
	maze23 = new Sprite(720, 110, 100, 20, 'static'); //top right side line near karma  
	maze23.color = 'blue'; 
    maze23.visible = false;
	maze24 = new Sprite(530, 145, 20, 55, 'static'); //top right upsidedown 'T'  
	maze24.color = 'blue'; 
    maze24.visible = false;
	maze25 = new Sprite(540, 110, 100, 20, 'static'); //top right upside down 'T' 
	maze25.color = 'blue'; 
    maze25.visible = false;
	maze26 = new Sprite(290, 280, 50, 20, 'static'); //top right side 'T' 
	maze26.color = 'blue'; 
    maze26.visible = false;
	maze27 = new Sprite(270, 300, 20, 140, 'static'); //top right side 'T'  
	maze27.color = 'blue'; 
    maze27.visible = false;
	maze28 = new Sprite(192, 320, 20, 220, 'static'); //top right side puz   
	maze28.color = 'blue'; 
    maze28.visible = false;
	maze29 = new Sprite(100, 250, 20, 100, 'static'); //top right side puz 
	maze29.color = 'blue'; 
    maze29.visible = false;
	maze30 = new Sprite(146, 200, 112, 20, 'static'); //top right side puz  
	maze30.color = 'blue'; 
    maze30.visible = false;
	maze31 = new Sprite(80, 110, 100, 20, 'static'); //top right side line near karma  
	maze31.color = 'blue'; 
    maze31.visible = false;
	maze32 = new Sprite(270, 145, 20, 55, 'static'); //top right upsidedown 'T'  
	maze32.color = 'blue'; 
    maze32.visible = false;
	maze33 = new Sprite(260, 110, 100, 20, 'static'); //top right upside down 'T' 
	maze33.color = 'blue';  
    maze33.visible = false;

  //boarder outside box 
	boarder1 = new Sprite(400, 18, 795, 30, 'static'); //top h 
	boarder1.color = "blue";
    boarder1.visible = false;
	boarder1W = new Sprite(400, 18, 774, 10, 'static'); //top h 
	boarder1W.color = "white";
    boarder1W.visible = false;

	boarder2 = new Sprite(18, 410, 30, 770, 'static'); //left v 
	boarder2.color = "blue"; 
    boarder2.visible = false;
	boarder2W = new Sprite(18, 400, 10, 774, 'static'); //left v 
	boarder2W.color = "white"; 
    boarder2W.visible = false;

	boarder3 = new Sprite(782, 410, 30, 770, 'static'); //right v 
	boarder3.color = "blue"; 
    boarder3.visible = false;
	boarder3W = new Sprite(782, 400, 10, 774, 'static'); //right v 
	boarder3W.color = "white"; 
    boarder3W.visible = false;

	boarder4 = new Sprite(400, 782, 750, 26, 'static'); //bottom h 
	boarder4.color = "blue"; 
    boarder4.visible = false;
	boarder4W = new Sprite(400, 782, 774, 10, 'static'); //bottom h 
	boarder4W.color = "white"; 
    boarder4W.visible = false;

  //pac testing 
	pacTrack = new Sprite(400,650);
	//pacTrack.img = imgPac; //single image 
	pacTrack.addAnimation("waka_fast", imgsWakaFast);  // first image, and last image - animation 
	pacTrack.scale = 0.06;  
	pacTrack.vel.y = 1.5; 
	pacTrack.vel.x = 1.5; 
	pacTrack.bounciness = 0.6; 
    pacTrack.visible = false; 

	pacTrack1 = new Sprite(400,650);
	//pacTrack1.img = imgPac; //single image 
	pacTrack1.addAnimation("waka_fast", imgsWakaFast);  // first image, and last image - animation 
	pacTrack1.scale = 0.06;  
	pacTrack1.vel.y = 1.5; 
	pacTrack1.vel.x = 1.5; 
	pacTrack1.bounciness = 0.6; 
    //pacTrack1.collider = "none"; 
	pacTrack1.visible = false; 

	pacTrack2 = new Sprite(400,650);
	//pacTrack2.img = imgPac; //single image 
	pacTrack2.addAnimation("waka_fast", imgsWakaFast);  // first image, and last image - animation 
	pacTrack2.scale = 0.06;  
	pacTrack2.vel.y = 1.5; 
	pacTrack2.vel.x = 1.5; 
	pacTrack2.bounciness = 0.6; 
    //pacTrack2.collider = "none"; 
	pacTrack2.visible = false; 

	pacTrack3 = new Sprite(400,650);
	//pacTrack3.img = imgPac; //single image 
	pacTrack3.addAnimation("waka_fast", imgsWakaFast);  // first image, and last image - animation 
	pacTrack3.scale = 0.06;  
	pacTrack3.vel.y = 1.5; 
	pacTrack3.vel.x = 1.5; 
	pacTrack3.bounciness = 0.6; 
    //pacTrack3.collider = "none"; 
	pacTrack3.visible = false; 

  //ghost picture 
	redPlayer = new Sprite(400,400); 
	redPlayer.img = imgRSquare; 
	redPlayer.scale = 0.09;  
	//redPlayer.bounciness = 0.5; 
	redPlayer.visible = false; 


  //items/ points 
	karmaHeart = new Sprite(750,50); //top right - scale for circle was 20 for all of them 
	karmaHeart.img = imgHeart;
    karmaHeart.scale = 0.01;
    karmaHeart.color = 'yellow'; 
    karmaHeart.visible = false;
	
	karmaBody = new Sprite(50,750); //bottom left 
	karmaBody.img = imgBody;
    karmaBody.scale = 0.009;
    karmaBody.color = 'yellow'; 
    karmaBody.visible = false;
	
	karmaSoul = new Sprite(50,50); //top left 
	karmaSoul.img = imgSoul;
    karmaSoul.scale = 0.02;
    karmaSoul.color = 'yellow'; 
    karmaSoul.visible = false;
	
	karmaFree = new Sprite(750,750); //bottom right 
	karmaFree.img = imgFree;
    karmaFree.scale = 0.009;
    karmaFree.color = 'yellow'; 
    karmaFree.visible = false;
	



    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (main);
    mgr.addScene (help);
    mgr.addScene (info);
    mgr.addScene (win);
    mgr.addScene (death);
    mgr.showNextScene();


    //text settings 
    textFont(tNeon); 
    textSize(20); 
    textAlign(CENTER); 

    

}

function draw() {

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed() {
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function mouseIsPressed() {
    // pass the mousePressed message into the SceneManager
   mgr.mouseIsPressed();
}

function keyPressed() {
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( intro );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( help );
            break; 
        case 'h':
            mgr.showScene( help );
            break;
        case 'H':
            mgr.showScene( help );
            break;
        case '4':
            mgr.showScene( info );
            break;
        case 'i':
            mgr.showScene( info );
            break;
        case 'I':
            mgr.showScene( info );
            break;
        case '5':
            mgr.showScene( win );
            break;
        case '6':
            mgr.showScene( death );
            break;
        // case 'h':
        //     mgr.showScene( heart );
        //     break;
        // case 'H':
        //     mgr.showScene( heart );
        //     break;
        // case 'b':
        //     mgr.showScene( body );
        //     break;
        // case 'B':
        //     mgr.showScene( body );
        //     break;
        // case 's':
        //     mgr.showScene( soul );
        //     break;
        // case 'S':
        //     mgr.showScene( soul );
        //     break;
        // case 'f':
        //     mgr.showScene( freedom );
        //     break;
        // case 'F':
        //     mgr.showScene( freedom );
        //     break;
        
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
