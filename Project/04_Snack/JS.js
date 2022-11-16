// Game constants

 let direction = {x : 0, y : 0}; // Initial Direction 0 0 

const foodSound = new Audio("music/food.mp3");
const gameOverSound = new Audio("music/gameover.mp3");
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x : 13, y : 15}
]

// Game Function 
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime)

    if((ctime - lastPaintTime) / 1000 < 1/ speed)
        return;

    lastPaintTime = ctime; 

    gameEngine();

    
}


function gameEngine(){
    // Part 1 : Updating snake array
    


    // Part 2 : Display the snack and food

    board.innerHTML = "";
    
}




// main logic 
window.requestAnimationFrame(main);


