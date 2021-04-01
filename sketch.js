var jerry , jerry_running , jerryCollide;
var garden , gardenImg;
var tom , tom_running , tomCollide;

function preload() {
    //load the images here
    jerry_running = 
    loadAnimation("images/jerryOne.png")  

    tom_running =
    loadAnimation("images/tomTwo.png","images/tomThree.png")

    jerryCollide =
    loadImage("images/jerryTwo.png","images/jerryThree.png","images/jerryFour.png")

    tomCollide=
    loadImage("images/tomOne.png","images/tomFour.png")

  gardenImg = loadImage("images/garden.png")
 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry = createSprite(50,600,10,10);
    jerry.addAnimation("jerry", jerry_running);
     jerry.scale = 0.12;
    jerry.addAnimation("jerryCollide",jerryCollide);

    tom = createSprite(800,600,10,10);
    tom.addAnimation("tom",tom_running);
    tom.scale = 0.2;
    tom.addAnimation("tom",tomCollide);
}

function draw() {
background(gardenImg);
keyPressed();



drawSprites();
}



  

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tom_running",tom);
    }  
    

}


