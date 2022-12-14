import modelAbstract from "./modelAbstract";
import {imageMap} from "../service/image";
import boss from "../canvas/boss";

export default class extends modelAbstract implements IModel {
    canvas: ICanvas = boss;
    name: string = 'boss';

    render(): void {
        super.draw();
    }

    image(): HTMLImageElement {
        return imageMap.get("boss")!;
    }
}
