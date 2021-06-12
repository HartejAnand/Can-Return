var screen="logo";

var logo;
var Name, title;
var cookie, Bcookie, other1, other2;
var spin=0;
var roll=0;

var home;
var homeBack, homeBackI;
var gameName, gameTitle;
var back, close;
var howB, playB, storeB, storyB, credits;
var Spin=0;
var playI,storeI,storyI;

var how;
var howBack;

var story;
var storyBack;
var character=1;
var character1, character2;

var sources;
var credit;
var sourceBack;

var game;
var ground;
var lavaI, diamondI;
var lava1,lava2,lava3,lava4,lava5,lava6,lava7,lava8,lava9;
var diamond1,diamond2,diamond3,diamond4,diamond5,diamond6,diamond7,diamond8,diamond9;
var hat, hatI;
var score = 0;
var drop = 0;
var time=2000;
var lives=100;
var pool=0;
var spin=0;
var eruption=false;
var escape=false;
var caught=false;
var minecart, minecartI;
var lavapool, lavapoolI;
var shake=0;

var mouse;


function preload(){
  cookie=loadImage("chocolateChipCookie.png");
  Name=loadImage("name.png");

  playI=loadImage("play.png");
  howI=loadImage("how.png");
  storyI=loadImage("story.png");

  back=loadImage("home.png");
  close=loadImage("cross.png");
  
  lavaI=loadImage("car.png");
  diamondI=loadImage("can.png");
  hatI=loadImage("cart.png");
  hat2=loadImage("basket.png");
  minecartI=loadImage("collecter.png");
  lavapoolI=loadImage("stickman.png");

  homeBackI=loadImage("background.png");
  gameTitle=loadImage("canReturn.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  mouse=createSprite(mouseX,mouseY);
  mouse.scale=windowWidth/10000;
  mouse.visible=false;

  game=new Game;
  logo=new Logo;
  home=new Home;
  how=new How;
  story=new Story;
  sources=new Sources;
}



function draw() {
  mouse.x=mouseX;
  mouse.y=mouseY;
  background(0,0,0);
  drawSprites();


  if(screen==="logo"){
    logo.display();

    game.hide();
    home.hide();
    how.hide();
    story.hide();
    sources.hide();
  }

  if(screen==="how"){
    how.display();

    logo.hide();
    game.hide();
    home.hide();
    story.hide();
    sources.hide();
  }

  if(screen==="story"){
    story.display();

    logo.hide();
    game.hide();
    home.hide();
    how.hide();
    sources.hide();
  }

  if(screen==="credits"){
    sources.display();

    logo.hide();
    game.hide();
    home.hide();
    story.hide();
    how.hide();
  }

  if(screen==="home"){
    home.display();

    logo.hide();
    game.hide();
    how.hide();
    story.hide();
    sources.hide();
  }

  if(screen==="game"){
    game.display();

    logo.hide();
    home.hide();
    how.hide();
    story.hide();
    sources.hide();
  }

}

