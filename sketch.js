var hr,mn,sc


function setup() {
createCanvas(800, 800);
angleMode(DEGREES);
}
  

function draw() {
    background(0);
    translate(300, 300);
    rotate(-90);
    hr=hour();
    mn=minute();
    sc=second();
    strokeWeight(10);
    stroke('green');
    noFill();
    let scAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, scAngle);
 

    stroke('red');
    let mnAngle= map(mn,0,60,0,360);
    arc(0, 0, 280, 280, 0, mnAngle);

    stroke('blue');
    let hrAngle= map(hr % 12,0,12,0,360);
    arc(0, 0, 260, 260, 0, hrAngle);

    push();
    rotate(scAngle);
    stroke('green');
    line(0, 0, 120, 0);
    pop();

    push();
    rotate(mnAngle);
    stroke('red');
    line(0, 0, 100, 0);
    pop();

    push();
    rotate(hrAngle);
    stroke('blue');
    line(0, 0, 80, 0);
    pop();

  stroke(300);
  point(0, 0);
 


  
}

