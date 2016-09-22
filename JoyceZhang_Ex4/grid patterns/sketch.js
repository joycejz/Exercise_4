var choice=0;

function setup() {    //use function instead of void
  createCanvas(500, 500);
  //give the user a menu
  println("Click on the popup and press which number you would like to see:");
  println("1: Chevron (click to add a color to the pattern)");
  println("2: Hearts");
  println("3: Sparkles (move your mouse around to change the colors)");
  println("4: Bowties (press 'space' or click to give the bowties patterns)");
  println("5: Poles");
  println("6: Emojis (click to change make the emojis smile [smiles make the world go 'round!])");
  println("Enjoy! c:");
}

function draw() {

  //CHEVRON
  if (choice==1) {
    frameRate(60);
    var purple = true;    //all data types changed to var
    strokeWeight(1);
    background(240,245,255);    //light blue background
    for (var y=0; y<height+50; y+=50) {    //space out the pattern vertically
      for (var x=0; x<width; x+=5) {    //space out the lines horizontally
        //makes every other stroke green when mouse is pressed
        if(mouseIsPressed===true) {     //use mouseIsPressed instead of mousePressed, use triple =
          purple = !purple;
        }
        //the lines will switch direction and thickness every 5 lines
        line(x, y, x, y+25);    //draw a vertical line
        if (x%50 < 25) {
          strokeWeight(2);
          if (purple) {
            stroke(90,30,130);    //dark purple
          } else {
            stroke(15,85,100);    //dark blue-green
          }
          y-=5;
        } else {
          strokeWeight(1); 
          if (purple) {
            stroke(250,125,190);    //pink
          } else {
            stroke(20,230,85);    //green
          }
          y+=5;
        }
      }
    }
  }

  //HEARTS
  if (choice==2) {
    background(235,250,255);    //light blue background
    frameRate(3);    //the shades of pink will change slowly
    var x=0;
    for (var y=30; y<height-30; y+=20) {
      //staggers the pattern so the hearts fit like puzzle pieces
      if (y%40==10) {
        x=50;
      } else {
        x=95;
      }
      while (x<width-10) {
        //draw the top third (peaks) of each heart
        strokeWeight(1);    //thinnest lines
        stroke(255,random(171,256),random(205,256));    //random light pink
        for (var i=0; i<4; i++) {
          line((x-30)+i*(30/8), y-i*5, x-i*(30/8), y-i*5);    //left peak
          line(x+i*(30/8), y-i*5, (x+30)-i*(30/8), y-i*5);    //right peak
        }
        //draw the middle third of each heart
        for (var k=1; k<5; k++) {
          strokeWeight(2);    //medium lines
          stroke(255,random(86,170),random(154,205));    //random medium pink
          line((x-30)+k*(30/8), y+k*5, (x+30)-k*(30/8), y+k*5);
        }
        //draw the bottom third of each heart
        for (var j=1; j<4; j++) {
          strokeWeight(4);    //thickest lines
          stroke(255,random(1,86),random(102,154));    //random dark pink
          line((x-15)+j*(30/8), (y+20)+j*5, (x+15)-j*(30/8), (y+20)+j*5);
        }
        x+=90;
      }
    }
  }

  //SPARKLES
  if (choice==3) {
    frameRate(60);
    noStroke();
    background(255);    //white background
    for (var y=0; y<=height; y+=25) {
      var x=0;
      //staggers the pattern so the ellipses overlap and their colors alternate
      if (y%50==25) {
        x=0;
        fill(mouseX/4+125, 0, 100,150);    //red gets brighter from left to right
      } else {
        x=12.5;
        fill(100, 0, mouseY/4+125,150);    //blue gets brighter from top to bottom
      }
      while (x<=width) {
        ellipse(x, y, 25, 50);    //draw ellipses
        x+=25;
      }
    }
  }

  //BOWTIES
  if (choice==4) {
    frameRate(60);
    strokeWeight(1);
    rectMode(CENTER);
    background(240,255,235);    //light green background
    for (var x=50; x<width-25; x+=50) {
      if (x<=250) {
        for (var y=x; y<=(height-x); y+=25) {
          fill(255,185,100);    //orange
          strokeWeight(1);
          stroke(175,70,0);    //dark orange
          triangle(x, y, x-20, y-10, x-20, y+10);    //left half 
          triangle(x, y, x+20, y-10, x+20, y+10);    //right half
          rect(x, y, 10, 10, 3);    //thing in middle of bowtie
          //user can give the bowties patterns
          if (mouseIsPressed) {    //gives dots when mouse is clicked
            noStroke();
            fill(20,145,0);    //green
            //middle dots
            ellipse(x-10,y,3,3);
            ellipse(x+10,y,3,3);
            //top dots
            ellipse(x-15,y-5,3,3);
            ellipse(x+15,y-5,3,3);
            //bottom dots
            ellipse(x-15,y+5,3,3);
            ellipse(x+15,y+5,3,3);
          } else if (keyIsPressed) {    //gives stripes when spacebar is pressed
            if (key==' ') {
              strokeWeight(2);
              stroke(20,145,0);    //green
              //top stripes
              line(x-19,y-5,x-11,y-5);
              line(x+19,y-5,x+11,y-5);
              //middle stripes
              line(x-19,y,x-6,y);
              line(x+19,y,x+6,y);
              //bottom stripes
              line(x-19,y+5,x-11,y+5);
              line(x+19,y+5,x+11,y+5);
            }
          }
        }
      } else {
        for (var y=x; y>=(height-x); y-=25) {
          fill(255,185,100);
          strokeWeight(1);
          stroke(175,70,0);
          triangle(x, y, x-20, y-10, x-20, y+10);    //left half
          triangle(x, y, x+20, y-10, x+20, y+10);    //right half
          rect(x, y, 10, 10, 3);    //thing in middle of bowtie
          //user can give the bowties patterns
          if (mouseIsPressed) {    //gives dots when mouse is clicked
            noStroke();
            fill(20,145,0);    //green
            //middle dots
            ellipse(x-10,y,3,3);
            ellipse(x+10,y,3,3);
            //top dots
            ellipse(x-15,y-5,3,3);
            ellipse(x+15,y-5,3,3);
            //bottom dots
            ellipse(x-15,y+5,3,3);
            ellipse(x+15,y+5,3,3);
          } else if (keyIsPressed) {    //gives stripes when spacebar is pressed
            if (key==' ') {
              strokeWeight(2);
              stroke(20,145,0);    //green
              //top stripes
              line(x-19,y-5,x-11,y-5);
              line(x+19,y-5,x+11,y-5);
              //middle stripes
              line(x-19,y,x-6,y);
              line(x+19,y,x+6,y);
              //bottom stripes
              line(x-19,y+5,x-11,y+5);
              line(x+19,y+5,x+11,y+5);
            }
          }
        }
      }
    }
  }

  //POLES
  if (choice==5) {
    frameRate(60);
    strokeWeight(2);
    background(255);    //white background
    var r=0.0;
    var g=100.0;
    var b=10.0;
    for(var y=0; y<=height; y+=50) {    //makes a new pole every ~100 px
      if(y%100==50) {    //top half of pole
        for(var i=5; i<=50; i*=1.2) {    //gives depth (makes lines further apart in middle of pole)
          stroke(r+3.5*i,g+3.5*i,b+3.5*i);    //dark green when lines are closer together
          line(0,i+y,500,i+y);                //light green when lines are farther apart
        }
      } else {    //bottom half of pole
        for(var i=50; i>=3; i/=1.2) {    //gives depth (makes lines further apart in middle of pole)
          stroke(r+3.5*i,g+3.5*i,b+3.5*i);    //dark green when lines are closer together
          line(0,(50-i)+y,500,(50-i)+y);      //light green when lines are farther apart
        }
      }
    }
  }

  //EMOJIS
  if (choice==6) {
    frameRate(60);
    strokeWeight(1);
    stroke(0);
    background(255);
    var face = 1;
    for (var x=25; x<width; x+=50) {
      for (var y=25; y<height; y+=50) {
        //types of faces will alternate row by row
        if(face==1) {
          if (mouseIsPressed) {    //super sad faces will turn varo super happy faces if mouse is clicked
            fill(255,255,0);    //yellow
            ellipse(x, y, 45, 45);    //face
            fill(50);    //grey
            ellipse(x-10,y-5,5,5);    //left eye
            ellipse(x+10,y-5,5,5);    //right eye
            fill(255);    //white
            arc(x,y,30,30,radians(20),radians(160),CHORD);    //:D (super happy smile)
          } else {
            fill(0,120,255);    //blue
            ellipse(x, y, 45, 45);    //face
            fill(50);    //grey
            ellipse(x-10,y-5,5,5);    //left eye
            ellipse(x+10,y-5,5,5);    //right eye
            fill(255);    //white
            arc(x,y+18,30,30,radians(200),radians(340),CHORD);    //D: (super sad frown)
          }
          face=2;
        } else if(face==2) {    //sad faces will turn varo happy faces if mouse is clicked
          if (mouseIsPressed) {
            fill(255,185,0);    //orange
            ellipse(x, y, 45, 45);    //face
            fill(50);    //grey
            ellipse(x-10,y-5,5,5);    //left eye
            ellipse(x+10,y-5,5,5);    //right eye
            noFill();
            arc(x,y,30,30,radians(20),radians(160));    //:) (smile)
          } else {
            fill(0,200,255);    //light blue
            ellipse(x, y, 45, 45);    //face
            fill(50);    //grey
            ellipse(x-10,y-5,5,5);    //left eye
            ellipse(x+10,y-5,5,5);    //right eye
            noFill();
            arc(x,y+18,30,30,radians(200),radians(340));    //): (frown)
          }
          face=1;
        }
      }
    }
  }
}

//switches between the options
function keyPressed() {
  if (key == '1') {
    background(255);
    choice=1;
  } else if (key == '2') {
    background(255);
    choice=2;
  } else if (key == '3') {
    background(255);
    choice=3;
  } else if (key == '4') {
    background(255);
    choice=4;
  } else if (key == '5') {
    background(255);
    choice=5;
  } else if (key == '6') {
    background(255);
    choice=6;
  }
}