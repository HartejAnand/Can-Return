class Home{
    constructor(){
        homeBack=createSprite(windowWidth/2,windowHeight/2);
        homeBack.addImage(homeBackI);
        homeBack.scale=windowWidth/1750;

        gameName=createSprite(windowWidth/2,windowHeight*1.2/4);
        gameName.addImage(gameTitle);
        gameName.scale=windowWidth/2500;

        howB=createSprite(windowWidth/3,windowHeight*4.5/5);
        howB.addImage(howI);
        howB.scale=windowWidth/5000;
        howB.setCollider("rectangle",0,0,windowWidth/4,windowHeight/5);
        
        playB=createSprite(windowWidth*1/2,windowHeight*3.4/5);
        playB.addImage(playI);
        playB.scale=windowWidth/5000;
        playB.setCollider("rectangle",0,0,windowWidth/4,windowHeight/5);
        
        storyB=createSprite(windowWidth*2/3,windowHeight*4.5/5);
        storyB.addImage(storyI);
        storyB.scale=windowWidth/7000;
        storyB.setCollider("rectangle",0,0,windowWidth/1.25,windowHeight/4);

        credits=createSprite(windowWidth*24/25,windowHeight*23.5/25);
        credits.addImage(cookie);
        credits.scale=windowWidth/15000;
        credits.setCollider("circle",0,0,windowWidth/5);

    }

    display(){
        howB.visible=true;
        playB.visible=true;
        storyB.visible=true;
        credits.visible=true;
        homeBack.visible=true;
        gameName.visible=true;
        
        //how button interactions
        if(mouse.isTouching(howB)){
            howB.scale=random(windowWidth/4700,windowWidth/5300);
        }else{
            howB.rotation=0;
        }
        if(mouse.isTouching(howB) && mouseIsPressed){
            screen="how";
        }

        //play button interactions
        if(mouse.isTouching(playB)){
            playB.rotation=random(-15,15);
        }else{
            playB.rotation=0;
        }
        if(mouse.isTouching(playB) && mouseIsPressed){
            screen="game";
        }

        //story button interactions
        if(mouse.isTouching(storyB)){
            storyB.x=random(windowWidth*1.99/3,windowWidth*2.01/3);
        }else{
            storyB.x=windowWidth*2/3;
        }
        if(mouse.isTouching(storyB) && mouseIsPressed){
            screen="story";
        }

        //credits button interactions
        if(mouse.isTouching(credits)){
            Spin+=15;
            credits.rotation=Spin;
        }
        if(mouse.isTouching(credits) && mouseIsPressed){
            screen="credits";
        }

    }

    hide(){
        howB.visible=false;
        playB.visible=false;
        storyB.visible=false;
        credits.visible=false;
        homeBack.visible=false;
        gameName.visible=false;
    }
}