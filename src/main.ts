import config from "./config";
import "./style.scss";
import {loadServiceImage} from "./service/image";
import straw from "./canvas/straw";
import wall from "./canvas/wall"
import water from "./canvas/water";
import steel from "./canvas/steel";
import tank from "./canvas/tank";
import bullet from "./canvas/bullet";
import boss from  "./canvas/boss"

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.width = config.canvas.width + "px";
app.style.height = config.canvas.height + "px";

const bootStrap = async () => {
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
};
void bootStrap();
