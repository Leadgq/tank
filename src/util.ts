import config from "./config";
import water from "./canvas/water";
import steel from "./canvas/steel";
import wall from "./canvas/wall";

export default {
    isCanvasTouch(
        x: number,
        y: number,
        width = config.model.width,
        height = config.model.height,
    ) {
        return x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height
    },
    isModelTouch(
        x: number,
        y: number,
        width = config.model.width,
        height = config.model.height,
        models = [...water.models, ...steel.models, ...wall.models]) {
        if (x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height) {
            return true;
        }
        return models.some((model) => {
            const state =
                x + config.model.width <= model.x ||
                x >= model.x + config.model.width ||
                y + config.model.height <= model.y ||
                y >= config.model.height + model.y
            return !state
        })
    }

}
