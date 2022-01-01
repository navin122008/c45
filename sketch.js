

function preload() {
 
 playerImage=loadImage("scorpion.png");
 opponentImage=loadImage("subzero21.png");
 playerpunch=loadImage("punch.png");
 opponentpunch=loadImage("punch21.png");
 playerkick=loadImage("kick.png");
 opponentkick=loadImage("kick21.png");
 playerdamage=loadImage("damage1.png");
 opponentdamage=loadImage("damage2.png");
 backgroundImage=loadImage("background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 
  opponent=createSprite(700,400);
  opponent.addImage("stand",opponentImage);
  opponent.addImage("punch",opponentpunch);
  opponent.addImage("damage1",opponentdamage);
  
  opponent.scale=2

  player=createSprite(400,400);
  player.addImage("stand",playerImage);
  player.addImage("punch",playerpunch);
  player.addImage("damage",playerdamage);
  player.scale=2;
 

}

function draw() {
  background(backgroundImage);

  if(keyWentDown("m")){
    opponent.changeImage("punch",opponentpunch);
    player.changeImage("damage",playerdamage);
  }

  if(keyWentUp("m")){
    opponent.changeImage("stand",opponentImage);
    player.changeImage("stand",playerImage);
  }

  if(keyDown("RIGHT_ARROW")){
   player.x=player.x+4
  }

  if(keyDown("LEFT_ARROW")){
    player.x=player.x-4
    }

  if(keyDown("a")){
     opponent.x=opponent.x+4
     }
    
   if(keyDown("d")){
       opponent.x=opponent.x-4
      }
    

    if(keyWentDown("n")){
      player.changeImage("punch",playerpunch);
      opponent.changeImage("damage1",opponentdamage);
     
      }

    if(keyWentUp("n")){
        player.changeImage("stand",playerImage);
        opponent.changeImage("stand",opponentImage);
        }

        if(opponent.isTouching(player)){
        //  player.changeImage("damage",playerdamage);
          }

        
  drawSprites();
}
