let colorBar = [];

function getColor(){
    let red = 0;
    let blue = 0;
    let green = 0;
    for (let i = 0; i<=8; i++){
        for(let j=0; j<=8;j++){
            for(let z=0;z<=8;z++){
                red = i*32;
                blue = j*32;
                green = z*32;
                let tempcolor = [red,green,blue];
                colorBar.push(tempcolor);
            }
        }
    }
    console.log(colorBar);
    return colorBar;
}

module.exports = {getColor};
