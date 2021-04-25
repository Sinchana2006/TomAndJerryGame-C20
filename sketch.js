var cat, catImg, catImg4, cat_running, mouse, mouseImg, mouseImg4, mouse_teasing;
var garden, gardenImg;

function preload() {
    //loaded the images here
    catImg = loadImage("images/cat1.png");
    cat_running = loadAnimation("images/cat2.png","images/cat3.png");
    catImg4 = loadImage("images/cat4.png");
    
    mouseImg = loadImage("images/mouse1.png");
    mouse_teasing = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");
   
    gardenImg = loadImage("images/garden.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   
    garden = createSprite(500,350);
    garden.addImage(gardenImg);
    garden.scale = 1;

    cat = createSprite(850,580);
    cat.addImage(catImg);
    cat.scale = 0.17;

    mouse = createSprite(230,580);
    mouse.addImage(mouseImg);
    mouse.scale = 0.123;
  

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
     mouse.addAnimation("mouseInspecting", mouseImg4);
     mouse.changeAnimation("mouseInspecting");

     cat.addAnimation("catSitting", catImg4);
     cat.changeAnimation("catSitting");

     cat.velocityX = 0;
     cat.x = 320;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning", cat_running);
      cat.changeAnimation("catRunning");
      

      mouse.addAnimation("mouseTeasing", mouse_teasing);
      mouse.changeAnimation("mouseTeasing");
  }


}
