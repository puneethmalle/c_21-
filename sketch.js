
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, left, right, backboard;
var ball_options, ball;


	


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(450,600,900,20);
	right = new Ground(850,500,20,200);
	left = new Ground(600,500,20,200);
  backboard = new Ground(900,500,20,600);

  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200,500,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);


function draw() {
	createCanvas(900,600);
 
  background(0);
  ground.show();
  right.show();
  left.show();
  backboard.show();
  if(keyDown("UP_ARROW")){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:0.08});
  }

  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
 Engine.update(engine);
}



