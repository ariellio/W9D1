console.log("cool")
const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

document.addEventListener(
    "DOMContentLoaded", () => {
        const canvas = document.getElementById("game-canvas");
        canvas.width = "500px";
        canvas.height = "500px";
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "black"
        ctx.fillRect(0,0,500,500);
        const mo = new MovingObject({
            pos: [30, 30],
            vel: [10, 10],
            radius: 5,
            color: "#00FF00"
        });
        mo.draw(ctx);
    }
)