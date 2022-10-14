import { Ball } from './ball.js'
import { drawCircle } from './utilitys.js';

class Keys {
    constructor(){
        this.left = false;
        this.right = false;
    }
}

export class Player extends Ball {
    constructor(position, radius, color){
        super(position, radius, color);
        this.speed = 200;
        this.lives = 1;
        this.keys = new Keys();
        
    }

}


function playerMovment(player, deltaTime, ){
    let speed = player.speed;
    if (player.keys.left && player.position.x > player.radius){
        player.position.x -= speed * deltaTime
    }
    if (player.keys.right && player.position.x < 600 - player.radius) {
        player.position.x += speed * deltaTime;
    }
}

export function tickPlayer(player, deltaTime){
    playerMovment(player, deltaTime)
    drawCircle(player)

}