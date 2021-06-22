var ship,ship_moving;
var ship1,ship_Img;
var sea,sea1;

function preload(){
ship_moving=
loadAnimation("ship-1.png","ship-2.png")
ship_Img=loadAnimation("ship-3.png","ship-4.png")
sea1=loadImage("sea.png");
}



function setup(){
  createCanvas(600,600);

sea=createSprite(64,64,60,15);
sea.addImage("moving",sea1);
sea.scale=0.7;  
sea.velocityX=-2;  
  
  
ship = createSprite(165,342,10,10);
ship.addAnimation("moving",ship_moving);
ship.scale=0.3;

  if (sea.x<0){
  sea.x=sea.width/2;  
  }
  
  
  background("blue");  
  



}

function draw() {
 drawSprites();
if (keyDown("space")) {
ship.visible=false; 
  ship1 = createSprite(165,342,10,10);
ship1.addAnimation("shiplightOn",ship_Img);
ship1.scale=0.3;
 
}

}

