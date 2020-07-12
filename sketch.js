var rect1, rect2, rect3;


function setup() {
  createCanvas(800,400);
  
  rect1 = createSprite(200, 100, 50, 50);
  rect1.debug = true;
  rect1.shapeColor = "green";
  //rect1.velocityY = 3;

  rect2 = createSprite(200,300,50,50);
  rect2.debug = true;
  rect2.shapeColor = "green";
  //rect2.velocityY = -3;

  rect3 = createSprite(200,150,50,50);
  rect3.debug = true;
  rect3.shapeColor = "green";
  //rect3.velocityY = 3;
}

function draw() {
  background(255,255,255);  


//bounceOff(rect3, rect2);

rect2.x = mouseX;
rect2.y = mouseY;

if (isTouching(rect1, rect2)){

  rect1.shapeColor = "red";
  rect2.shapeColor = "blue";
}
else {
  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
}

  drawSprites();
}




