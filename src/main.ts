import config from "./config";
import "./style.scss";
import { loadServiceImage } from "./service/image";
import straw from "./canvas/straw";
import wall from  "./canvas/wall"

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.width = config.canvas.width + "px";
app.style.height = config.canvas.height + "px";

const bootStrap = async () => {
  // 加载贴图文件
  await Promise.all(loadServiceImage);
  straw.render();
  wall.render();
};
void bootStrap();
