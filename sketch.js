var ball;
var groundObj;
var leftSide;
var RightSide;
var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(950, 800);


	engine = Engine.create();
	world = engine.world;
	
	var ball_options={
		isStatic:false,
		restitution:0.5,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
   ball= Matter.Bodies.circle(30,30,30,[ball_options])
   World.add(world,ball)

	groundObj =  new Ground (width/2,670,width,20);
	leftSide = new Ground (800,600,20,120);
	RightSide = new Ground (550,600,20,120);


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 

  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,60,60)
 
   groundObj.show();
   leftSide.show();
   RightSide.show();
   
 
}

function keyPressed() 
{
 if(keyCode === RIGHT_ARROW)
 {
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:-0.03});
 }
} 
