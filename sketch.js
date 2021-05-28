var superman, asteroid, star, supermanstand_img, supermanfly_img, asteroid_img, star_img;
var sound1;
var ground;
var sky, sky_img;


function preload(){
  supermanstand_img=loadImage("supermanstanding.png");
  supermanfly_img=loadImage("supermanflying.png");
  asteroid_img=loadImage("asteroid.png");
  star_img=loadImage("star.png");
  sound1=loadSound("countdown.mp3");
  sky_img=loadImage("darksky.jpg");
  
}

function setup() {
  createCanvas(1600,1600);

  sky=createSprite(800,400,1600,1600);
  sky.addImage("sky", sky_img);
  sky.scale=20;
  sky.velocityY=-5;

  superman=createSprite(750,1527,50,50);
  superman.addImage("superman", supermanstand_img);
  superman.scale=0.2;

  ground=createSprite(750,1600,1600,50);
  ground.shapeColor="brown";
  
}

function draw() {
 background("black");
 spawnStars();
  if (keyDown("q")){
    sound1.loop();  
  }
  if (keyDown("e")){
    superman.addImage("superman2", supermanfly_img);
    superman.velocityY=-5;
  }
  if (superman.y===400){
    superman.velocityY=0;
  }
  if (sky.y<0){
    sky.y=sky.height/2;
  }
  if (keyWentDown("right")){
    superman.velocityX=7;
  }
  if (keyWentDown("left")){
    superman.velocityX=-7;
  }

  
  
  drawSprites();
}

function spawnStars(){
  if (frameCount % 60 === 0) {
    star = createSprite(600,100,40,10);
   star.x = Math.round(random(400,1200));
   star.addImage("star", star_img);
   star.scale = 0.1;
   star.velocityY = 3;
   
    //assign lifetime to the variable
   star.lifetime = 520;
   
   //adjust the depth
   star.depth = superman.depth;
   superman.depth = superman.depth + 1;
}
}
function spawnAsteroids(){
  
}

