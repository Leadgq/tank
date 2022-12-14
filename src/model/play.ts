import play from "../canvas/play";
import { imageMap } from "./../service/image";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
  render(): void {
    super.draw();
  }
  image(): HTMLImageElement {
    return imageMap.get("playTop")!;
  }
  canvas: ICanvas = play;
}
