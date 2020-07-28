
var targetGroup;
var gun;
function preload(){
  targetImg= loadImage("target.png");
  gunImg= loadImage("gun.png")
}

function setup() {
  canvas = createCanvas(800,400);
targetGroup= new Group();
gun = createSprite(200,200,10, 10);
gun.addImage(gunImg);

}
function draw() {
  background("yellow");  
spawnTargets();



gun.x = mouseX;
gun.y = mouseY;

  drawSprites();

}
function spawnTargets(){
if(frameCount % 30 === 0){
  var target = createSprite(400,320, 40,40);
  target.y = random(-10,400);
  target.velocityX= random(-1, +3);
  target.velocityY= random(-1, +3);
  target.addImage(targetImg);
  targetGroup.add(target);
 target.lifetime = 140;
  target.scale= 0.1;
  console.log(target);
}

}
