const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2,ground;
var world,engine;
var polyImg,polygon;
var slingShot;

function preload(){
    polyImg = loadImage("polygon.png");
}
function setup(){
    createCanvas(1000,1000)
    background("white")
    engine = Engine.create();
    world = engine.world;
 
    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);
    console.log(stand1)
// level1
    block1 = new Box(300,275,30,40);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);
  // level 2
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    //level 3
    block16 = new Box(390,155,30,40);


    brick1 = new Box(640,175,30,40);
    brick2 = new Box(670,175,30,40);
    brick3 = new Box(700,175,30,40);
    brick4 = new Box(730,175,30,40);
    brick5 = new Box(760,175,30,40);

    brick6 = new Box(670,135,30,40);
    brick7 = new Box(700,135,30,40);
    brick8 = new Box(730,135,30,40);
    
    brick9 = new Box(700,95,30,40);

    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x: 100, y:200})
}
function draw(){
    Engine.run(engine);
   stand1.display();
   stand2.display();
// level 1
   fill("red")
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();

   fill("blue");
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();

   fill("yellow")
   block13.display();
   block14.display();
   block15.display();

   fill("pink")
   block16.display();

   fill("red")
   brick1.display();
   brick2.display();
   brick3.display();
   brick4.display();
   brick5.display();

   fill("blue")
   brick6.display();
   brick7.display();
   brick8.display();

   fill("pink")
   brick9.display();

   fill("orange")
   imageMode(CENTER);
   image(polyImg,polygon.position.x,polygon.position.y,40,40);

   slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}