
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(400,690,4)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 function keypressed(){
	 if(keycode === UP_ARROW)

	 Matter.body.applyForce(paperObject.body,paperObject.body.position,(x:85,y:-85))
 }
}



