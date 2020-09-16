const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;
var Score = 0
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
  noStroke();
   textSize(35);
   fill("white");
   text("score:"+Score,width-300,50);
  Engine.update(engine);
  ground.display();
  b1.display();
  b2.display();
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
  
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score(); 
}
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
function  keyPressed(){
  if (keyCode == 32){
      slingShot.attach(hexagon.body);
    
  }
}
async function getbackgroundImg(){
  var respons = await fetch("http://worldtimeapi.org/api/timezone/europe/london") ;
  var responsjson = await respons.json()
  var dt = responsjson.datetime;
  
  var r  = dt.slice(11,13);
  
  if (r>= 06&&r<=19){
      bg = "sprites/bg.png";
  }else {
      bg = "sprites/bg2.jpg";
  }
  backgroundImg = loadImage(bg)
  }
      
  