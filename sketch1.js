var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(300,400,80,30);
  movingRect.shapeColor = "green";
  // movingRect.debug = true;
    movingRect.velocityX=(3)
    fixedRect.velocityX=(-1)
    gameObject1=createSprite(900,300,50,50)
    gameObject1.shapeColor=("yellow")
    gameObject1.velocityY= (2)

    gameObject2=createSprite(900,600,50,50)
    gameObject2.shapeColor=("yellow")
    gameObject2.velocityY= (-7)

}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  bounceOff(fixedRect,movingRect)
  drawSprites();

  bounceOff(gameObject1,gameObject2)
}

