const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree1,ground,stone,sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var boy;

function preload(){
	boy=loadImage("boy.png");
  }


function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	tree1=new Tree(600,450,400,400);
	ground=new Ground(400,650,800,20);
	//boy=new Boy(100,100);
	stone=new Stone(155,545,50);

	mango1=new Mango(1100,100,30);
    mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,25);
	mango8=new Mango(1140,150,25);
	mango9=new Mango(1100,230,25);
	mango10=new Mango(1200,200,25);
	mango11=new Mango(1120,50,25);
	mango12=new Mango(900,160,25);
	   
	sling=new Sling(stone.body,{x:155,y:545});
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  image(boy ,200,340,200,300);

  //boy.display();
  tree1.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  sling.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position
	var distance=dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y);
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.isStatic(Lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		sling.attach(stone.body);
	}
}