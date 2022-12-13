import modelAbstract from "./modelAbstract";
import {imageMap} from "../service/image";
import bullet from "../canvas/bullet";
import config from "../config";

export default class extends modelAbstract implements IModel {
    canvas: ICanvas = bullet;
    name: string = 'bullet';

    constructor(public tank: IModel) {
        super(tank.x + config.model.width / 2, tank.y + config.model.height / 2);
    }

    render(): void {
        super.draw();
    }

    image(): HTMLImageElement {
        return imageMap.get("bullet")!;
    }
}
