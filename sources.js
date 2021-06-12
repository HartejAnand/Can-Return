class Sources{
    constructor(){
        credit=createSprite(windowWidth/2,windowHeight/2);
        credit.addImage(cookie);
        credit.scale=windowWidth/1250;

        sourceBack=createSprite(windowWidth*3/4,windowHeight/10);
        sourceBack.addImage(close);
        sourceBack.scale=windowWidth/15000;
        sourceBack.setCollider("circle",0,0,windowWidth/5);
    }

    display(){
        credit.visible=true;
        sourceBack.visible=true;

        fill(0,0,0);
        textSize(windowWidth/30);
        text("Chocolate Chip Cookies",windowWidth/3.25,windowHeight/5);

        textSize(windowWidth/50);
        text("Logo: Hartej Anand\nGame Design: Priyal Anand\nGraphics: Nick Small\nGame: Hartej Anand\nSound:",windowWidth/3.5,windowHeight/3.5);

        if(mouse.isTouching(sourceBack) && mouseIsPressed){
            screen="home";
        }

    }

    hide(){
        credit.visible=false;
        sourceBack.visible=false;
    }
}