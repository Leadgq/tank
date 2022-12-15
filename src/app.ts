import config from "./config";
import "./style.scss";
import { loadServiceImage } from "./service/image";
import straw from "./canvas/straw";
import wall from "./canvas/wall";
import water from "./canvas/water";
import steel from "./canvas/steel";
import tank from "./canvas/tank";
import bullet from "./canvas/bullet";
import boss from "./canvas/boss";
import play from "./canvas/play";
import music from "./service/music";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.width = config.canvas.width + "px";
app.style.height = config.canvas.height + "px";

export default {
  isStart: false,
  state: 9,
  intervalInstance: <any>0,
  bootStrap() {
    app.addEventListener("click", async () => {
      await this.start();
      this.checkGameSate();
    });
  },
  // 游戏状态
  checkGameSate() {
    this.intervalInstance = setInterval(() => {
      // 玩家获胜
      if (tank.models.length === 0) this.state = 1;
      // 敌方获胜
      if (boss.models.length === 0 || play.models.length === 0) this.state = 0;
      if (this.state !== 9) this.stop();
    }, 100);
  },
  stop() {
    clearInterval(this.intervalInstance);
    tank.stop();
    bullet.stop();
    this.createEndText();
  },
  createEndText() {
    const el = document.createElement("canvas");
    el.width = config.canvas.width;
    el.height = config.canvas.height;
    const ctx = el.getContext("2d")!;
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.font = "80px Georgia";
    ctx.textBaseline = "middle";
    ctx.fillText(
      this.state === 1 ? "恭喜你" : "也是不行啊！老弟",
      config.canvas.width / 2,
      config.canvas.height / 2
    );
    app.appendChild(el);
  },
  async start() {
    if (this.isStart === true) return;
    this.isStart = true;
    app.style.backgroundImage = "none";
    app.style.cursor = "default";
    music.start();
    // 加载贴图文件
    await Promise.all(loadServiceImage);
    // 渲染草地
    straw.render();
    // 渲染墙
    wall.render();
    // 渲染水
    water.render();
    // 渲染砖墙
    steel.render();
    // 渲染坦克
    tank.render();
    // 渲染子弹
    bullet.render();
    // 渲染boss
    boss.render();
    // 渲染玩家
    play.render();
  },
};
