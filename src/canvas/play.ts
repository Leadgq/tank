import canvasAbstract from "./canvasAbstract";
import model from "../model/play"
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

    createModels() { 
        const canvasWidth = config.canvas.width;
        const canvasHeight = config.canvas.height;
        const modelWidth = config.model.width;
        const modelHeight = config.model.height;
        [{ x: canvasWidth / 2 + modelWidth * 4, y: canvasHeight - modelHeight }].forEach((position) => { 
            const models = this.model() as modelConstructor;
            const instance = new models(position.x, position.y);
            this.models.push(instance)
        })
    }
})('play')
