var wall,thickness;
var bullet,speed,weight;



function setup(){
createCanvas(800,400);
speed=random(55,90);
weight=random(400,1500);
thickness=random(22,83);
bullet=createSprite(50,200,30,10); 
bullet.shapeColor="white"; 
bullet.velocityX = speed;
wall=createSprite(750,200,thickness,height/2);
wall.shapeColor="white"; 
thickness=random(22,83);
}

function draw() {
background("black");  
   if(hasColided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
    if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
drawSprites();

 }
function hasColided(lbullet, lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true
}
 else{ 
      return false;
 }
 
}




