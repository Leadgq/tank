import config from "../config";

type positionType = { x: number; y: number };

class position {
  collection: positionType[] = [];
  // 生成不重复坐标
  public getCollection(num: number) {
    let positions: positionType[] = [];
    for (let i = 0; i < num; i++) {
      while (true) {
        const { x, y } = this.position();
        const exist = this.collection.some( (position) => position.x === x && position.y === y);
        if (!exist) {
          positions.push({ x, y });
          this.collection.push({ x, y });
          break;
        }
      }
    }
    return positions;
  }
  // 返回随机坐标
  public position() {
    return {
      x:
        Math.floor((Math.random() * config.canvas.width) / config.model.width) *
        config.model.width,
      y:
        Math.floor(
          Math.random() * (config.canvas.height / config.model.height - 5)
        ) *
          config.model.height +
        config.model.height * 2,
    };
  }
}

export default new position();
