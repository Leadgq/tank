import {directionEnum} from "../directionEnum/directionEnum";
import config from "../config";


export default abstract class modelAbstract {
    abstract render(): void;

    abstract image(): HTMLImageElement;

    abstract canvas: ICanvas;
    protected direction: directionEnum = directionEnum.top;
    public width = config.canvas.width;
    public height = config.canvas.height;


    constructor(public x: number, public y: number) {
        this.randomDirection();
    }

    // 随机方向
    randomDirection() {
        this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum;
    }

    draw() {
        this.canvas.ctx.drawImage(
            this.image(),
            this.x,
            this.y,
            config.model.width,
            config.model.height
        );
    }
}
