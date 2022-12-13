import canvasAbstract from "./canvasAbstract";
import model from "../model/bullet"

export default new (class extends canvasAbstract implements ICanvas {
    model(): modelConstructor {
        return model;
    }

    num(): number {
        return 0
    }

    render(): void {
        super.createModels();
        super.renderModels();
    }
})('bullet')

