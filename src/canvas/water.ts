import canvasAbstract from "./canvasAbstract";
import config from "../config";
import model from "../model/water"

class water extends canvasAbstract {
    constructor() {
        super();
        super.createModels(config.water.num, model);
    }
    render(): void {
        super.renderModels();
    }
}
export default new water();