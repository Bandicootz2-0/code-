var splashScreenimg;
var bg_img;
var playBtn, abtBtn;
var player_img, player;
var enemy,enemyGroup;
var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7;
var benefit1, benefit2, benefit3
var benefit, benefitGroup;
var gameState = "wait";


function preload() {
    splashScreenimg = loadImage("assets/mainScreen.gif");
    player_img = loadImage("assets/player.gif");
    bg_img = loadImage("assets/bg1.png");
    enemy1 = loadImage("assets/explodingzombie.gif")
    enemy2 = loadImage("assets/zombie.gif")
    enemy3 = loadImage("assets/regZom.gif")
    enemy4 = loadImage("assets/speedyZom.gif")
    enemy5 = loadImage("assets/happygreen.gif")
    enemy6 = loadImage("assets/redminizombie.gif")
    enemy7 = loadImage("assets/blackenemy.gif")
    benefit1 = loadImage("assets/key.png")
    benefit2 = loadImage("assets/laser.png")
    benefit3 = loadImage("assets/potion.png")
  }

function setup(){
    createCanvas(700,700);

    playBtn= createImg("assets/startbutton.png");
    playBtn.position(250,300);
    playBtn.size(80,80);
    playBtn.hide();
    
    abtBtn= createImg("assets/helpbutton.png");
    abtBtn.position(350,300);
    abtBtn.size(80,80);
    abtBtn.hide();

    player = createSprite(50,490)
    player.addImage(player_img)
    player.scale = 0.45
    player.visible = false

   // invisible_ground = createSprite(350,565,700,30);
   // invisible_ground.visible = false;
}

function draw(){
    if(gameState == "wait"){
        background(splashScreenimg);
        playBtn.show();
        abtBtn.show();
    }
    playBtn.mousePressed( () => {
        playBtn.hide();
        abtBtn.hide();
        gameState = "level1";
    })

    
    abtBtn.mousePressed( ()=> {
        playBtn.hide();
        abtBtn.hide();
        gameState = "about";
    })
    if(gameState == "level1"){
        background(bg_img);
        player.visible = true;
        movement();
        spawnEnemies();
    }

   

    if(gameState == "about"){
        AbtFunc();
    }
    drawSprites()
}

function AbtFunc(){
    swal({
        title: "About this game",
        text: "Zombies appear from all sides, aim your player to kill the zombies",
        textAlign: "CENTER",
        imageUrl: "assets/mainScreen.gif",
        imageSize: "200x200",
        confirmButtonText: "Back to game",
        confirmButtonColor:"Red"
    },
    function () {
        gameState = "wait"
    })
}

function movement(){
  if(player.x >= 650){
    player.x = 650;
  }
  if(player.x <= 10){
    player.x = 10;
  }
  if(player.y <=10){
    player.y = 10
  }

  if(player.y >= 480){
    player.y = 480;
  }
  if(keyDown("space")){
    player.velocityY = -10;
  }
  player.velocityY = player.velocityY + 0.8;
  if(keyDown("left_arrow")){
    player.x -= 3;
  }
  if(keyDown("right_arrow")){
    player.x += 3;
  }
  
}

function spawnBenefits(){
  
  if(frameCount%60 == 0){
    var random = Math.round((Math.random()*4)+1);
    console.log("random value" + random);
    enemy = createSprite(720, 490);
    
    switch(random){
      case 1: 
        enemy.addImage(enemy5)
        enemy.scale = 0.4;
        enemy.velocityX = -2;
        break;
      case 2:
        enemy.addImage(enemy6)
        enemy.scale = 0.4;
        enemy.velocityX = -2;
        break;
      case 3:
        enemy.addImage(enemy7)
        enemy.scale = 0.3;
        enemy.velocityX = -2;
        break;
      case 4:
        enemy.addImage(enemy4)
        enemy.scale = 0.3;
        enemy.velocityX = -5;
        break;
      default:
        break;

    }
    enemyGroup.add(enemy);
  }
}

function spawnEnemies(){
  
  if(frameCount%90 == 0){
    var random = Math.round((Math.random()*4)+1);
    console.log("random value" + random);
    enemy = createSprite(720, 490);
    
    switch(random){
      case 1: 
        enemy.addImage(benefit2)
        enemy.scale = 0.4;
        enemy.velocityX = -2;
        break;
      case 2:
        enemy.addImage(benefit3)
        enemy.scale = 0.4;
        enemy.velocityX = -2;
        break;  
      default:
        break;

    }
    enemyGroup.add(enemy);
  }
}