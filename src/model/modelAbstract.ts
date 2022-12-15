import {directionEnum} from "../directionEnum/directionEnum";
import config from "../config";
import music from "../service/music";


export default abstract class modelAbstract {
    name = 'modelAbstract';

    abstract render(): void;

    abstract image(): HTMLImageElement;

    abstract canvas: ICanvas;
    public direction: directionEnum = directionEnum.top;
    public width = config.model.width;
    public height = config.model.height;


    constructor(public x: number, public y: number) {
        this.randomDirection();
    }

    public destroy() {
        this.canvas.removeModel(this);
        this.canvas.renderModels();
    }
    // 队列展示
    protected blasts(model: IModel) {
        music.blast();
        Array(...Array(8).keys()).reduce((promise, index) => {
            setTimeout(() => {
                return new Promise((resolve) => {
                    let img = document.createElement("img");
                    img.src = `/src/static/images/blasts/blast${index}.gif`;
                    img.onload = () => {
                        this.canvas.ctx.drawImage(img, model.x, model.y, model.width, model.height);
                        resolve(promise);
                    }
                })
            }, 100)
        }, Promise.resolve())
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
