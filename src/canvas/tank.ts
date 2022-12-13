import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/tank"
import position from "../service/position";


export default new (
    class extends canvasAbstract implements ICanvas {
        model(): modelConstructor {
            return model;
        }

        num(): number {
            return config.tank.num;
        }

        render(): void {
            this.createModels();
            this.clearSelfModel();
            setInterval(() => this.clearSelfModel(), config.timeOut)
        }

        // 清空坦克模型
        protected clearSelfModel() {
            this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
            super.renderModels();
        }

        // 创建坦克模型
        protected createModels() {
            for (let i = 0; i < this.num(); i++) {
                const {x} = position.position();
                const models = this.model();
                const instance = new models(x, 0);
                this.models.push(instance)
            }
        }
    }
)('tank')
