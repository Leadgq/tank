import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/steel"

class steel extends canvasAbstract {
    constructor() {
        super();
        super.createModels(config.steel.num, model);
    }
    render(): void {
        super.renderModels();
    }
}
export default new steel();