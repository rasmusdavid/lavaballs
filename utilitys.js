
export let canvas = document.getElementById("canvas");
export let context = canvas.getContext('2d');

export class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class Velocity {
    constructor(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }
}

export function drawCircle(unit) {
    context.beginPath();
    context.fillStyle = unit.color;
    context.arc(unit.position.x, unit.position.y, unit.radius, 0, Math.PI * 2)
    context.fill();
    context.closePath();
}

export function collision(player, enemy){
    let dx = player.position.x - enemy.position.x;
    let dy = player.position.y - enemy.position.y;
    let distance = Math.sqrt((dx * dx) + (dy * dy));

    return distance < player.radius + enemy.radius;
}