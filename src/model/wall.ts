import modelAbstract from "./modelAbstract";
import {imageMap} from "../service/image";
import wall from "../canvas/wall";

export default class extends modelAbstract implements IModel {
    canvas: ICanvas = wall;
    name: string = 'wall';

    render(): void {
        super.draw();
    }

    image(): HTMLImageElement {
        return imageMap.get("wall")!;
    }
}
