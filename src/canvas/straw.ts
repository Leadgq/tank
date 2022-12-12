import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/straw"

class straw extends canvasAbstract {
    model(): modelConstructor {
        return model;
    }

    num(): number {
        return config.straw.num;
    }

    render(): void {
        super.createModels();
        super.renderModels();
    }
}

export default new straw();
