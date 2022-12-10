import canvasAbstract from "./canvasAbstract";
import config from "../config";

class straw extends canvasAbstract {
    render(): void {
        super.createModels(config.straw.num);
    }

}
export default new straw();