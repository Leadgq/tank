import modelAbstract from "./modelAbstract";
import {imageMap} from "../service/image";
import steel from "../canvas/steel";

export default class extends modelAbstract implements IModel {
    canvas: ICanvas = steel;
    name: string = 'steel';

    render(): void {
        super.draw();
    }

    image(): HTMLImageElement {
        return imageMap.get("steel")!;
    }
}
