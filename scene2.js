function scene2(){
  playImg2.remove();
  playImg1.remove();
  background(255);
  background(bg2);
  drawSprite(ambulance);
  drawSprite(doctor);
  ambulance.velocity.x = +speed;
  if(ambulance.position.x >= windowWidth/4){
    count++;
    ambulance.velocity.x = 0;
    nabi.visible = true;
    if(count>30){
      drawSprite(nabi);
      ambulance.remove();
      soundAmbu.stop();
      if(!ifTalk){
        nabi.changeAnimation("move");
        nabi.velocity.y = -speed;
        if(nabi.position.y<height*5.5){
          nabi.velocity.y = 0;
          nabi.velocity.x = +speed;
          if(nabi.position.x>doctor.position.x-400){
            nabi.velocity.x = 0;
            ifTalk = true;
          }
        }
      }else{
        talkToDoctor();
      }
    }
  }

}
function talkToDoctor(){
  textSize(20);
  if(pos<speech.length){
    fill(255);
    rect(speech[pos].x-width/2,speech[pos].y-height/3,width*7,height/3*2);
    fill(0);
    text(speech[pos].text,speech[pos].x,speech[pos].y);
  }
  if(pos==0){
    nabi.changeAnimation("stop");
  }else{
    nabi.changeAnimation("surprise");
  }
  if(pos == speech.length){
    if(nabi.position.x > width*2){
      nabi.changeAnimation("move");
      nabi.velocity.x = -speed;
    }else{
      nabi.changeAnimation("stop");
      nabi.velocity.x = 0;
      pause ++;
      if(pause>50){
        fill(255);
        rect(0,height*2,width*16,height*3);
        fill(0);
        noStroke();
        text("You will play a find-hidden game next. \nBefore turning to the next stage, input your name (default value is Jack),\nand click the submit.",width*3,height*3);
        drawSprite(nabi);
        drawSprite(doctor);
        input.show();
        submit.show();
      }
    }
  }
}
