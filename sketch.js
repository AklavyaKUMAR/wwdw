
var dustbin1 , ground , paper ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


 
function setup() {
	createCanvas(1200, 600);

	paper = new paper(300,400);
	ground = new ground(700 , height ,1200 , 20 );
	dustbin1 = new dustbin(700,320,70,70);
    dustbin2 = new dustbin(920,320,70,70);
    dustbin3 = new dustbin(700, 240 ,70 ,70);

  
}


function draw() {
  background(0);
  Engine.update(engine);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
 
}



