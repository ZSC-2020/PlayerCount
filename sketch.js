var database,bgImg;
var form,game,player;
var gameState=0;
var playerCount=0
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    game=new Game();
    game.getState();
    game.start();


    
}

function draw(){
   
}
