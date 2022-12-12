import _ from "lodash"
import modelAbstract from "./modelAbstract";
import {imageMap, mapKey} from "../service/image";
import {directionEnum} from "../directionEnum/directionEnum"
import config from "../config";

export default class tank extends modelAbstract implements IModel {
    render(): void {
        this.tankMove();
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
            if (this.isTouch(x, y)) {
                this.randomDirection();
            } else {
                this.x = x;
                this.y = y;
                break;
            }
        }
        super.draw();
    }

    // 检测是否碰到画布
    protected isTouch(x: number, y: number): boolean {
        return x < 0 || x + config.model.width > this.width || y < 0 || y + config.model.height > this.height;
    }

    image() {
        const direction = 'tank' + _.upperFirst(this.direction) as mapKey;
        return imageMap.get(direction)!
    }

}
