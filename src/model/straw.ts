import modelAbstract from "./modelAbstract";
import {imageMap} from "../service/image";
import straw from "../canvas/straw"

export default class extends modelAbstract implements IModel {
    canvas: ICanvas = straw;
    name: string = 'straw';

    render(): void {
        super.draw();
    }

    image(): HTMLImageElement {
        return imageMap.get("straw")!;
    }
}
