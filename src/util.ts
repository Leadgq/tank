import config from "./config";
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
        models = [...wall.models],
        width = config.model.width,
        height = config.model.height,
    ) {
        return models.find((model) => {
            const state = x + width <= model.x || x >= model.x + model.width || y + height <= model.y || y >= model.y + model.height
            return !state
        })
    }
}
