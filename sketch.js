var ship,shiprunning;
var sea,seaImg ;

function preload(){
  shiprunning = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = addImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  ship=createSprite(10,135,15,15);
  ship.addAnimation("correr",shiprunning);
  shiprunning.scale = 0.1;
  sea=createSprite()
  sea.addImage("sea",seaImg);
}

function draw() {
  background("white");
  drawSprites();
// if(sea.x <0);{
  //sea.x=sea.width/2;
 //}
}