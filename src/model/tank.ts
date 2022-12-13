import _ from "lodash"
import modelAbstract from "./modelAbstract";
import {imageMap, mapKey} from "../service/image";
import {directionEnum} from "../directionEnum/directionEnum"
import config from "../config";
import water from "../canvas/water";
import steel from "../canvas/steel";
import wall from "../canvas/wall";
import tank from "../canvas/tank";

export default class extends modelAbstract implements IModel {
    canvas: ICanvas = tank;

    render(): void {
        this.tankMove();
        this.addRandomRate();
    }

    // 增加概率
    addRandomRate() {
        if (Math.floor(Math.random() * 5) === 1) {
            this.direction = directionEnum.bottom
        }
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
            if (this.isCanvasTouch(x, y)) {
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
    protected isCanvasTouch(x: number, y: number): boolean {
        if (x < 0 || x + config.model.width > this.width || y < 0 || y + config.model.height > this.height) {
            return true;
        }
        const models = [...water.models, ...steel.models, ...wall.models];
        return models.some((model) => {
            const state =
                x + config.model.width <= model.x ||
                x >= model.x + config.model.width ||
                y + config.model.height <= model.y ||
                y >= config.model.height + model.y
            return !state
        })
    }


    image() {
        const direction = 'tank' + _.upperFirst(this.direction) as mapKey;
        return imageMap.get(direction)!
    }

}
