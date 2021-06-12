class How{
    constructor(){
        howBack=createSprite(windowWidth/14.5,windowHeight*13.5/15);
        howBack.addImage(back);
        howBack.scale=windowWidth/10000;
        howBack.setCollider("rectangle",0,0,windowWidth/1.8,windowHeight/1);
    }

    display(){
        howBack.visible=true;

        fill(100,100,255);

        textSize(windowWidth/10);
        text("HOW",windowWidth/3,windowHeight/5);

        textSize(windowWidth/25);
        text("*Arrow keys to move\n*Collect cans\n*Avoid cars\n*Collect as many cans as possible before the  \n    stampeed",windowWidth/12,windowHeight/3);

        if(mouse.isTouching(howBack) && mouseIsPressed){
            screen="home";
        }
    }

    hide(){
        howBack.visible=false;
    }
}