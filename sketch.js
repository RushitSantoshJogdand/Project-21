var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1400,400);
  

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)

  bullet=createSprite(50,200,50,50);
  bullet.shapeColor=color(80, 80, 80);

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80, 80, 80);

  bullet.velocityX=speed;

 
}

function draw() {
background(255)


if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  
  if(damage>10)
  {
    wall.shapeColor=color(255, 0, 0);

  }



  if(damage<10)
  {
    wall.shapeColor=color(0, 255, 0);
  }
}


  drawSprites();



}