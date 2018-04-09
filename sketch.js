var playImg;
var playImg1;
var playImg2;
var dice6;
var ifStart;
var count = 0;
var ifScene2 = false;
var speed = 9;
var speech = [];
var ifTalk = false;
var pos = 0;
var pause = 0;
var ifScene3 = false;
var scene3Start = false;
var diceTime = 0;
var itemCount = 0;
var itemWhich = "";
var pace = 5;
var final = false;
var s3Pause = false;
var ifTeach = false;
var page = 1;
var contentP2 = [];
var contentP3 = [];
var items = [false,false,false,false];
var positions = [];
var showHint = false;
var dShow = false;
var ifMove = false;
var ifAmbu = false;


function preload(){
  bgHos = loadImage('./assets/img/s1_hos_background_2.png');
  bg3_2 = loadImage('./assets/img/s3_bg_2.png');
  bg3 = loadImage('./assets/img/s3_bg.png');
  bg2 = loadImage('./assets/img/s2bg.png');
  bg1 = loadImage('./assets/img/s1_background.png');
  nabi1 = loadImage('assets/img/nabi1.png',function(img){img.resize(windowWidth/16*2,windowHeight/13*4)});
  nabi2 = loadImage('assets/img/nabi2.png',function(img){img.resize(windowWidth/16*2,windowHeight/13*4)});
  nabi3 = loadImage('assets/img/nabi3.png',function(img){img.resize(windowWidth/16*2,windowHeight/13*4)});
  nabi4 = loadImage('assets/img/nabi4.png',function(img){img.resize(windowWidth/16*2,windowHeight/13*4)});
  nabi0 = loadImage('assets/img/nabi_normal.png',function(img){img.resize(windowWidth/16*2,windowHeight/13*4)});
  ambulanceImg = loadImage('assets/img/ambulance.png',function(img){img.resize(windowWidth/4,windowHeight/13*4)});
  ambulance2 = loadImage('assets/img/ambulance2.png',function(img){img.resize(windowWidth/4,windowHeight/13*4)});
  dice1 = loadImage('./assets/img/dice1.png');
  dice2 = loadImage('./assets/img/dice2.png');
  dice3 = loadImage('./assets/img/dice3.png');
  dice4 = loadImage('./assets/img/dice4.png');
  dice5 = loadImage('./assets/img/dice5.png');
  dice6 = loadImage('./assets/img/dice.png');
  watchImg = loadImage('./assets/img/watch.png',function(img){img.resize(windowWidth/8,windowWidth/8)});
  watchshine1 = loadImage('./assets/img/watchshine1.png',function(img){img.resize(windowWidth/8,windowWidth/8)});
  watchshine2 = loadImage('./assets/img/watchshine2.png',function(img){img.resize(windowWidth/8,windowWidth/8)});
  whyme = loadImage('./assets/img/whyme.png',function(img){img.resize(600,200)});
  doctorImg = loadImage('./assets/img/doctor.png',function(img){img.resize(windowWidth/16*1.7,windowHeight/13*3.5)});
  item1Img = loadImage('./assets/img/item1.png',function(img){img.resize(windowWidth/96*5,windowHeight/54*5)});
  padBg = loadImage('./assets/img/pad_bg.png',function(img){
    if(windowWidth>1800){
      img.resize(windowWidth/16*6,windowHeight/9*7);
    }else{
      img.resize(700,windowHeight/9*7);
    }
  });
  page1 = loadImage('./assets/img/page1.png',function(img){
    if(windowWidth>1800){
      img.resize(windowWidth/16*6,windowHeight/9*7);
    }else{
      img.resize(700,windowHeight/9*7);
    }
  });
  lArrow1 = loadImage('./assets/img/leftArrow1.png');
  lArrow2 = loadImage('./assets/img/leftArrow2.png');
  rArrow1 = loadImage('./assets/img/rightArrow1.png');
  rArrow2 = loadImage('./assets/img/rightArrow2.png');
  myFont = loadFont('assets/lgsb.ttf');
  instr1 = loadImage('./assets/img/instr1.png',function(img){
    if(windowWidth>=1900)
      img.resize(windowWidth/2,windowHeight/9*5);
    else {
      img.resize(900,windowHeight/9*5);
    }
  }
  );
  //instr2 = loadImage('./assets/img/instr2.png',function(img){img.resize(windowWidth/2,windowHeight/9*5)});
  instr = loadAnimation(instr1, instr1);
  itemDialog = loadImage('./assets/img/itemDialog.png',function(img){img.resize(400,80)});
  hintImg = loadImage('./assets/img/hint.png',function(img){img.resize(windowWidth/16,windowHeight/9)});
  hint0= loadImage('./assets/img/hint0.png',function(img){img.resize(windowWidth/16,windowHeight/9)});

  hintShine = loadAnimation(hintImg, hint0);
  soundMove = loadSound('assets/move.mp3');
  soundAmbu = loadSound('assets/ambulance.mp3');

}
function setup() {
    createCanvas(windowWidth,windowHeight);
    console.log("w:" + windowWidth + "h:" + windowHeight);
    textFont(myFont);
    width = windowWidth/16;
    height = windowHeight/9;
    nX = windowWidth/2-200;
    nY = height*2;
    dX = windowWidth/3*2-50;
    dY = height*2;
    speech = [{text:"Hey, doctor!How are you?  (Click)",x:nX,y:nY},{text:"Why I always come to the hospital?  (Click)",x:nX,y:nY},
              {text:"Last month I got a fever..  (Click)",x:nX,y:nY},{text:"Last week I got a cough..  (Click)",x:nX,y:nY},
              {text:"Yesterday I was chocked with an apple..  (Click)",x:nX,y:nY},{text:"However, I just played a game today!  (Click)",x:nX,y:nY},
              {text:"NABI, Do you know personalized health?  (Click)",x:dX,y:dY},{text:"What that means?  (Click)",x:nX,y:nY},{text:"You should hold your health now!  (Click)",x:dX,y:dY},{text:"Follow me.  (Click)",x:dX,y:dY}];

    contentP2 = ["Future Personalized Medicine","Personalized medicine, also termed precision medicine.",
                "Individuals can learn about their health status","and prevent disease through pocket-size technologies,",
                "for example, wearable devices or eye contact.","Moreover, interventions and/or products being tailored",
                "to the individual patient based on their predicted response","or risk of disease.","","Which means, with a watch or an eye contact,",
                "You can detect diseases in very early stages. ","next page  >>>>"];
    contentP3 = ["Personalized medicine including five main parts.","Materials & Devices","BioMarkers & Functionalization",
                 "Medical Testing","Big Data & Signal Processing","Public health","Researchers are developing in these five parts.",
                 "We can definitely look forward a new future,","with the personalized medicine.","","Thanks for your watching.","Click back to gallery go back to the main page."];
    positions = [{x:width*2,y:height*6.2},{x:width*5.6,y:height*3.6},{x:width*7.5,y:height*5.2},{x:width*9.5,y:height*4.6}];
    nabi = createSprite(windowWidth-100,windowHeight-150);
    ambulance = createSprite(0,windowHeight-80);
    dice = createSprite(width*5,height*6);
    why = createSprite(windowWidth/2-150,windowHeight-250);
    doctor = createSprite(windowWidth-width*3,height*5.3);
    tutorial = createSprite(width*4,height,width*6,height*6);
    instruction = createSprite(windowWidth/3+10,windowHeight/2);
    watch = createSprite(windowWidth/16*10,windowHeight/2);
    pad = createSprite(width*7.5,height*5);
    lArrow = createSprite(width*9,height*8);
    rArrow = createSprite(width*9.8,height*8);


    tutorial.draw = function(){
      stroke(0);
      noFill();
      rect(width*4,height,width*6,height*6);
    }
    instruction.draw = function(){
      if(!scene3Start||s3Pause){
        // stroke(0);
        // fill(255);
        // rect(width*5,height*3,width*6,height*4);
        instr.frameDelay = 15;
        animation(instr, width*8,height*5);
        textSize(15);
        fill(0);
        noStroke();
        textStart = height*3.8;
        textW = width*6;
        text("Hello,"+ name, textW,textStart);
        text("In this find-hidden game, ",textW,textStart+30);
        text("You need to collect 4 items to get your device.",textW,textStart+50);
        text("With that dive, you will know about the future medicine.",textW,textStart+70);
        text("In this room, you will find some your own medical materials.",textW,textStart+90);
        text("Use space to inspect the room and try to get all the items.",textW,textStart+110);
        text("Click to continue.", textW,textStart+130);
        stroke(0);
        text("CONTROL OPTIONS:",textW,textStart+170);
        text("W: MOVE UP   A: MOVE LEFT   S: MOVE DOWN   D:MOVE RIGHT",textW,textStart+200);
        text("ESC:  CALL MENU             SHIFT: SKIP THE GAME",textW,textStart+230);
        text("SPACE: INSPECT              TAB:  HINT",textW,textStart+260);
      }else if(itemCount!=0&&itemCount<60){
        image(itemDialog,windowWidth/2,windowHeight/2);
        textSize(20);
        text("Get " + itemWhich, windowWidth/2+60,windowHeight/2+50);
      }
    }
    why.addAnimation("why",whyme);
    dice.addAnimation("dice6",dice6);
    dice.addAnimation("start",dice6,dice5,dice4,dice3,dice2,dice1);
    dice.addAnimation("dice4",dice4);
    doctor.addAnimation("doctor",doctorImg);


    nabiAni = nabi.addAnimation("move",nabi1,nabi2);
    nabi.addAnimation("stop",nabi0);
    nabi.addAnimation("surprise",nabi3);
    nabi.addAnimation("wow",nabi4);
    nabiAni.frameDelay = 15;
    ambulance.addAnimation("ambulance",ambulanceImg,ambulance2);


    watch.addAnimation("normal",watchImg);
    watchAni = watch.addAnimation("shine",watchshine1,watchshine2);
    watchAni.frameDelay = 15;

    pad.addAnimation("bg",padBg);
    pad.addAnimation("page1",page1);
    lArrow.addAnimation("1",lArrow2);
    lArrow.addAnimation("2",lArrow1);
    rArrow.addAnimation("1",rArrow1);
    rArrow.addAnimation("2",rArrow2);


    input = createInput();
    input.position(windowWidth/2,windowHeight/2);
    input.hide();

    submit = createButton("submit");
    submit.position(windowWidth/2+150,windowHeight/2);
    submit.hide();
    submit.mousePressed(function(){
      ifScene3 = true;
      pause = 0;
    });


    scene1(width,height);
}


function draw() {
    // your "draw loop" code goes here
    if(ifScene3){
      scene3();
    }else if(ifScene2){
      scene2();
    }else if(ifStart){
      background(bg1);
      playImg1.hide();
      drawSprite(dice);
      drawSprite(nabi);
      if(diceTime<50){
        dice.changeAnimation("start");
        diceTime++;
      }else {
        diceTime++;
        dice.changeAnimation("dice4");
        nabi.velocity.x = -speed;
        if(!soundMove.isPlaying()){
            soundMove.play();
        }
      }
      if(diceTime>120){
        background(bgHos);
        drawSprite(nabi);
        drawSprite(dice);
      }
      if(nabi.position.x < width*7){
        nabi.velocity.x = 0;
        nabi.changeAnimation("surprise");

        drawSprite(nabi);
        drawSprite(ambulance);
        ambulance.velocity.x = +speed;
        if(!soundAmbu.isPlaying()){
          soundMove.stop();
          soundAmbu.play();
        }

        if(ambulance.position.x > nabi.position.x){
          ambulance.velocity.x = 0;
          nabi.visible = false;
          drawSprite(why);
          count++;
          if(count>30){
            ambulance.velocity.x = +speed;
            why.velocity.x = +speed;
          }
          if(ambulance.position.x>windowWidth){
            ifScene2 = true;
            ambulance.position.x = 0;
            nabi.position.x = windowWidth/4;
            nabi.position.y = height*7;
            count = 0;
          }
        }
      }
    }
}

function mousePressed(){
  console.log("w: " + mouseX/width + ", height:" + mouseY/height);
  if(ifTalk&&pos<speech.length){
    pos++;
  }
  if(s3Pause){
    s3Pause = false;
  }
  if(ifScene3&&!scene3Start&&pause>30){
    scene3Start = true;
    nabi.position.x = width;
    nabi.position.y = windowHeight-height;
  }
  if(final&&pause>5){
    ifTeach = true;
  }
  if(ifTeach){
    if(mouseX>=width*9.45&&mouseX<=width*10.15&&mouseY>=height*7.8&&mouseY<=height*8.35&&page<3){
      itemCount = 0;
      page++;
      dShow = false;
    }
    if(mouseX>=width*8.67&&mouseX<=width*9.33&&mouseY>=height*7.8&&mouseY<=height*8.35&&page>1){
      itemCount = 0;
      page--;
      dShow = false;
    }
    if(page==1 && mouseX>=width*5.4 && mouseX<=9.3*width && mouseY>=5*height && mouseY<=7.2*height){
        dShow = true;
    }

  }
}
