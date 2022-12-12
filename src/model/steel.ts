import modelAbstract from "./modelAbstract";
import {imageMap} from "../service/image";

export default class steel extends modelAbstract implements IModel {
    render(): void {
        super.draw();
    }

    image(): HTMLImageElement {
        return imageMap.get("steel")!;
    }
}
