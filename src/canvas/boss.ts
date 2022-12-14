import canvasAbstract from "./canvasAbstract";
import model from "../model/boss"
import config from "../config";


export default new (class extends canvasAbstract implements ICanvas {

    model(): modelConstructor {
        return model
    }

    num(): number {
        return 0
    }

    render(): void {
        this.createModels();
        super.renderModels();
    }

    protected createModels() {
        [{x: config.canvas.width / 2, y: config.canvas.height - config.model.height}].forEach((position) => {
            const models = this.model() as modelConstructor;
            const instance = new models(position.x, position.y);
            this.models.push(instance)
        })
    }
})('boss')
