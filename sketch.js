const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground; 
var base;
var block1;
var polygon;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
	world=engine.world;
  

  base=new Ground(420,450,400,10);
  ground=new Ground(400,595,800,5);
 

  block1=new Box(400,400);
  block2=new Box(430,400);
  block3=new Box(460,400);
  block4=new Box(490,400);
  block5=new Box(520,400);
  block6=new Box(550,400);
  block7=new Box(580,400);
  
  block9=new Box(415,359);
  block10=new Box(445,359);
  block11=new Box(475,359);
  block12=new Box(505,359);
  block13=new Box(535,359);
  block14=new Box(565,359);

  block15=new Box(430,319);
  block16=new Box(460,319);
  block17=new Box(490,319);
  block18=new Box(520,319);
  block19=new Box(550,319);

  block20=new Box(445,280);
  block21=new Box(475,280);
  block22=new Box(505,280);
  block23=new Box(535,280);

  block24=new Box(460,240);
  block25=new Box(490,240);
  block26=new Box(520,240);

  block27=new Box(475,200);
  block28=new Box(505,200);
  
  block8=new Box(490,160);

  polygon=new Polygon();
  Slingshot=new Slingshot(polygon.body,{x:200,y:150})  
  
     
  Engine.run(engine)
}
function draw() {

  background("teal"); 
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(CENTER);

  fill("green")
  ground.display();
  fill("orange")
  base.display();
  
  
  fill ("red")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("black")
  block8.display();
  fill("yellow")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  fill("brown")
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  fill("blue")
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("violet")
  block24.display();
  block25.display();
  block26.display();
  fill("orange")
  block27.display();
  block28.display();
  
   
    
  Slingshot.display();
  polygon.display();






  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
  Slingshot.fly ();

}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:100,y:100})
      Slingshot.attach(polygon.body);


  }



}