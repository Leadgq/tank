import config from "../config";
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
    this.positionCollection(num).forEach((position) => {
      const instance = new model(this.canvas, position.x, position.y);
      instance.render();
    });
  }
  // 生成不重复坐标
  protected positionCollection(num: number) {
    let positions = [] as { x: number; y: number }[];
    for (let i = 0; i < num; i++) {
      while (true) {
        const { x, y } = this.position();
        const exist = positions.some( (position) => position.x === x && position.y === y);
        if (!exist) {
          positions.push({ x, y });
          break;
        }
      }
    }
    return positions;
  }
  // 返回随机坐标
  protected position() {
    return {
      x:
        Math.floor((Math.random() * config.canvas.width) / config.model.width) *
        config.model.width,
      y:
        Math.floor(
          (Math.random() * config.canvas.height) / config.model.height
        ) * config.model.height,
    };
  }
}
