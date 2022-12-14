import config from "../config";
import position from "../service/position";

export default abstract class canvasAbstract {
    public models: IModel[] = [];

    abstract num(): number;

    abstract model(): modelConstructor | BulletConstructor;

    abstract render(): void;

    constructor(
        protected name: string,
        protected app = document.querySelector("#app")! as HTMLDivElement,
        protected el = document.createElement("canvas"),
        public ctx = el.getContext("2d")!
    ) {
        this.createCanvas();
    }

    // 创建画布
    protected createCanvas() {
        this.el.width = config.canvas.width;
        this.el.height = config.canvas.height;
        this.el.setAttribute("name", this.name);
        this.app.insertAdjacentElement("afterbegin", this.el);
    }

    // 创建模型==> 模型创建只有一次
    protected createModels() {
        position.getCollection(this.num()).forEach((position) => {
            const models = this.model() as modelConstructor;
            const instance = new models(position.x, position.y);
            this.models.push(instance)
        });
    }

    // 渲染模型
    protected renderModels() {
        this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
        this.models.forEach(model => model.render());
    }

    public removeModel(model: IModel) {
        this.models = this.models.filter((m) => m !== model);
    }
}
