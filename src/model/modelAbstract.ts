import config from "../config";
import { imageMap } from "../service/image";

export default abstract class modelAbstract {
  abstract render(): void;
  constructor(
    protected canvas: CanvasRenderingContext2D,
    protected x: number,
    protected y: number
  ) {}

  protected draw() {
    this.canvas.drawImage(
      imageMap.get("straw")!,
      this.x,
      this.y,
      config.model.width,
      config.model.height
    );
  }
}
