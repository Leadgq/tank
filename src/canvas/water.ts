import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/water"

export default new (
    class extends canvasAbstract implements ICanvas {

        model(): modelConstructor {
            return model;
        }

        num(): number {
            return config.water.num;
        }

        render(): void {
            super.createModels();
            super.renderModels();
        }
    }

)('water')
