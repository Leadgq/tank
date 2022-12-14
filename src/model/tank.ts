import _ from "lodash"
import modelAbstract from "./modelAbstract";
import {imageMap, mapKey} from "../service/image";
import {directionEnum} from "../directionEnum/directionEnum"
import tank from "../canvas/tank";
import util from "../util";

export default class extends modelAbstract implements IModel {
    name: string = 'tank';
    canvas: ICanvas = tank;


    render(): void {
        this.tankMove();
        this.addRandomRate();
    }

    // 增加概率
    addRandomRate() {
        if (Math.floor(Math.random() * 5) === 1) this.direction = directionEnum.bottom
    }

    // 移动
    tankMove() {
        while (true) {
            let x = this.x;
            let y = this.y;
            switch (this.direction) {
                case  directionEnum.top:
                    y--;
                    break;
                case  directionEnum.right:
                    x++;
                    break;
                case  directionEnum.bottom:
                    y++;
                    break;
                case  directionEnum.left:
                    x--;
                    break
            }
            if (util.isModelTouch(x, y)) {
                this.randomDirection();
            } else {
                this.x = x;
                this.y = y;
                break;
            }
        }
        super.draw();
    }

    image() {
        const direction = 'tank' + _.upperFirst(this.direction) as mapKey;
        return imageMap.get(direction)!
    }

}
