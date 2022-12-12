import _ from "lodash"
import modelAbstract from "./modelAbstract";
import {imageMap, mapKey} from "../service/image";
import {directionEnum} from "../directionEnum/directionEnum"

export default class tank extends modelAbstract implements IModel {
    render(): void {
        this.move();
    }

    // 移动
    move() {
        switch (this.direction) {
            case  directionEnum.top:
                this.y -= 2;
                break;
            case  directionEnum.right:
                this.x += 2;
                break;
            case  directionEnum.bottom:
                this.y += 2;
                break;
            case  directionEnum.left:
                this.x -= 2;
                break
        }
    }

    image() {
        const direction = 'tank' + _.upperFirst(this.direction) as mapKey;
        return imageMap.get(direction)!
    }

}
