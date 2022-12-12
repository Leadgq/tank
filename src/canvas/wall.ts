import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/wall"

class wall extends canvasAbstract {

    model(): modelConstructor {
        return model;
    }

    num(): number {
        return config.wall.num;
    }

    render(): void {
        super.createModels();
        super.renderModels();
    }

}

export default new wall();
