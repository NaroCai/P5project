function scene1(w,h){
  background(bg1);
  ifStart = false;
  playImg1 = createImg("./assets/img/playgame.png");
  playImg1.attribute("width",w*4);
  playImg1.attribute("height",h*3);
  playImg1.style("background-color",0);
  playImg1.position(w*3,h*2);
  playImg2 = createImg("./assets/img/playgame1.png");
  playImg2.attribute("width",w*4);
  playImg2.attribute("height",h*3);
  playImg2.position(w*3,h*2);
  playImg2.hide();

  playImg1.mouseOver(gameOver);
  playImg2.mouseOut(gameOut);
  playImg2.mousePressed(startGame);

  drawSprite(dice);
}

function gameOver(){
  playImg2.show();
}
function gameOut(){
  if(!ifStart)
    playImg2.hide();
}

function startGame(){
  ifStart = true;
}
