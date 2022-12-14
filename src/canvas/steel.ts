import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/steel"

export default new (class extends canvasAbstract implements ICanvas {

    model(): modelConstructor {
        return model
    }

    num(): number {
        return config.steel.num
    }

    render(): void {
        super.createModels();
        super.renderModels();
    }
})('steel')
