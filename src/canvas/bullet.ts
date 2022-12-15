import canvasAbstract from "./canvasAbstract";
import model from "../model/bullet"
import tank from "../canvas/tank";
import play from "../canvas/play";
import bullet from "../model/bullet";
import music from "../service/music";

export default new (class extends canvasAbstract implements ICanvas {
    interval :any = 0;
    model(): BulletConstructor {
        return model;
    }

    num(): number {
        return 0
    }

    render(): void {
       this.interval = setInterval(() => {
            this.createBullet();
            super.renderModels();
        }, 50);
    }

     stop(): void {
         clearInterval(this.interval);
     }

    createBullet() {
        tank.models.forEach((tank) => {
            const isExists = this.models.some((m) => m.tank === tank);
            if (!isExists) {
                this.models.push(new bullet(tank));
            }
        })
    }
    addPlayBullet() { 
        this.models.push(new bullet(play.models[0]));
        music.fire();
    }
})('bullet')

