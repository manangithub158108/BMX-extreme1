// creating the constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// creating the variables.
var bikeRider, ramp;
var rampImg, rocketImg

function preload(){
	bikeRiderImg = loadImage("Images/bicycle.png");
	rampImg = loadImages("Images/ramp.png");
	//rocketImg = loadImage();

}

function setup() {
	createCanvas(1700, 600);
    engine = Engine.create();
	world = engine.world;

	
   // creating the elements of the game 
	ground = createSprite(width/2,550,width,20);
	ground.shapeColor = "brown";

	bikeRider = createSprite(100,100,10,10);
	bikeRider.addImage(bikeRiderImg);
	bikeRider.scale = 0.8;
	bikeRider.setCollider("circle",0,0,55);
	bikeRider.velocityY = 9;

	gameState = 0;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bikeRider.collide(ground);
  drawSprites();

  if(keyDown("a")){
	gameState = 2;
  }

  if(keyDown("space")){
	gameState = 1;
  }

  if(gameState === 1){

	// creatng the rules.

	fill("yellow");
	textSize(50);
	textFont("Georgia"); 
	text("The rules of the game are -: ",605,100); 

	fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text(" - To make the rider jump use the up arrow key ",625,150); 

	fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text("- The obstacles of the game are - ",630,200); 

    fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text("1. The ramp",630,250); 

	fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text("2. The Ball launcher",630,300); 

	fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text("3. The crusher",630,350); 

	fill("yellow");
	textSize(25);
	textFont("Georgia"); 
	text(" Press the letter a on the keyboard to start the adventure. ",550,450); 

  }

  if(gameState === 0){

  // writing the neccessary text functions

	fill("yellow");
	textSize(50);
	textFont("Georgia"); 
	text("BMX extreme",725,100); 

	fill("yellow");
	textSize(30);
	textFont("Georgia"); 
	text("Welcome BMX extreme !!",700,200); 

	fill("yellow");
	textSize(20);
	textFont("Georgia"); 
	text("Press space to start the journey",730,300); 
  }
 
}



