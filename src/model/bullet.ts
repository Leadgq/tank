import modelAbstract from "./modelAbstract";
import {imageMap} from "../service/image";
import bullet from "../canvas/bullet";
import config from "../config";
import {directionEnum} from "../directionEnum/directionEnum";
import util from "../util";
import wall from "../canvas/wall";
import steel from "../canvas/steel";
import boss from "../canvas/boss";

export default class extends modelAbstract implements IModel {
    canvas: ICanvas = bullet;
    name: string = 'bullet';

    constructor(public tank: IModel) {
        super(tank.x + config.model.width / 2, tank.y + config.model.height / 2);
        this.direction = tank.direction as directionEnum
    }

    render(): void {
        let x = this.x;
        let y = this.y;
        switch (this.direction) {
            case directionEnum.top:
                y -= 2;
                break;
            case directionEnum.right:
                x += 2;
                break;
            case directionEnum.bottom:
                y += 2;
                break;
            case  directionEnum.left:
                x -= 2;
                break;
        }
        // 触碰特殊物体
        let TouchModel = util.isModelTouch(x, y, [...wall.models, ...steel.models,...boss.models], 2, 2)
        // 是否触碰画布
        if (util.isCanvasTouch(x, y, 2, 2)) {
            this.destroy();
        } else if (TouchModel) {
            this.destroy();
            // 展示爆炸特效
            this.blasts(TouchModel);
            // 不是铁皮就卸载
            if (TouchModel.name !== 'steel') TouchModel.destroy();
        } else {
            this.x = x;
            this.y = y;
            this.draw();
        }
    }


    draw() {
        this.canvas.ctx.drawImage(this.image(), this.x, this.y, 2, 2);
    }

    image(): HTMLImageElement {
        return imageMap.get("bullet")!;
    }
}
