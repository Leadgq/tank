import config from "../config";
import position from "../service/position";

export default abstract class canvasAbstract {
    protected models: IModel[] = [];

    abstract num(): number;

    abstract model(): modelConstructor;

    abstract render(): void;

    constructor(
        protected app = document.querySelector("#app")! as HTMLDivElement,
        protected el = document.createElement("canvas"),
        protected canvas = el.getContext("2d")!
    ) {
        this.createCanvas();
    }

    // 创建画布
    protected createCanvas() {
        this.el.width = config.canvas.width;
        this.el.height = config.canvas.height;
        this.app.insertAdjacentElement("afterbegin", this.el);
    }

    // 创建模型==> 模型创建只有一次
    protected createModels() {
        position.getCollection(this.num()).forEach((position) => {
            const models = this.model();
            const instance = new models(this.canvas, position.x, position.y);
            this.models.push(instance)
        });
    }

    // 渲染模型
    protected renderModels() {
        this.models.forEach(model => model.render());
    }
}
