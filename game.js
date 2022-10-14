import { Enemy, positionNewEnemy, enemyRadius, tickEnemies} from './enemy.js';
import { Player, tickPlayer } from './player.js';
import { Position, Velocity, canvas, context} from './utilitys.js'


class Game {
    constructor(position, canvas, context){
        this.position = position;
        this.canvas = canvas;
        this.context = context;

    }
}

function handleKeyDown(event){
    if (event.repeat) return;
    if (event.key === 'a'){
        player.keys.left = true;
    }
    else if (event.key === 'd'){
        player.keys.right = true;
    }
}
function handleKeyUp(event){ 
    if (event.key === 'a'){
        player.keys.left = false;
    }
    if (event.key === 'd'){
        player.keys.right = false;
    }
}

window.addEventListener('keypress', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);

let enemies = [];
let lastTime = Date.now();
let tickCount = 0;
let gameOver = false;
if(gameOver === true ){
    game = new Game(canvas, context); // Försökte lösa så att om man dog startade ett nytt spel
}                                     // men jag fick inte rätt på det :(


let game = new Game(canvas, context);
let player = new Player(new Position(canvas.width / 2, canvas.height - 50), 30, 'green')


function tick(){

    tickCount++;
    let currentTime = Date.now();
    let deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);


    tickEnemies(enemies, deltaTime, player, gameOver)
    tickPlayer(player, deltaTime)

    if (tickCount % 60 === 0 ){
        let enemy = new Enemy(new Position(positionNewEnemy(), -100), enemyRadius(), 'red', new Velocity(0, 100));
        enemies.push(enemy);

    }
    
    requestAnimationFrame(tick);
   
}



tick();

