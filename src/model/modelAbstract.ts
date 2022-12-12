import {directionEnum} from "../directionEnum/directionEnum";
import config from "../config";


export default abstract class modelAbstract {
    abstract render(): void;

    abstract image(): HTMLImageElement;

    protected direction: directionEnum = directionEnum.top;
    protected width = config.canvas.width;
    protected height = config.canvas.height;

    constructor(public canvas: CanvasRenderingContext2D, public x: number, public y: number) {
        this.randomDirection();
    }

    // 随机方向
    randomDirection() {
        this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum;
    }

    draw() {
        this.canvas.drawImage(
            this.image(),
            this.x,
            this.y,
            config.model.width,
            config.model.height
        );
    }
}
