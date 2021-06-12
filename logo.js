class Logo{
    constructor(){

        
        background(0,0,0);

        //creating title and cookie sprites
        title=createSprite(windowWidth/2,windowHeight/2);
        title.addImage(Name);
        title.scale=windowWidth/1500;
      
        Bcookie=createSprite(-windowWidth/2,windowHeight*3/4);
        Bcookie.addImage(cookie);
        Bcookie.scale=windowWidth/3000;
      
        other1=createSprite(-windowWidth*1.25,windowHeight*3/4);
        other1.addImage(cookie);
        other1.scale=windowWidth/3500;
      
        other2=createSprite(-windowWidth*1.5,windowHeight*3/4);
        other2.addImage(cookie);
        other2.scale=windowWidth/3500;

    }


    display() {

        title.visible=true;
        Bcookie.visible=true;
        other1.visible=true;
        other2.visible=true;


        //big cookie
        Bcookie.rotation=0+spin;
        
        //making big cookie slow down
        if(Bcookie.x>windowWidth*1.5/4 && Bcookie.x<windowWidth*2.5/4){
            Bcookie.velocityX=windowWidth/250;
          spin+=5;
        }else{
            Bcookie.velocityX=windowWidth/100;
          spin+=20;
        }
      
        //other cookies
        other1.velocityX=windowWidth/100;
        other1.rotation=50+roll;
        other2.velocityX=windowWidth/100;
        other2.rotation=180+roll;
      
        roll+=20;
      
        
        if(other2.x>windowWidth){
            screen="home";
        }

    }
    
    hide(){
        title.visible=false;
        Bcookie.visible=false;
        other1.visible=false;
        other2.visible=false;
    }
}