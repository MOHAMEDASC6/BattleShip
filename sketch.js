function setup(){
    createCanvas(1000,1000)
    background(150);
}
let coordinateX = 0
let coordinateY = 0
let valueR = 225
let valueG = 225
let valueB = 255
//*Come back to this later:


//*White RGB:(255,255,255);Blue RGB: (51,51,255); Red RGB: (255,0,0); Black RGB: (0,0,0)
function draw(){
    for(let i = 0; i < 1000; i = i + 100){
    console.log(i)
    for(let j = 0; j < 1000; j = j + 100){
        console.log(j)
    square(coordinateX,coordinateY,100);
    square(coordinateX + i,coordinateY,100);
    square(coordinateX + j,coordinateY + i,100);
}
    }
    //*this was genuinely painful
    // square(coordinateX,coordinateY + 100,100);
    // square(coordinateX + 100,coordinateY + 100,100);
    // square(coordinateX + 200,coordinateY + 100,100);
    // square(coordinateX + 300,coordinateY + 100,100);
    // square(coordinateX + 400,coordinateY + 100,100);
    // square(coordinateX + 500,coordinateY + 100,100);
    // square(coordinateX + 600,coordinateY + 100,100);
    // square(coordinateX + 700,coordinateY + 100,100);
    // square(coordinateX + 800,coordinateY + 100,100);
    // square(coordinateX + 900,coordinateY + 100,100);
    //*this took too long for me to just delete
    fill(valueR,valueG,valueB)
}

function mouseClicked() {
    if (coordinateX >= 0 || coordinateY >= 0) {
        valueR = 255;
        valueG = 0;
        valueB = 0
    }
    else if(!coordinateX || !coordinateY){
        valueR = 51;
        valueG = 51;
        valueB = 255
    }
    //else{}
}