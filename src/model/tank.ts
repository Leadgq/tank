import modelAbstract from "./modelAbstract";
import {imageMap} from "../service/image";

export default class tank extends modelAbstract implements IModel {
    render(): void {
        this.randomImg();
    }

    randomImg() {
        super.draw(imageMap.get("tank")!);
    }
}
