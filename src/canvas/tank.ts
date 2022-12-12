import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/tank"
import position from "../service/position";


class tank extends canvasAbstract {
    model(): modelConstructor {
        return model;
    }

    num(): number {
        return config.tank.num;
    }

    render(): void {
        this.createModels();
        this.renderModels();
        setInterval(() => this.renderModels(), 100)
    }

    // 渲染模型
    protected renderModels() {
        this.canvas.clearRect(0, 0, config.model.width, config.model.height);
        this.models.forEach(model => {
            model.render();
            this.canvas.drawImage(model.image(), model.x, model.y, config.model.width, config.model.height)
        });
    }

    // 创建坦克模型
    protected createModels() {
        for (let i = 0; i < this.num(); i++) {
            const {x} = position.position();
            const models = this.model();
            const instance = new models(this.canvas, x, 0);
            this.models.push(instance)
        }
    }
}

export default new tank();
