function teach(){
  watch.position.x = width*3.5;
  watch.position.y = height*4.5;
  // nabi.position.x = width*14;
  // nabi.position.y = height*4.5;
  doctor.position.x = width*14;
  doctor.position.y = height*4.5;
  watch.scale = 1.5;
  drawSprite(watch);
  // drawSprite(nabi);
  drawSprite(doctor);
  drawSprite(pad);
  drawSprite(lArrow);
  drawSprite(rArrow);
  pad.changeAnimation("bg");
  watch.changeAnimation("normal");
  if(page == 1){
    pad.changeAnimation("page1");
    fill(1,64,166);
    strokeWeight(2);
    stroke(1,64,166);
    textSize(30);
    text(name, width*8,height*2.5);
    lArrow.changeAnimation("1");
    rArrow.changeAnimation("1");
    if(dShow){
      stroke(0);
      fill(255);
      rect(doctor.position.x-width*1.5,doctor.position.y-height*3,380,height*1.5);
      noStroke();
      fill(0);
      textSize(12);
      text("This watch will show your health information. ",doctor.position.x-width*1.3,doctor.position.y-height*3+30);
      text("You can get your medical advice anywhere ",doctor.position.x-width*1.3,doctor.position.y-height*3+50);
      text("and anytime you want. ",doctor.position.x-width*1.3,doctor.position.y-height*3+70);
      text("It will check your health conditions, ",doctor.position.x-width*1.3,doctor.position.y-height*3+90);
      text("and provide you with a much healthy life.",doctor.position.x-width*1.3,doctor.position.y-height*3+110);
    }
  }
  if(page == 2){
    //pad.changeAnimation("bg");
    lArrow.changeAnimation("2");
    rArrow.changeAnimation("2");
    itemCount++;
    var j;
    for(var i=0;i<itemCount/50;i++){
      for(j=0;j<=i&&j<contentP2.length;j++){
        textSize(16);
        text(contentP2[j],width*5,height*(3.2+j*0.3));
      }
    }
    if(j == contentP2.length){
      rArrow.changeAnimation("1");
    }
  }
  if(page == 3){
    //pad.changeAnimation("bg");
    rArrow.changeAnimation("2");
    lArrow.changeAnimation("2");
    itemCount++;
    for(var i=0;i<itemCount/50;i++){
      for(var j=0;j<=i&&j<contentP3.length;j++){
        textSize(16);
        text(contentP3[j],width*5,height*(3.2+j*0.3));
      }
    }
  }
}
function scene3(){
  if(items[1]){
    background(bg3_2);
  }else{
    background(bg3);
  }
  if(!items[0]){
    image(item1Img,width*1.5,height*5.4);
  }
  if(showHint){
    for(var i=0;i<items.length;i++){
      if(!items[i]){
        // image(hintImg,positions[i].x,positions[i].y);
        hintShine.frameDelay = 20;
        animation(hintShine,positions[i].x,positions[i].y);
      }
    }
  }
  input.hide();
  submit.hide();
  name = input.value()?input.value():"Jack";
  if(ifTeach){
    teach();
  }else if(!scene3Start){
    instruction.draw();
    instruction.visible = true;
    pause ++;
  }else{
    drawSprite(nabi);
    if(!s3Pause){
      if(keyIsDown(65)){
        if(nabiMoveLeft()){
          nabi.changeAnimation("wow");
          nabi.position.x -= pace;
        }
      }
      if(keyIsDown(68)){
        if(nabiMoveRight()){
          nabi.changeAnimation("move");
          nabi.position.x += pace;
        }
      }
      if(keyIsDown(87)){
        if(nabiMoveUp()){
          nabi.changeAnimation("move");
          nabi.position.y -= pace;
        }
      }
      if(keyIsDown(83)){
        if(nabiMoveDown()){
          nabi.changeAnimation("move");
          nabi.position.y += pace;
        }
      }
    }
    //add itemCount here
    if(items[0]&&items[1]&&items[2]&&items[3]&&itemCount>30){
      final = true;
      pause++;
      // fill(255);
      // rect(width*5,height*3,width*8,height*2);
      image(itemDialog,width*5,height*2.7,width*8,height*3);
      fill(0);
      textSize(15);
      strokeWeight(1);
      stroke(0);
      text("Congrats! You win a new watch!",width*6.5,height*3.5);
      text("Click the watch to continue.",width*6.5,height*3.75);
      drawSprite(watch);
      watch.changeAnimation("shine");
      nabi.position.x = width*4;
      nabi.position.y = height*6;
      nabi.changeAnimation("wow");
    }else{
      pause = 0;
      textSize(18);
      stroke(0);
      text("ESC: MENU   SHIFT: SKIP",width,height/2);
      instruction.draw();
      nabi.changeAnimation("stop");.2
      if(itemCount!=0&&itemCount<100){
        itemCount++;
        instruction.draw();
      }
    }
  }
}

function nabiMoveLeft(){
  if(nabi.position.x-10>width&&nabi.position.x-10<windowWidth-width){
    // if(nabi.position.y<height*6.5&&nabi.position.y>height*4.7&&nabi.position.x<width*3){
    //   return false;
    // }
    return true;
  }else{
    return false;
  }
}
function nabiMoveRight(){
  if(nabi.position.x+10>width&&nabi.position.x+10<windowWidth-width){
    return true;
  }else{
    return false;
  }
}
function nabiMoveDown(){
  if(nabi.position.y+pace>height*4.1&&nabi.position.y+pace<(windowHeight-height)){
    return true;
  }else{
    return false;
  }
}
function nabiMoveUp(){
  if(nabi.position.y-pace>height*4.1&&nabi.position.y-pace<(windowHeight-height)){
    return true;
  }else{
    return false;
  }
}
function getItem(){
  if(!items[0]||!items[1]||!items[2]||!items[3]){
    console.log("height:" + height + "width:" + width);
    console.log("nabi x: " + nabi.position.x/width + ", nabi y:" + nabi.position.y/height);
    if(nabi.position.y>(height*5.2)&&nabi.position.y<(height*6.8) && nabi.position.x<(width*3) && nabi.position.x>1.2&&!items[0]){
      items[0] = true;
      itemCount = 1;
      itemWhich = "cardiogram";
    }else if(nabi.position.y>(height*4.1)&&nabi.position.y<(height*4.6) && nabi.position.x>width*4.6 && nabi.position.x<width*6.4 && !items[1]){
      items[1] = true;
      itemCount = 1;
      itemWhich = "report";
    }else if(nabi.position.y>(height*4)&&nabi.position.y<(height*5.4) && nabi.position.x<width*8.3 && nabi.position.x>width*6.2 && !items[2]){
      items[2] = true;
      itemCount = 1;
      itemWhich = "medical history";
    }else if(nabi.position.y>(height*4)&&nabi.position.y<(height*5.4) && nabi.position.x>width*8.5 && nabi.position.x<width*10.6 && !items[3]){
      items[3] = true;
      itemCount = 1;
      itemWhich = "blood pressure value";
    }
  }
}


function keyPressed(){
  //esc call the menu code:27
  //shift skip code 16
  //Tab code 9
  if(scene3Start&&!final){
    //display hint
    if(keyCode == 9){
      showHint = true;
    }
    if(keyCode == 16){
      final = true;
      items[0] = items[1] = items[2] = items[3] = true;
      itemCount = 31;
    }
    if(!s3Pause){
      switch (keyCode) {
        case 32:
          getItem();
          break;
        case 27:
          s3Pause = true;
          break;
      }
    }
    else{
      if(keyCode == 27){
        s3Pause = false;
      }
    }
  }
}
