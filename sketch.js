

function setup() {
    Xsize = 1170;
    Ysize = 2532;
    createCanvas(Xsize,Ysize);
}

function draw() { 
    noLoop();
    for(let x = 0; x < Xsize; x=x+1){
        for(let y = 0; y < Ysize; y=y+1){
            r=random(7,110);
            noStroke();
            fill(r, r, r+10);
            rect(x,y,1,1);
        }
    }
    save("NoiseyGreyBlue");
}



