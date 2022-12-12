import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/water"

class water extends canvasAbstract {

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

export default new water();
