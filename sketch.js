var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);

fixedRect=createSprite(400,200,80,50);
fixedRect.shapeColor="red";

movingRect=createSprite(400,300,50,100);
movingRect.shapeColor="green";

console.log(fixedRect.width/2+movingRect.width/2);
 movingRect.velocityY = -5;
 fixedRect.velocityY = +5; 
}

function draw() {
  background(0);  

 // movingRect.x=mouseX;
  //movingRect.y=mouseY;


  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
      movingRect.velocityX = movingRect.velocityX*(-1)
      fixedRect.velocityX = fixedRect.velocityX*(-1);
  }
  if(fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY*(-1)
      fixedRect.velocityY = fixedRect.velocityY*(-1);
    }
  
  

  drawSprites();
}