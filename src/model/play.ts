import _ from "lodash";
import boss from "../canvas/boss";
import bullet from "../canvas/bullet";
import play from "../canvas/play";
import steel from "../canvas/steel";
import wall from "../canvas/wall";
import water from "../canvas/water";
import { directionEnum } from "../directionEnum/directionEnum";
import util from "../util";
import { imageMap, mapKey } from "./../service/image";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = play;
  name: string = 'play';
  // 是否绑定事件
  isBindEvent: boolean = false;
  render(): void {
    super.draw();
    this.bindEvent();
  }
  bindEvent() { 
    if (this.isBindEvent) return;
    this.isBindEvent = true;
    // 键盘按下方向
    document.addEventListener('keydown', this.changeDirection.bind(this));
    document.addEventListener('keydown', (event:KeyboardEvent) => { 
      if (event.code === 'Space') { 
        bullet.addPlayBullet();
      }
    })
  }
  // 修改方向
  changeDirection(event: KeyboardEvent) {
    let x = this.x; 
    let y = this.y;
    switch (event.code) { 
      case 'ArrowUp':
        this.direction = directionEnum.top;
        y -= 5;
        break;
      case 'ArrowRight':
        this.direction = directionEnum.right;
        x += 5;
        break;
      case 'ArrowDown':
        this.direction = directionEnum.bottom;
        y += 5;
        break;
      case 'ArrowLeft':
        this.direction = directionEnum.left;
        x -= 5;
        break;
    }
    const models = [...water.models, ...steel.models, ...boss.models, ...wall.models];
    if (util.isCanvasTouch(x, y) || util.isModelTouch(x, y, models)) return;
    this.x = x;
    this.y = y;
    this.canvas.renderModels();
  }

  image(): HTMLImageElement {
    const direction = this.name + _.upperFirst(this.direction);
    return imageMap.get(direction as mapKey)!;
  }
}
