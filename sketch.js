const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup(){
createCanvas(800,700);

ground1=new Ground(350,500,200,10);

}


function draw(){
background(255,255,255);
ground1.display();

drawSprites();
}