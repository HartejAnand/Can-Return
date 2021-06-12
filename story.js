class Story{
    constructor(){
        background(255,255,255);

        storyBack=createSprite(windowWidth/14.5,windowHeight*13.5/15);
        storyBack.addImage(back);
        storyBack.scale=windowWidth/10000;
        storyBack.setCollider("rectangle",0,0,windowWidth/1.8,windowHeight/1);

        character1=createSprite(windowWidth/3,windowHeight/2);
        character1.addImage(hatI);
        character1.scale=windowWidth/2500;

        character2=createSprite(windowWidth*2/3,windowHeight/2);
        character2.addImage(hat2);
        character2.scale=windowWidth/3500;
    }

    display(){
        storyBack.visible=true;
        character1.visible=true;
        character2.visible=true;

        fill(255,0,0);

        textSize(windowWidth/10);
        text("CHARACTERS",windowWidth/8,windowHeight/5);

        if(character===1){
            character1.debug=true;
            character2.debug=false;
        }

        if(character===2){
            character1.debug=false;
            character2.debug=true;
        }

        if(mouse.isTouching(character1) && mouseIsPressed){
            character=1;
        }
        if(mouse.isTouching(character2) && mouseIsPressed){
            character=2;
        }

        if(mouse.isTouching(storyBack) && mouseIsPressed){
            screen="home";
        }
    }

    hide(){
        storyBack.visible=false;
        character1.visible=false;
        character2.visible=false;
    }
}