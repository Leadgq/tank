import modelAbstract from "./modelAbstract";
import { imageMap } from "../service/image";

export default class straw extends modelAbstract implements IModel {
    render(): void {
        super.draw();
    }

    image(): HTMLImageElement {
        return imageMap.get("straw")!;
    }
}
