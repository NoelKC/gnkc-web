    
    

// Exersice 5 - Halloween / "Spooky theme" pixel size 16x16 -> basically rip off Skid & Pump 
//16x16 

// how to add to grid -> just copy and paste a row ex: [0,0,0,0,0,0]

//Noel - Skid and Pump 
var pumpKid = [ // 0= transparent, 1= green, 2= dark orange,  -> Pump 
// 3= orange, 4= yellow, 5= red, 6= white, 7= dark blue  
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], //1
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], //2 
  [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0], //3 
  [0, 0, 0, 0, 3, 2, 2, 3, 2, 2, 3, 0, 0, 0, 0, 0], //4 
  [0, 0, 0, 0, 3, 4, 2, 3, 4, 2, 3, 0, 0, 0, 0, 0], //5
  [0, 0, 0, 0, 3, 2, 2, 3, 2, 2, 3, 0, 0, 0, 0, 0], //6
  [0, 0, 0, 0, 0, 3, 3, 2, 3, 3, 0, 0, 0, 0, 0, 0], //7 
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0], //8
  [0, 0, 0, 0, 0, 3, 5, 6, 5, 3, 0, 0, 0, 0, 0, 0], //9
  [0, 0, 0, 0, 3, 0, 5, 6, 5, 0, 3, 0, 0, 0, 0, 0], //10
  [0, 0, 0, 3, 0, 0, 5, 3, 5, 0, 0, 3, 0, 0, 0, 0], //11
  [0, 3, 5, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 3, 0, 0], //12
  [0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0], //13
  [0, 0, 0, 0, 0, 0, 7, 0, 7, 0, 0, 0, 0, 0, 0, 0], //14
  [0, 0, 0, 0, 0, 0, 7, 0, 7, 0, 0, 0, 0, 0, 0, 0], //15
  [0, 0, 0, 0, 5, 6, 5, 0, 5, 6, 5, 0, 0, 0, 0, 0], //16 
]; 
var skidKid = [ // 0= transparent, 1= cyan, 2= dark cyan,  -> Skid 
// 3= purple, 4= yellow, 5= gray, 6= white, 7= seafoam green   
  [0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0],   
  [0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 2, 2, 6, 2, 2, 6, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 2, 1, 6, 2, 1, 6, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 6, 2, 6, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 6, 0, 6, 6, 6, 0, 6, 0, 0, 0, 0, 0], 
  [0, 0, 0, 6, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 0], 
  [0, 0, 0, 6, 0, 0, 6, 6, 6, 0, 0, 6, 0, 0, 0, 0], 
  [0, 0, 0, 0, 6, 6, 4, 4, 4, 6, 6, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 6, 4, 0, 4, 6, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 7, 3, 7, 0, 7, 3, 7, 0, 0, 0, 0, 0], 
];

//Guzel -  Draculaura and Frankie 
let drac = [
  [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
  [0, 2, 6, 6, 2, 0, 0, 0, 0, 0, 0, 2, 6, 6, 2, 0],
  [2, 6, 6, 6, 6, 2, 6, 2, 6, 2, 2, 6, 6, 6, 6, 2],
  [2, 6, 6, 0, 2, 2, 6, 2, 6, 6, 2, 2, 0, 6, 6, 2],
  [2, 6, 6, 0, 2, 6, 6, 2, 2, 6, 6, 2, 0, 6, 6, 2],
  [2, 6, 6, 2, 2, 6, 6, 2, 2, 6, 6, 2, 2, 6, 6, 2],
  [2, 6, 6, 2, 2, 2, 6, 2, 2, 2, 6, 6, 2, 6, 6, 2],
  [2, 6, 6, 0, 1, 1, 5, 1, 1, 5, 1, 1, 0, 6, 2, 2],
  [2, 6, 6, 0, 1, 1, 4, 1, 1, 4, 1, 1, 0, 6, 2, 2],
  [0, 2, 6, 0, 0, 1, 1, 1, 1, 1, 2, 0, 0, 6, 2, 0],
  [0, 2, 0, 0, 5, 5, 4, 3, 3, 4, 5, 5, 0, 6, 2, 0],
  [2, 0, 0, 3, 5, 0, 3, 3, 3, 3, 0, 5, 3, 0, 0, 2],
  [0, 0, 0, 1, 3, 0, 4, 4, 4, 4, 0, 3, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0],
];
let dracClose = [
  [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
  [0, 2, 6, 6, 2, 0, 0, 0, 0, 0, 0, 2, 6, 6, 2, 0],
  [2, 6, 6, 6, 6, 2, 6, 2, 6, 2, 2, 6, 6, 6, 6, 2],
  [2, 6, 6, 0, 2, 2, 6, 2, 6, 6, 2, 2, 0, 6, 6, 2],
  [2, 6, 6, 0, 2, 6, 6, 2, 2, 6, 6, 2, 0, 6, 6, 2],
  [2, 6, 6, 2, 2, 6, 6, 2, 2, 6, 6, 2, 2, 6, 6, 2],
  [2, 6, 6, 2, 2, 2, 6, 2, 2, 2, 6, 6, 2, 6, 6, 2],
  [2, 6, 6, 0, 1, 5, 1, 1, 1, 1, 5, 1, 0, 6, 2, 2],
  [2, 6, 6, 0, 1, 1, 5, 1, 1, 5, 1, 1, 0, 6, 2, 2],
  [0, 2, 6, 0, 0, 1, 1, 1, 1, 1, 2, 0, 0, 6, 2, 0],
  [0, 2, 0, 0, 0, 5, 4, 3, 3, 4, 5, 0, 0, 6, 2, 0],
  [2, 0, 0, 0, 5, 5, 3, 3, 3, 3, 5, 5, 0, 0, 0, 2],
  [0, 0, 0, 1, 3, 3, 4, 4, 4, 4, 3, 3, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
];
let frankie = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 6, 3, 6, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 6, 3, 6, 3, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 3, 3, 3, 6, 3, 3, 6, 3, 3, 3, 0, 0, 0],
  [0, 0, 0, 3, 3, 6, 6, 3, 3, 6, 6, 3, 3, 0, 0, 0],
  [0, 0, 0, 3, 6, 1, 1, 1, 1, 1, 1, 6, 3, 0, 0, 0],
  [0, 0, 0, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 0, 0, 0],
  [0, 0, 0, 6, 1, 1, 2, 1, 1, 8, 1, 1, 6, 0, 0, 0],
  [0, 0, 0, 6, 1, 1, 2, 1, 1, 8, 1, 1, 6, 0, 0, 0],
  [0, 0, 0, 6, 6, 8, 1, 1, 1, 1, 1, 6, 6, 0, 0, 0],
  [0, 0, 0, 6, 1, 4, 3, 6, 3, 3, 4, 1, 6, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 4, 6, 6, 4, 0, 1, 5, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 4, 4, 4, 4, 0, 5, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0],
]; 
let frankieClose = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 6, 3, 6, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 6, 3, 6, 3, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 3, 3, 3, 6, 3, 3, 6, 3, 3, 3, 0, 0, 0],
  [0, 0, 0, 3, 3, 6, 6, 3, 3, 6, 6, 3, 3, 0, 0, 0],
  [0, 0, 0, 3, 6, 1, 1, 1, 1, 1, 1, 6, 3, 0, 0, 0],
  [0, 0, 0, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 0, 0, 0],
  [0, 0, 0, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 0, 0, 0],
  [0, 0, 0, 6, 1, 2, 2, 1, 1, 8, 8, 1, 6, 0, 0, 0],
  [0, 0, 0, 6, 6, 8, 1, 1, 1, 1, 1, 6, 6, 0, 0, 0],
  [0, 0, 0, 6, 6, 4, 3, 6, 3, 3, 4, 6, 6, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 4, 6, 6, 4, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 4, 4, 4, 4, 1, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
];


//Beckett - Bones 
let bigSkull = [
[0,0,0, 0, 1, 1, 1, 1, 1 ,1 ,1 ,1 ,0 ,0,0,0],
[0, 0, 1, 0, 0, 0, 0, 0 , 0,0,0,0,0,1,0,0],
[0, 1, 0, 0, 0, 0, 0, 0 , 0,0,0,0,0,0,1,0],
[1, 0, 0, 0, 0, 0, 0 ,0 , 0,0,0,0,0,0,0,1],
[1, 0, 0, 0, 1, 0, 0, 0 , 0,0,0,0,1,0,0,1],
[1, 0, 0, 1, 1, 1, 0,0 , 0,0,0,1,0,1,0,1],
[1, 0, 0, 1, 1, 1, 0,0 , 0,0,0,1,0,1,0,1],
[1, 0, 0, 0, 1, 0, , 0, 1,0,0,0,1,0,0,1],
[1, 0, 0, 0, 0, 0, 0, 1, 1,1,0,0,0,0,0,1],
[0, 1, 0, 0, 0, 0, 0, 1, 0, 1,0,0,0,0,1,0],
[0, 0, 1, 0, 0, 0, 0, 0, 0,0,0,0,0,1,0,0],
[0, 0, 0, 1, 0, 0, 0, 0, 0,0,0,0,1,0,0,0],
[0, 0, 0, 1, 0, 0, 0, 0, 0,0,0,0,1,0,0,0],
[0, 0, 0, 1, 1 ,0, 1, 0, 0, 1,0,1,1,0,0,0],
[0, 0,0 , 0, 1, 0, 1, 0, 0, 1,0,1,0,0,0,0],
[0, 0, 0, 0, 1, 1, 1, 1, 1, 1,1,1,0,0,0,0],
]; 
let bigBone = [
  [0,0,0, 0, 0, 0, 0, 1, 1 ,1 ,0 ,0 ,0 ,0,0,0],
  [1, 1, 1, 0, 0, 0, 1, 1 , 1,1,1,0,0,0,0,0],
  [1, 1, 1, 1, 0, 1, 1, 1 , 1,1,1,0,0,0,0,0],
  [1, 1, 1, 1, 1, 1, 1 ,1 , 1,1,1,0,0,0,0,0],
  [1, 1, 1, 1, 1, 1, 1, 1 , 1,1,1,0,0,0,0,0],
  [1, 1, 1, 1, 1, 1, 1,1, 1,1,0,0,0,0,0,0],
  [1, 1, 1, 0, 1, 1, 1,1 , 0,0,0,0,0,0,0,0],
  [0, 0, 0, 0, 0, 1,1 , 1, 1,0,0,0,0,0,0,0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1,1,0,0,0,0,0,0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1,1,0,1,1,1,1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1,1,1,1,1,1,1,1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,1,1,1,1,1,1,1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1,1,1,1,1,1,1,1],
  [0, 0, 0, 0, 0 ,0, 0, 1, 1, 1,1,1,1,1,1,1],
  [0, 0,0 , 0, 0, 0, 0, 1, 1, 1,1,1,0,0,0,0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1,1,0,0,0,0,0],
]; 
let litch = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
  [0, 0, 3, 3, 0, 6, 6, 6, 3, 6, 6,3 , 3, 0, 0, 0],
  [0, 0, 0, 3, 3, 3, 6, 3, 3, 6, 6, 3, 0, 3, 0, 0],
  [0, 0, 0, 3, 3, 6, 3, 3, 3, 3, 6, 3, 0, 3, 0, 0],
  [0, 0, 0, 6, 6, 1, 1, 1, 1, 1, 1, 3, 3, 0, 0, 0],
  [0, 0, 0, 6, 1, 2, 1, 1, 1, 1, 2, 1, 6, 0, 0, 0],
  [0, 0, 0, 6, 2, 4, 2, 1, 1, 2, 4, 2, 6, 0, 0, 0],
  [0, 0, 0, 6, 1, 2, 1, 1, 1, 1, 2, 1, 6, 0, 0, 0],
  [4, 0, 0, 6, 6, 1, 5, 5, 5, 5 , 1, 6, 6, 0, 0,4],
  [4, 4, 0, 0, 6, 1, 5, 5, 5, 5, 1, 6, 0, 0, 4, 4],
  [4, 4, 4, 6, 6, 6, 6, 1, 1,6, 6, 6, 6, 4, 4, 4],
  [0, 4, 4, 1, 1, 6, 7, 3, 3, 7, 6, 1, 1, 4, 4, 0],
  [0, 0, 4, 1, 1, 6, 7, 7, 7, 7, 6, 1, 1, 4, 0, 0],
  [0, 0, 6, 6, 6, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0],
  [0, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0],

];
var marceDad = [
  [0, 0, , 11, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0], //1
  [12, 0, 0, 0, 11, 11, 6, 6, 6, 11, 11, 0, 0, 0, 12, 0], //2 
  [12, 12, 0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 12, 12, 0], //3 
  [12, 12, 12, 0, 6, 10, 10, 6, 10, 10, 6, 0, 12, 12, 12, 0], //4 
  [0, 12, 0, 0, 6, 6, 6, 2, 6, 6, 6, 0, 0, 12, 0, 0], //5
  [0, 12, 12, 0, 6, 6, 6, 2, 6, 6, 6, 0, 12, 12, 0, 0], //6
  [0, 0, 12, 12, 4, 6, 6, 9, 6, 6, 4, 12, 12, 0, 0, 0], //7 
  [0, 0, 0, 12, 12, 4, 9, 9, 9, 4, 12, 12, 0, 0, 0, 0], //8
  [0, 0, 0, 0, 3, 3, 9, 3, 9, 3, 3, 0, 0, 0, 0, 0], //9
  [0, 0, 0, 3, 2, 2, 2, 8, 2, 2, 2, 3, 0, 0, 0, 0], //10
  [0, 3, 0, 2, 2, 2, 2, 8, 2, 2, 0, 2, 2, 3, 0, 0], //11
  [3, 3, 8, 2, 0, 2, 2, 2, 2, 2, 0, 0, 8, 3, 3, 0], //12
  [0, 0, 0, 0, 0, 2, 2, 7, 2, 2, 0, 0, 0, 0, 0, 0], //13
  [0, 0, 0, 0, 0, 0, 7, 0, 7, 0, 0, 0, 0, 0, 0, 0], //14
  [0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0], //15
  [0, 0, 0, 0, 5, 5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 0], //16 
];
let textSkull = [
  ["", "", "", "", "skeletons","skeletons", "skeletons", "skeletons", "skeletons", "skeletons","skeletons", "skeletons", "", "", "",""],
  ["", "", "scary", "", "","", "", "", "", "","", "", "", "scary", "",""],
  ["", "scary", "", "", "","", "", "", "", "","", "", "", "", "scary",""],
  ["scary", "", "", "", "","", "", "", "", "","", "", "", "", "","scary"],
  ["scary", "", "", "", "scary","", "", "", "", "","", "", "scary", "", "","scary"],
  ["scary", "", "", "shivers", "spine","shivers", "", "", "", "","", "shivers", "spine", "shivers", "","scary"],
  ["scary", "", "", "shivers", "spine","shivers", "", "", "", "","", "shivers", "spine", "shivers", "","scary"],
  ["scary", "", "" , "spine", "skeleton","spine", "", "", "", "","", "spine", "skeleton", "spine", "","scary"],
  ["scary", "", "", "", "scary","", "", "", "spine", "","", "", "scary", "", "",""],
  ["scary", "", "", "", "","", "", "", "spine", "","", "", "", "", "","scary"],
  ["scary", "", "", "", "","", "", "spine", "", "spine","", "", "", "", "","scary"],
  ["", "spooky", "", "", "","", "", "", "", "","", "", "", "", "spooky",""],
  ["", "", "spooky", "", "","", "", "", "", "","", "", "", "spooky", "",""],
  ["", "", "", "spooky", "","", "spine", "", "", "spine","", "", "spooky", "", "",""],
  ["", "", "", "", "spooky","", "spine", "", "", "spine","", "spooky", "", "", "",""],
  ["", "", "", "", "","spooky", "spine", "boo", "boo", "spine","boo", "spooky", "", "", "",""],

];

var a = 0;

//text 
// 16x16 
let textarr1 = [ //BLOOD= RED, PUMPKIN= ORANGE, SPOOKY= YELLOW, SLIME= GREEN, 
// DEATH= BLUE, CURSES= PURPLE 
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
];

// 16x16 
let textarr2 = [ //BLOOD= RED, PUMPKIN= ORANGE, SPOOKY= YELLOW, SLIME= GREEN, 
// DEATH= BLUE, CURSES= PURPLE 
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY"],
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"],
  ["CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY", "PUMPKIN", "BLOOD", "CURSES", "DEATH", "SLIME", "SPOOKY"],
];

// 16x16 
let textarr3 = [ //BLOOD= RED, PUMPKIN= ORANGE, SPOOKY= YELLOW, SLIME= GREEN, 
// DEATH= BLUE, CURSES= PURPLE 
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"], 
  ["CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY"], 
  ["DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN"], 
  ["SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD"], 
  ["SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES"], 
  ["PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH"], 
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"], 
  ["CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY"], 
  ["DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN"], 
  ["SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD"], 
  ["SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES"], 
  ["PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH"], 
  ["BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME"], 
  ["CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY"], 
  ["DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN"], 
  ["SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD", "PUMPKIN", "SPOOKY", "SLIME", "DEATH", "CURSES", "BLOOD"], 
];

// 16x16 
let textHourGlass = [ //BLOOD= RED, PUMPKIN= ORANGE, SPOOKY= YELLOW, SLIME= GREEN, 
// DEATH= BLUE, CURSES= PURPLE 
  ["CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES"], 
  ["", "CURSES", "", "SPOOKY", "SPOOKY", "", "", "", "", "", "", "", "", "", "CURSES", ""], 
  ["", "", "CURSES", "PUMPKIN", "PUMPKIN", "SPOOKY", "", "", "", "", "", "", "", "CURSES", "", ""], 
  ["", "", "", "CURSES", "PUMPKIN", "PUMPKIN", "SPOOKY", "SPOOKY", "", "", "SPOOKY", "SPOOKY", "CURSES", "", "", ""], 
  ["", "", "", "", "CURSES", "BLOOD", "PUMPKIN", "PUMPKIN", "SPOOKY", "SPOOKY", "PUMPKIN", "CURSES", "", "", "", ""], 
  ["", "", "", "", "", "CURSES", "BLOOD", "BLOOD", "PUMPKIN", "PUMPKIN", "CURSES", "", "", "", "", ""], 
  ["", "", "", "", "", "", "CURSES", "BLOOD", "BLOOD", "CURSES", "", "", "", "", "", ""], 
  ["", "", "", "", "", "", "", "CURSES", "CURSES", "", "", "", "", "", "", ""], //middle  
  ["", "", "", "", "", "", "", "CURSES", "CURSES", "", "", "", "", "", "", ""], 
  ["", "", "", "", "", "", "CURSES", "BLOOD", "BLOOD", "CURSES", "", "", "", "", "", ""], 
  ["", "", "", "", "", "CURSES", "", "BLOOD", "BLOOD", "", "CURSES", "", "", "", "", ""], 
  ["", "", "", "", "CURSES", "", "", "BLOOD", "BLOOD", "","", "CURSES", "", "", "", ""], 
  ["", "", "", "CURSES", "", "", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "","", "CURSES", "", "", ""], 
  ["", "", "CURSES", "", "", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "BLOOD","", "CURSES", "", ""], 
  ["", "CURSES", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "BLOOD", "CURSES", ""], 
  ["CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES", "CURSES"], 
];

//text var 
let oldP; 
//images 
let images =[];
//pages 
let currentPage = 0; 

//text and image preloads 
function preload()  {
  //load text 
  oldP = loadFont("assets/old_pixel-7.ttf"); 
  
  //load images 
  //sponge 
  images[0] = loadImage('assets/brain_sponge.png'); //value - 2 
  images[1] = loadImage('assets/haunted_ghost.png'); //value - 3 
  images[2] = loadImage('assets/haunted_shop.png'); //value - 1 
  images[3] = loadImage('assets/human_sponge.png'); //value - else/ 7 
  images[4] = loadImage('assets/pat_sponge.png'); //value - 4 
  images[5] = loadImage('assets/treat_sponge.png'); //value - 5 
  images[6] = loadImage('assets/blank.png'); //value - 0 
  //candy 
  images[7] = loadImage('assets/g_bear.png'); //value - 1 - green 
  images[8] = loadImage('assets/licorice.png'); //value - 2 - black 
  images[9] = loadImage('assets/c_corn_pile.png'); //value - 3 - orange 
  images[10] = loadImage('assets/yellow_lollipop.png'); //value - 4 - yellow 
  images[11] = loadImage('assets/rancher.png'); //value - 5 - red 
  images[12] = loadImage('assets/marsh.png'); //value - 6 - white 
  images[13] = loadImage('assets/blue_sour.png'); //value - 7 - dark blue 

}

function setup() {
  createCanvas(800, 800);
  background(0, 60, 150);
  fill(100);
  textAlign(LEFT);
  textFont(oldP);
   
}


function draw() {
  background(0);

  if (currentPage == 1) { //Edits of Skid & Pump + text  
    background(3,252,98,222); 
    //text background - text array 
      mapToColorText(textarr1,-200,50,0,5,150); 
    //background extra 
    fill(255,161,38,200);
    noStroke(0); 
    ellipse(400,400,600,600); 
    //skidKid...(gridadarr1, x,y,rot,scale, alpha) 
      mapNeon(skidKid, -50,50,340,2); //<- rotated pump neon 
      mapBleb(skidKid,500,900,-100,1.8); //<- rotated pump bleb/ t colors
      mapCandy(skidKid, images, 450, 0, 30,1.5) //<- rotated skid candy 
      mapSponge(skidKid, images, -45,280,340,1.8) //<- rotated skid sponge 
    //pumpKid...(gridadarr1, x,y,rot,scale, alpha) 
      mapNeon(pumpKid,500,200,300,2) //<- rotated pump neon  
      mapBleb(pumpKid, 450,750,200,1.8); //<- rotated pump bleb/ t colors 
      mapCandy(pumpKid,images,700,200,50,1.8) //<- rotated pump candy 
      mapSponge(pumpKid, images, 280,750,150,1.2); //<- rotated pump sponge 
    push();
      translate(100,30);
      fill(255,180); 
      rect(160,288,280,120); //text box - center
      rect(200,620,200,80); //text box - bottom center 
      fill(0);
      textSize(30); 
      let t = "Here are some copies of my numerical gridArrays, mapped different ways."
      text(t,150,320,300);  
      let t1 = "With a textArray background." 
      text(t1,200,650,200); 
    pop();
  }

  else if (currentPage == 2) { //text and team members stuff 
    //text background - text array 
      mapToColorText(textarr3,-200,50,0,5);
    //Bones & Adventure Time - Beckett 
      mapSunset(bigBone,100,20,50,1); //<- top left 
      mapSunset(bigBone,380,50,-20,1); //<-top right 
      mapSunset(bigBone,620,800,-100,1); //<-bottom right 
      mapNeon(bigSkull,150,150,0,2.8); 
      mapSunset(bigBone,360,510,100,1); //<- bottom left 
      mapNeon(litch,450,640,-50,1.5);
      mapSunset(marceDad, 320,160,150,1.8); 
    //Monster High - Guzel 
      mapPastel(drac,100,450,35,1.8); 
    push();
      translate(100,30);
      //text boxes 
      fill(0,200); 
      rect(130,-20,300,110); //top 
      rect(240,720,220,45); //bottom 
      fill(255); 
      textSize(30);
      let t = "This is my team members' work with remixed colors."
      text(t,130,20,300);  
      let t1 = "With my text array background." 
      text(t1,200,750,300); 
    pop();
    //overlap 
    //Monster High - Guzel 
      mapBleb(frankie,750,380,220,1.8); 
  }

    else if (currentPage == 3) { //remix of all of our stuff 
    //text background - text array 
      //mapToColorText(textarr2,-200,50,0,5,150);
      mapTextSpaced(textHourGlass,50,80,0,1.8); 
      mapTextSpaced(textHourGlass,50,80,50,.5); 
      mapTextSpaced(textHourGlass,150,250,80,.2); 
      mapTextSpaced(textHourGlass,0,0,80,.5); 
      mapTextSpaced(textHourGlass,100,600,60,.2); 
      mapTextSpaced(textHourGlass,200,400,100,.5); //right side
      mapTextSpaced(textHourGlass,740,80,50,.5); 
      mapTextSpaced(textHourGlass,780,500,150,.5); 
      mapTextSpaced(textHourGlass,750,350,50,.2); 
      mapTextSpaced(textHourGlass,750,630,80,.2); 
    //Bones & Adventure Time - Beckett 
      mapPastel(bigBone,100,20,50,1, 180); //<- top left 
      mapPastel(bigBone,380,50,-20,1, 180); //<-top right 
      mapPastel(bigBone,620,800,-100,1, 180); //<-bottom right 
      mapSunset(bigSkull,300,150,25,2, 180); 
      mapPastel(bigBone,360,510,100,1, 180); //<- bottom left 
      mapPastel(litch,280,200,80,1.5);
      mapBleb(marceDad, 640,440,25,1.5); 
    //Monster High - Guzel 
      mapNeon(drac,700,380,220,1.8); 
      mapCandy(frankie,images,120,400,36,1.8);
    //Skid & Pump - Noel 
      frankieColor(pumpKid, 290,580,-20,.8); 
      MDColor(skidKid,700,540,220,1); 
    push();
      translate(100,30);
      //text boxes 
      fill(0,180); 
      rect(-20,-20,300,110); //team 
      fill(255); 
      textSize(30);
      let t = "This is another remix with my work as well."
      text(t,-20,20,300);  
    pop(); 
  }

  else if (currentPage == 4) { //List and OG arrays    
    background(168,50,78,150); 
    textAlign(LEFT);
    //Monster High - Guzel 
      dracColor(dracClose, 50,80,0,.5); 
      frankieColor(frankieClose, 30,550,0,.6); 
    //Bones & Adventure Time - Beckett 
      litchColor(litch, 290,50,0,1);
      MDColor(marceDad, 290, 550,0,1); 
    //Skid & Pump - Noel 
      skidKidMapRegColor(skidKid, 550, 55, 0, 1); 
      pumpKidMapRegColor(pumpKid, 550, 555, 0,1); 
    push();
      translate(100,30);
      fill(255,150); 
      noStroke(); 
      rect(-10,340,70,45); 
      rect(240,340,95,45); 
      rect(510,340,60,45); 
      fill(0);
      textSize(30);
      let t = "Who did what - The OG designs and colors "
      text(t,-80,0,300);  
      let t1 = "Guzel"
      text(t1,0,370,300); 
      let t2 = "Beckett" 
      text(t2,250,370,300) 
      let t3 = "Mine"
      text(t3,520,370,300) 
    pop();
  }

  else if (currentPage == 5) { // close up of text 
    background(0,150); 
    //text array 
      mapTextSpaced(textHourGlass,10,50,0,1.9); 
    push();
      translate(100,30);
      fill(255);
      textSize(30);
      let t = "close up on text "
      text(t,-120,380,300);  
    pop();
  }

  else if (currentPage == 6) { // close up of image 
    //Candy image 
    mapCandy(pumpKid,images,100,35,0,3.8); 
    push();
      translate(100,30);
      fill(255);
      textSize(30);
      let t = "close up on images"
      text(t,-40,380,300);  
    pop();
  }

  else if (currentPage == 7) { //testing / extra page 
    background(3,161,252,150);  
    //Monster High - Guzel 
      mapPastel(drac, 580,50,0,1); 
      modMapPastel(drac,500,680,150,1); 
    //skidSkid 
      modMapSunset(skidKid,-10,-25,0,1); 
    //pumpKid...(gridadarr1, x,y,rot,scale, alpha) 
      modMapPastel(pumpKid,550,650,0,.5); 
      cirmapBleb(pumpKid,380,450,0,1.5);  
      modMapNoen(pumpKid, 400,150,50,1.5);  
    push();
      translate(100,30);
      fill(0);
      textSize(30);
      let t = "WTF did u do to them? "
      text(t,300,0,300);  // the 4th argument is the textWidth per line. 
      let t1 = "testing page" 
      text(t1,450,380,300);
    pop();
  }

  else { //Home page - Intro/ OG Skid & Pump 
    background(0);
    textAlign(CENTER);
      //skidKid...(gridadarr1, x,y,rot,scale, alpha) 
        skidKidMapRegColor(skidKid,150,450,0,1.5); //<- reg skid close up 
      //pumpKid...(gridadarr1, x,y,rot,scale, alpha) 
        pumpKidMapRegColor(pumpKid,380,450,0,1.5); //<- reg pump close up 
      //test 
    push();    
      translate(80,100);
      strokeWeight(5); 
      stroke(255); 
      fill(0,0); 
      rect(-25,-45,700,200); 
      noStroke(0); 
      fill(200);
      textSize(38);
      let t1 = "My group members were:" 
      text(t1,-20,0,700,200);
      let tN = "Beckett VL & Guzel A"
      text(tN ,-20 ,50, 700,200 );
      let t2 = "And we are the Halloweenies!"
      text(t2 ,-20 ,110,700,200); 
    pop();
  }
}

//Skid and Pump color Pallets 
//x,y,rot,scale, alpha/ trnasparency  
function pumpKidMapRegColor(arr,lx,ly,rot,sc, fade) { // Regular colored pumpkin kid 
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if (value === 1) {          //green 
            fill(17, 194, 23, fade);
          } else if (value === 2) { //dark orange 
            fill(80, 20, 20, fade);
          } else if (value === 3) { //orange 
            fill(240, 115, 26, fade);
          } else if (value === 4) { //yellow  
            fill(240, 197, 26, fade);
          } else if (value === 5) { // red   
            fill(255, 0, 0, fade);
          } else if (value === 6) { //white  
            fill(255, fade);
          } else if (value === 7) { //dark blue 
            fill(9, 38, 133, fade);
          } else {                  //transparent = 0 
            fill(0,0); 
        }

        noStroke();
        rect(j * 12, i * 12, 15, 15);
      }
    }
  pop();

}
//x,y,rot,scale, alpha/ trnasparency  
function skidKidMapRegColor(arr,lx,ly,rot,sc, fade) { // Regular colored pumpkin kid 
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if (value === 1) {          //cyan 
            fill(0, 242, 255, fade);
          } else if (value === 2) { //dark cyan 
            fill(0,29,31, fade);
          } else if (value === 3) { //purple  
            fill(55, 0, 128, fade);
          } else if (value === 4) { //yellow  
            fill(240, 197, 26, fade);
          } else if (value === 5) { // gray    
            fill(150, 150, 150, fade);
          } else if (value === 6) { //white  
            fill(255, fade);
          } else if (value === 7) { //seafoam green  
            fill(132, 209, 177, fade);
          } else {                  //transparent = 0 
            fill(0, 0);
        }

        noStroke();
        rect(j * 12, i * 12, 13, 13);
      }
    }
  pop();

}

//Diff. colors - for any character  
function mapMono (arr,lx,ly,rot,sc, fade) { // Black and White colored pumpkin kid - cannot get the transparent one to stay transparent
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        fill(arr[i][j] * 60, fade);
        noStroke();
        rect(j * 12, i * 12, 15, 15);
      }
    }
  pop();
}
function mapPastel(arr,lx,ly,rot,sc, fade) { // Pastel colored pumpkin kid 
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if (value === 1) {          //green 
            fill(180, 249, 165, fade);
          } else if (value === 2) { //dark orange 
            fill(156, 111, 95, fade);
          } else if (value === 3) { //orange 
            fill(245, 173, 148, fade);
          } else if (value === 4) { //yellow  
            fill(255, 241, 166, fade);
          } else if (value === 5) { // red   
            fill(245, 148, 150, fade);
          } else if (value === 6) { //white  
            fill(255, fade);
          } else if (value === 7) { //dark blue 
            fill(158, 231, 245, fade);
          } else {                  //transparent = 0 
            fill(0, 0);
        }
        
        noStroke();
        rect(j * 12, i * 12, 15, 15);
      }
    }
  pop();

}
function mapBleb(arr,lx,ly,rot,sc, fade) { // Bleb colored pumpkin kid 
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if (value === 1) {          //green - dark blue 
            fill(78, 139, 196, fade);
          } else if (value === 2) { //dark orange - dark pink 
            fill(255, 153, 190, fade);
          } else if (value === 3) { //orange - light pink 
            fill(255, 194, 217, fade);
          } else if (value === 4) { //yellow  - yellow 
            fill(250, 224, 132, fade);
          } else if (value === 5) { // red   - light blue 
            fill(194, 225, 252, fade);
          } else if (value === 6) { //white  
            fill(255, fade);
          } else if (value === 7) { //dark blue - medium blue 
            fill(150, 203, 252, fade);
          } else {                  //transparent = 0 
            fill(0, 0);
        }
        
        noStroke();
        rect(j * 12, i * 12, 15, 15);
      }
    }
  pop();

}
function mapSunset (arr,lx,ly,rot,sc, fade) { // sunset colored pumpkin kid 
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if (value === 1) {          //green 
            fill(144, 12, 63, fade);
          } else if (value === 2) { //dark orange 
            fill(88, 24, 69, fade);
          } else if (value === 3) { //orange 
            fill(255, 88, 51, fade);
          } else if (value === 4) { //yellow  
            fill(255, 196, 0, fade);
          } else if (value === 5) { // red   
            fill(199, 0, 56, fade);
          } else if (value === 6) { //white  
            fill(255, fade);
          } else if (value === 7) { //dark blue 
            fill(24, 66, 88, fade);
          } else {                  //transparent = 0 
            fill(0, 0);
        }
        
        noStroke();
        rect(j * 12, i * 12, 15, 15);
      }
    }
  pop();
}
function mapNeon (arr,lx,ly,rot,sc, fade) { // Neon colored pumpkin kid 
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if (value === 1) {          //green - cyan 
            fill(0, 242, 255, fade);
          } else if (value === 2) { //dark orange - purple 
            fill(193, 77, 255, fade);
          } else if (value === 3) { //orange - pink 
            fill(255, 0, 170, fade);
          } else if (value === 4) { //yellow  - yellow 
            fill(255, 251, 0, fade);
          } else if (value === 5) { // red   - green  
            fill(0, 255, 47, fade);
          } else if (value === 6) { //white  
            fill(255, fade);
          } else if (value === 7) { //dark blue - orange 
            fill(255, 132, 0, fade);
          } else {                  //transparent = 0 
            fill(0, 0);
        }
        
        noStroke();
        rect(j * 12, i * 12, 15, 15);
      }
    }
  pop();
}

//Diff. Shapes - for any character 
// mod mono one that prof made in class 
function modMapPastel(arr,lx,ly,rot,sc, fade) {
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let m = 0;
    let m2 = 0;
    for (var i = 0; i < arr.length; i++) {
      m = i % 2;
      for (var j = 0; j < arr[0].length; j++) {
        m2 = j % 2;  
        noStroke();
        let value = arr[i][j];
        if (value === 1) {          //green 
            fill(180, 249, 165, fade);
            triangle(i * 15, j * 20, i * 20, j *  30, i * 25, j *  20);
          } else if (value === 2) { //dark orange 
            fill(156, 111, 95, fade);
            triangle(j * 20, i * 10, j * 15, i * 20, j * 25, i * 20);
          } else if (value === 3) { //orange 
            fill(245, 173, 148, fade);
            triangle(i * 15, j * 20, i * 20, j *  30, i * 25, j *  20);
          } else if (value === 4) { //yellow  
            fill(255, 241, 166, fade);
            triangle(j * 20, i * 10, j * 15, i * 20, j * 25, i * 20);
          } else if (value === 5) { // red   
            fill(245, 148, 150, fade);
            triangle(i * 15, j * 20, i * 20, j *  30, i * 25, j *  20);
          } else if (value === 6) { //white  
            fill(255, fade);
            triangle(j * 20, i * 10, j * 15, i * 20, j * 25, i * 20);
          } else if (value === 7) { //dark blue 
            fill(158, 231, 245, fade);
            triangle(i * 15, j * 20, i * 20, j *  30, i * 25, j *  20);
          } else {                  //transparent = 0 
            fill(0, 0);
        }
       
        // triangle(i * 15, i * 20, i * 20, i *  30, i * 25, i *  20);
        // triangle(j * 20, j * 10, j * 15, j * 20, j * 25, j * 20);
      }
    }
 pop();

}
function modMapSunset(arr,lx,ly,rot,sc, fade) {
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let m = 0;
    let m2 = 0;
    for (var i = 0; i < arr.length; i++) {
      m = i % 2;
      for (var j = 0; j < arr[0].length; j++) {
        m2 = j % 2;  
        noStroke();
        let value = arr[i][j];
        if (value === 1) {          //green 
            fill(144, 12, 63, fade);
            triangle(j * 15, i * 20, j * 20, i *  30, j * 25, i *  20);
          } else if (value === 2) { //dark orange 
            fill(88, 24, 69, fade);
            triangle(i * 20, j * 10, i * 15, j * 20, j * 25, i * 20);
          } else if (value === 3) { //orange 
            fill(255, 88, 51, fade);
            triangle(j * 15, i * 20, j * 20, i *  30, i * 25, j *  20);
          } else if (value === 4) { //yellow  
            fill(255, 196, 0, fade);
            triangle(i * 20, j * 10, i * 15, j * 20, j * 25, i * 20);
          } else if (value === 5) { // red   
            fill(199, 0, 56, fade);
            triangle(j * 15, i* 20, j * 20, i *  30, j * 25, i *  20);
          } else if (value === 6) { //white  
            fill(255, fade);
            triangle(i * 20, j * 10, i * 15, j * 20, i * 25, j * 20);
          } else if (value === 7) { //dark blue 
            fill(24, 66, 88, fade);
            triangle(j * 15, i * 20, j * 20, i *  30, j * 25, i *  20);
          } else {                  //transparent = 0 
            fill(0, 0);
        }
       
        // triangle(i * 15, i * 20, i * 20, i *  30, i * 25, i *  20);
        // triangle(j * 20, j * 10, j * 15, j * 20, j * 25, j * 20);
      }
    }
 pop();

}
function cirmapBleb(arr,lx,ly,rot,sc, fade) { // Bleb colored pumpkin kid 
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        noStroke();
        if (value === 1) {          //green - dark blue 
            fill(78, 139, 196, fade);
            ellipse(j * 12, i * 12, 5, 10)
          } else if (value === 2) { //dark orange - dark pink 
            fill(255, 153, 190, fade);
            triangle(i * 20, j * 10, i * 15, j * 20, i * 25, j * 20);
          } else if (value === 3) { //orange - light pink 
            fill(255, 194, 217, fade);
            rect(i* 10, i* 12, 10, 5); 
          } else if (value === 4) { //yellow  - yellow 
            fill(250, 224, 132, fade);
            ellipse(i * 10, j * 12, 10, 5); 
          } else if (value === 5) { // red   - light blue 
            fill(194, 225, 252, fade);
            triangle(j * 20, i * 10, j * 15, i * 20, j * 25, i * 20);
          } else if (value === 6) { //white  
            fill(255, fade);
            rect(j * 12, i * 10, 5, 10); 
          } else if (value === 7) { //dark blue - medium blue 
            fill(150, 203, 252, fade);
            ellipse(j * 15, i * 5, 5, 15); 
          } else {                  //transparent = 0 
            fill(0, 0);
        }

      }
    }
  pop();

}
function modMapNoen(arr,lx,ly,rot,sc, fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  let m = 0;
  let m2 = 0;
  for (var i = 0; i < arr.length; i++) {
      m = i % 2;
      for (var j = 0; j < arr[0].length; j++) {
          m2 = j % 2; 
          let value = arr[i][j];
          noStroke(0); 
       if ( value == 1) { //green - cyan  
          push();
          translate((j * 10) + 4 , (i * 10) + 0);
          fill(0, 242, 255, fade);
          triangle(20, 10, 15, 20, 25, 20);
          pop();
        } else if ( value == 2) { //dark orange - purple 
            push();
            translate((j * 10) + 4 , (i * 10) + 0);
            fill(193, 77, 255, fade);
            triangle(15,20,20, 30, 25, 20);
            pop();
        } else if ( value == 3) { //orange -  pink 
            push();
            translate((j * 10) + 4 , (i * 10) + 0);
            fill(255, 0, 170, fade);
            rect(10, 12, 10, 5);
            pop();
        } else if ( value == 4) {  //yellow  -  yellow 
            push();
            translate((j * 10) + 4 , (i * 10) + 0);
            fill(255, 251, 0, fade);
            ellipse(10, 12, 10, 5); 
            pop();
        } else if ( value == 5) {  // red   -  green 
            push();
            translate((j * 10) + 4 , (i * 10) + 0);
            fill(0, 255, 47, fade);
            rect(10, 10, 5, 15);
            triangle(5, 20, 15, 25, 15, 10);
            pop();
        } else if ( value == 6) {  // white 
            push();
            translate((j * 10) + 4 , (i * 10) + 0);
            fill(255, fade);
            ellipse(12,10, 5, 10); 
            pop();
        } else if ( value == 7) {  // dark blue - orange 
            push();
            translate((j * 10) + 4 , (i * 10) + 0);
            fill(255, 132, 0, fade);
            triangle(5, 20, 15, 25, 15, 10);
            pop();
        } else {
          push(); 
          translate((j * 10) -4 , (i * 10) + -11);
          fill(0,0)
          triangle(15,20,20, 30, 25, 20); 
          pop();
       }
      

      
         
      }
  }
 pop();

}


//Images - 2darray,images in array ,x,y,rot,scale, alpha
function mapSponge(arr,imgarr,lx,ly,rot,sc) { //spooky spongebob images that make Pumpkid 
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if ( value == 1 ) { //haunted shop  
          nuimg = imgarr[2];
          } else if ( value == 2 ){ //brain sponge 
            nuimg = imgarr[0];
          } else if ( value == 3 ) { //haunted ghost 
            nuimg = imgarr[1];
          } else if ( value == 4 ) { //pat sponge 
            nuimg = imgarr[4];
          } else if ( value == 5 ) { //treat sponge 
            nuimg = imgarr[5];
          } else if ( value == 0 ) { //transparent 
            nuimg = imgarr[6];
          }  else { //human sponge
            nuimg = imgarr[3];
        }
        image(nuimg, j * 12, i * 12, 14, 14);
      }
    }
  pop();

}
function mapCandy(arr,imgarr,lx,ly,rot,sc) { //spooky spongebob images that make Pumpkid 
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if ( value == 1 ) { //green bear   
          nuimg = imgarr[7];
          } else if ( value == 2 ){ //licorice  
            nuimg = imgarr[8];
          } else if ( value == 3 ) { //candy corn pile  
            nuimg = imgarr[9];
          } else if ( value == 4 ) { //yellow lollipop 
            nuimg = imgarr[10];
          } else if ( value == 5 ) { //jolly rancher red 
            nuimg = imgarr[11];
          } else if ( value == 6 ) { //marshmallow 
            nuimg = imgarr[12];
          } else if ( value == 0 ) { //transparent 
            nuimg = imgarr[6];
          }  else { //blue sour 
            nuimg = imgarr[13];
        }
        image(nuimg, j * 12, i * 12, 14, 14);
      }
    }
  pop();

}

//Text 
function mapToColorText(arr,lx,ly,rot,sc,fade) {
  textSize(15);
  textFont(oldP); 
  textAlign(CENTER);
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if ( value == "PUMPKIN" ) { //orange 
          fill(252, 115, 3, fade);
        } else if ( value == "BLOOD" ){ //red 
          fill(252, 3, 3, fade);
        } else if ( value == "SLIME" ){ //green  
          fill(0, 255, 55, fade);
        } else if ( value == "SPOOKY" ){ //yellow 
          fill(252, 206, 3, fade);
        } else if ( value == "DEATH" ){ //blue  
          fill(0,58,217, fade);
        } else if ( value == "CURSES" ){ //purple 
          fill(86, 0, 184, fade);
        } else { //transparent  
          fill(255, 0);
        }
        text(value, j * 35, i * 10,100);
      }
    }
  pop();
}
function mapTextSpaced(arr,lx,ly,rot,sc,fade) { //mainly for the hourglass 
  textSize(15);
  textFont(oldP); 
  textAlign(CENTER);
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if ( value == "PUMPKIN" ) { //orange 
          fill(252, 115, 3, fade);
        } else if ( value == "BLOOD" ){ //red 
          fill(252, 3, 3, fade);
        } else if ( value == "SLIME" ){ //green  
          fill(0, 255, 55, fade);
        } else if ( value == "SPOOKY" ){ //yellow 
          fill(252, 206, 3, fade);
        } else if ( value == "DEATH" ){ //blue  
          fill(0,58,217, fade);
        } else if ( value == "CURSES" ){ //purple 
          fill(86, 0, 184, fade);
        } else { //transparent  
          fill(255, 0);
        }
        text(value, j * 20, i * 25,100);
      }
    }
  pop();

}
function mapNumToText(arr,lx,ly,rot,sc,fade) { //dosen't work 
  textSize(15);
  textFont(oldP); 
  textAlign(CENTER);
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if ( value == 1 ) { //orange 
          let t = "CANDY";
          fill(252, 115, 3, fade);
        } else if ( value == 2 ){ //red 
          let t = "BLOOD"; 
          fill(252, 3, 3, fade);
        } else if ( value == 3 ){ //green  
          let t = "SLIME"; 
          fill(0, 255, 55, fade);
        } else if ( value == 4 ){ //yellow 
          let t = "SPOOKY"; 
          fill(252, 206, 3, fade);
        } else if ( value == 5 ){ //blue  
          let t = "DEATH"; 
          fill(0,58,217, fade);
        } else if ( value == 6 ){ //purple 
          let t = "CURSES";
          fill(86, 0, 184, fade);
        } else { //transparent  
          fill(255, 0);
        }
        text(t, j * 10, i * 10,50);
      }
    }
  pop();
}

//Guzel - Color Palettes 
function frankieColor(arr,lx,ly,rot,sc, fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  noStroke();
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == 0 ) { //black background
                fill(0,0,0, 0); //invis
            } else if ( value == 1 ){ //skin
                fill(150, 200,150, fade);
            } else if ( value == 2 ) {
                fill(50,100,150, fade); //blue
            } else if ( value == 3) { //white
               fill(255,255,255, fade); 
            } else if (value == 4) {
              fill(70,100,100, fade); //dark teal
            } else if (value == 5) { //dark red
              fill(150,50,50,fade);
            } else if (value == 6) { //for 6, grey
              fill(80, fade);
            } else {
              fill(70,200,70, fade);
            }
          rect(j * 20, i * 20, 21, 21);
      }
  }
  pop();

}
function dracColor(arr,lx,ly,rot,sc, fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  noStroke();
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == 0 ) { //black background
                fill(0,0,0, 0); //invis
            } else if ( value == 1 ){ //skin
                fill(250, 170,170, fade);
            } else if ( value == 2 ) {
                fill(255,120,120, fade); //light pink
            } else if ( value == 3) { //white
               fill(255,255,255, fade); 
            } else if (value == 4) {
              fill(255,70,100, fade); //dark pink
            } else if (value == 5) { //dull purple
              fill(100,80,100,fade);
            } else if (value == 6) { //for 6, grey
              fill(80, fade);
            } else {
              fill(50,100,100, fade);
            }
          rect(j * 20, i * 20, 21, 21);
      }
  }
  pop();

} 


//Beckett - Color Palettes 
function litchColor(arr,lx,ly,rot,sc, fade) { // Regular colored pumpkin kid 
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if (value === 1) {          //blue-ish green gray (skin)
            fill(200,216,212, fade);
          } else if (value === 2) { //dark green (hollow eyes) 
            fill(27,37,29, fade);
          } else if (value === 3) { //brown gray (horns and crown)
            fill(99,107,89, fade);
          } else if (value === 4) { //bright green (eyes and flames)
            fill(3,217,45, fade);
          } else if (value === 5) { // gray pink (mouth)
            fill(161,113,108, fade);
          } else if (value === 6) { //swamp green (hood)
            fill(64,90,69, fade);
          } else if (value === 7) { //light gray green (tunic)
            fill(138,171,145, fade);
          } else {                  //transparent = 0 
            fill(0, 0);
        }

        noStroke();
        rect(j * 12, i * 12, 15, 15);
      }
    }
  pop();

} 

function MDColor(arr,lx,ly,rot,sc, fade) { // Regular colored pumpkin kid 
  push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        if (value === 1) {
            fill(200,216,212, fade);
          } else if (value === 2) { 
            fill(27,37,29, fade);
          } else if (value === 3) { 
            fill(68,119,153, fade);
          } else if (value === 4) { 
            fill(3,217,45, fade);
          } else if (value === 5) { 
            fill(255,0,10, fade);
          } else if (value === 6) { 
            fill(171,241,188, fade);
          } else if (value === 7) { 
            fill(20,30,20, fade);
          } else if (value== 8){
              fill(76,80,169)
          } else if (value===9){
              fill(255,110,108)
          } else if (value===10){
              fill(0,255,200)
          } else if (value===11){
              fill(243,189,53)
          } else if (value===12){
              fill(51,0,153)
          } else {                  //transparent = 0 
            fill(0,0);
        }

        noStroke();
        rect(j * 12, i * 12, 15, 15);
      }
    }
  pop();

}


//Key Functions  
 

function keyPressed() { 
//console.log(key);
// or 
  if ( key == '1' ) { 
    console.log("Page 1");
    currentPage = 1;
  } else if ( key == '2' ) { 
    console.log("Page 2");
    currentPage = 2;    
  } else if ( key == '3' ) { 
    console.log("Page 3");
    currentPage = 3;   
  } else if ( key == '4' ) { 
    console.log("Page 4");
    currentPage = 4; 
  } else if ( key == '5' ) { 
    console.log("Page 5");
    currentPage = 5; 
  } else if ( key == '6' ) { 
    console.log("Page 6");
    currentPage = 6; 
  } else if ( key == '7' ) { 
    console.log("Page 7");
    currentPage = 7; 
  } else {
    currentPage = 0;
  }

  // if (key == 's' || key == 'S') { //save a image 
  //   saveFrames('image-0', 'png', 1, 1); 
  // } 
} 


