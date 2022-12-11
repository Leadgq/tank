import config from "../config";
import position from "../service/postion";
export default abstract class canvasAbstract {
  protected items = [];
  abstract render(): void;
  constructor(
    protected app = document.querySelector("#app")! as HTMLDivElement,
    protected el = document.createElement("canvas"),
    protected canvas = el.getContext("2d")!
  ) {
    this.createCanvas();
  }

  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.app.insertAdjacentElement("afterbegin", this.el);
  }

  protected createModels(num: number, model: modelConstructor) {
    position.getCollection(num).forEach((position) => {
      const instance = new model(this.canvas, position.x, position.y);
      instance.render();
    });
  }
}
