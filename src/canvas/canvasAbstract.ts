import config from "../config";
import { imageMap } from "../service/image";
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

  protected createModels(num: Number) {
    const { x, y } = this.position();
    for (let i = 0; i < num; i++) {
      this.canvas.drawImage(
        imageMap.get("straw")!,
        x,
        y,
        config.model.width,
        config.model.height
      );
    }
  }

  protected position() {
    return {
      x: 20,
      y: 30,
    };
  }
}
