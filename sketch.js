
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,ground1,dustbin1,dustbin2,dustbin3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paperObject=new paper(100,350,20)
		
		
		
		
     ground1=new ground(400,650,800,10)
	 dustbin1=new dustbin(550,635,190,20)
	
	 dustbin2=new dustbin(445,595,20,100)
	 dustbin3=new dustbin(645,595,20,100)
	 Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  paperObject.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  ground1.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-45})
	}
}



