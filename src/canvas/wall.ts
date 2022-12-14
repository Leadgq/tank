import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/wall"

export default new (
    class extends canvasAbstract implements ICanvas {

        model(): modelConstructor {
            return model;
        }

        num(): number {
            return config.wall.num;
        }

        render(): void {
            super.createModels();
            this.createBossWall();
            super.renderModels();
        }

        // 创建boss外围保护墙
        createBossWall() {
            const canvasWidth = config.canvas.width;
            const canvasHeight = config.canvas.height;
            const modelWidth = config.model.width;
            const modelHeight = config.model.height;
            const post = [
                {x: canvasWidth / 2 - modelWidth * 2, y: canvasHeight - modelHeight},
                {x: canvasWidth / 2 - modelWidth * 2, y: canvasHeight - modelHeight * 2},
                {x: canvasWidth / 2 - modelWidth * 2, y: canvasHeight - modelHeight * 3},
                {x: canvasWidth / 2 - modelWidth, y: canvasHeight - modelHeight * 3},
                {x: canvasWidth / 2, y: canvasHeight - modelHeight * 3},
                {x: canvasWidth / 2 + modelWidth, y: canvasHeight - modelHeight * 3},
                {x: canvasWidth / 2 + modelWidth * 2, y: canvasHeight - modelHeight * 3},
                {x: canvasWidth / 2 + modelWidth * 2, y: canvasHeight - modelHeight * 2},
                {x: canvasWidth / 2 + modelWidth * 2, y: canvasHeight - modelHeight},
            ]
            post.forEach((position) => {
                const models = this.model() as modelConstructor;
                const instance = new models(position.x, position.y);
                this.models.push(instance)
            });
        }

    }
)('wall')

