import config from "../config";

type mapKey = keyof typeof config.images;
// 图片容器
export let imageMap = new Map<mapKey, HTMLImageElement>();
//加载资源
export const loadServiceImage = Object.entries(config.images).map(([key, value]) => {
        return new Promise((resolve) => {
            let img = document.createElement("img");
            img.src = value;
            img.onload = () => {
                imageMap.set(key as mapKey, img);
                resolve(img);
            };
        });
    }
);
