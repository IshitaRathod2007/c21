var fixedRect,movingRect,box1,box2,box3,box4;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600, 200, 50, 50);
  movingRect.shapeColor="green";

  box1=createSprite(40, 30, 50, 50);
  box1.shapeColor="pink";
  box2=createSprite(504, 120, 50, 50);
  box2.shapeColor="pink";
  box3=createSprite(340, 340, 50, 50);
  box3.shapeColor="pink";
  box4=createSprite(50, 250, 50, 50);
  box4.shapeColor="pink";

}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;

  if (isTouching(movingRect,box1))
  {
    movingRect.shapeColor="red";
    box1.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor="green";
    box1.shapeColor="green";
  }
  drawSprites();
}

function isTouching(object1,object2)
{
  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2 && 
    object1.y-object2.y<object1.width/2+object2.width/2 &&
    object2.y-object1.y<object1.width/2+object2.width/2)
    {
      return true;
    }
    else
    {
      return false;
    }
  }