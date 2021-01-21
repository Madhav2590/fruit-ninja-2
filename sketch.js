var PLAY=1;
var END=0;
var gameState=1;

var sword,fruit1,fruit2,fruit3,fruit4,alien1,alien2;
var swordImage,monsterImage,gameoverImage;
var fruitGroup,enemyGroup;
var gameover;
var score=0;


function preload() {
  
  //load images
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  alienImage1 = loadImage("alien1.png");
  alienImage2 = loadImage("alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png")
  
}


function setup() {
  
  createCanvas(600,600);
  
  sword = createSprite(100,200,20,20);  
  sword.scale=0.72;
  sword.addImage(swordImage);
  fruitGroup = new Group();
  enemyGroup = new Group();
  
}


function draw() {
  background("lightblue");
  
  if(gameState === PLAY){
 
  Enemys();
  fruits();
     
  sword.y=World.mouseY;
  sword.x=World.mouseX;   
     
   if(fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    score=score+2;
   }
     
     else if(enemyGroup.isTouching(sword)) {
      
      gameState = END;
    
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.velocityX=0;
      enemyGroup.velocityX=0;
      sword.addImage(gameoverImage);
      sword.scale=1.5;
      sword.x=300;
      sword.y=300;

    }
    
  }
  
  drawSprites();
  
  text("Score : " + score,500,50);
  
}


function fruits() {
  
  if(World.frameCount%80===0){ 
   fruit=createSprite(600,200,20,20);
   fruit.scale=0.2;
   
    r=Math.round(random(1,4)); 

     if(r == 1) {
      fruit.addImage(fruit1);
     } 
     else if (r == 2){
      fruit.addImage(fruit2)
     } 
     else if (r == 3){
      fruit.addImage(fruit3)
     } 
     else if (r == 4){
      fruit.addImage(fruit4)
     }

     fruit.y=Math.round(random(50,340));
     fruit.velocityX=-9;
     fruit.setlifetime=200;

     fruitGroup.add(fruit);
  }
  
}
  

function Enemys() {
  
   if(World.frameCount%200 === 0) { 
     
     alien1=createSprite(600,200,20,20);
     alien1.addImage("moving", alienImage1);
     alien1.y=Math.round(random(25,275)); 
     alien1.velocityX=-10;
     alien1.setlifetime=50;

     enemyGroup.add(alien1);  

   }
  
   if(World.frameCount%200 === 0) {
     
     alien2=createSprite(800,200,20,20);
     alien2.addImage("moving2", alienImage2);
     alien2.y=Math.round(random(325,575));
     alien2.velocityX=-10;
     alien2.setlifetime=50;

     enemyGroup.add(alien2);
     
   }
   
}