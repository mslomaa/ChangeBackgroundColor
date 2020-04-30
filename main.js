let red = 100;
let green = 100;
let blue = 100;


document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


const changeColor = (e) => {
    if(e.keyCode === 38){
        if(red < 256){
            red = red + 1;
            green = green + 1;
            blue = blue + 1; 
        }
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        console.log(red, green, blue); 
        
    } else if(e.keyCode === 40) {
        if(red > 0){
            red = red - 1;
            green = green - 1;
            blue = blue - 1;
        }
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        console.log(red, green, blue);
    }   
}

window.addEventListener('keydown', changeColor)

