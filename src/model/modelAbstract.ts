import {directionEnum} from "../directionEnum/directionEnum";


export default abstract class modelAbstract {
    abstract render(): void;

    abstract image(): HTMLImageElement;

    protected direction: directionEnum = directionEnum.top

    constructor(
        public canvas: CanvasRenderingContext2D,
        public x: number,
        public y: number
    ) {
        this.randomDirection();
    }

    // 随机方向
    randomDirection() {
        this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum;
    }
}
