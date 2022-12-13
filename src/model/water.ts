import modelAbstract from "./modelAbstract";
import {imageMap} from "../service/image";
import water from "../canvas/water";

export default class extends modelAbstract implements IModel {
    canvas: ICanvas = water;

    render(): void {
        super.draw();
    }

    image(): HTMLImageElement {
        return imageMap.get("water")!;
    }
}
