import modelAbstract from "./modelAbstract";
import {imageMap} from "../service/image";
import bullet from "../canvas/bullet";

export default class extends modelAbstract implements IModel {
    canvas: ICanvas = bullet;

    render(): void {
        super.draw();
    }

    image(): HTMLImageElement {
        return imageMap.get("bullet")!;
    }
}
