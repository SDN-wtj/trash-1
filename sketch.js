
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  side1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	World = engine.world;
	
	//Create the Bodies Here.
	

	Engine.run(engine);
	side= new Trash(400,200,10,200)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  side1.display();

  drawSprites();
 
}



