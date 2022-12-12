import _ from "lodash"
import modelAbstract from "./modelAbstract";
import {imageMap, mapKey} from "../service/image";
import {directionEnum} from "../directionEnum/directionEnum"


export default class tank extends modelAbstract implements IModel {
    protected direction: directionEnum = directionEnum.top

    render(): void {
        this.randomDirection();
        super.draw(this.randomImg());
    }

    // 随机方向
    randomDirection() {
        this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum;
    }

    randomImg() {
        const direction = 'tank' + _.upperFirst(this.direction) as mapKey;
        return imageMap.get(direction)!
    }
}
