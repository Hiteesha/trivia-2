class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      P1 = createSprite(100,200);
      //car1.addImage("car1",car1_img);
      P2 = createSprite(300,200);
      //car2.addImage("car2",car2_img);
      P3 = createSprite(500,200);
      //car3.addImage("car3",car3_img);
      
      P = [P1, P2, P3];
    }
  
    play(){

      form.hide();
      
      Player.getPlayerInfo();
      //player.getCarAtEnd();
      if(allPlayers !== undefined){
        background("white")        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          P[index-1].x = x;
          P[index-1].y = y;
         // console.log(index, player.index)
  
         
          // if (index === player.index){
          //   stroke(10);
          //   fill("red");
          //   ellipse(x,y,60,60);
          //   cars[index - 1].shapeColor = "red";
          //   camera.position.x = displayWidth/2;
          //   camera.position.y = cars[index-1].y;
          // }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      // if(keyIsDown(UP_ARROW) && player.index !== null){
      //   player.distance +=50
      //   player.update();
      // }
  
      // if(player.distance > 3900){
      //   gameState = 2;
      //   player.rank+=1;
      //   Player.updateCarsAtEnd(player.rank);
      //   textSize(20)
      //   text("player rank :"+player.rank,displayWidth/2-50,y-120)
      // }
     
      drawSprites();
    }
  
  //   end(){
  
  //     console.log("Game Ended");
  //     console.log(player.rank);
  //   }
  }
  