import canvasAbstract from "./canvasAbstract";
import model from "../model/bullet"
import tank from "../canvas/tank";

export default new (class extends canvasAbstract implements ICanvas {
    model(): BulletConstructor {
        return model;
    }

    num(): number {
        return 0
    }

    render(): void {
        setTimeout(() => this.createBullet, 100);
    }

    createBullet() {
        tank.models.forEach((tank) => {
            const isExists = this.models.some((m) => m.tank === tank);
            if (!isExists) {
                this.models.push(new model(tank));
            }
        })
    }
})('bullet')

