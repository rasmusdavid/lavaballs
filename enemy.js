import { Ball } from './ball.js'
import { canvas, drawCircle, collision } from './utilitys.js'

export class Enemy extends Ball {
    constructor(position, radius, color, velocity) {
        super(position, radius, color)
        this.velocity = velocity;
    }

}
function enemyMovment(deltaTime, enemy) {
    enemy.position.x += enemy.velocity.dx * deltaTime;
    enemy.position.y += enemy.velocity.dy * deltaTime;
}


export function positionNewEnemy() {
    return Math.random() * canvas.width

}

export function enemyRadius() {
    return Math.random() * (40 - 20) + 20
}

function enemyOutside(enemy){
    return (enemy.position.y > canvas.height + enemy.radius)
}

export function tickEnemies(enemies, deltaTime, player, gameOver) {
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];

        drawCircle(enemy)
        enemyMovment(deltaTime, enemy)

        if (enemyOutside(enemy)){
            enemies.splice(i, 1)
            continue;
        }

        if (collision(player, enemy, gameOver)){
            enemies.splice(i, 1);
            player.lives -=1;
            if(player.lives <= 0){
                alert("Game over!")
                gameOver = true;
                break;
            }
            
        }
        continue;
    }
}