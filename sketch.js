const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;
var engine, world;


function setup() {
  var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
 //64 33 93
  //createSprite(400, 200, 50, 50);
  backgroundImg = loadImage("bg.jpg");
    b1 = new Box(450,390,50,40)
    b2 = new Box(500,390,50,40);
    b3 = new Box(550,390,50,40);
    b4 = new Box(600,390,50,40);
    b5 = new Box(650,390,50,40);
    b6 = new Box(700,390,50,40);
    b7 = new Box(750,390,50,40);
    b8 = new Box(500,350,50,40);
    b9 = new Box(550,350,50,40);
    b10 = new Box(600,350,50,40);
    b11 = new Box(650,350,50,40);
    b12 = new Box(700,310,50,40);
    b13 = new Box(550,310,50,40);
    b14 = new Box(600,310,50,40);
    b15 = new Box(650,310,50,40);
    b16 = new Box(600,270,50,40);
    stroke("white");
    hexagon = new Haxagon(250,200);
    slingShot = new SlingShot(hexagon.body,{x:200,y:200})
    ground = new Ground(600,400,500,20);
}

function draw() {
  background( backgroundImg);
  Engine.update(engine);
 
  b1.display();
  b2.display();
  ground.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display(); 
  slingShot.display();
  hexagon.display();
 
}
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}