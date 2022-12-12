import canvasAbstract from "./canvasAbstract";
import config from "../config";
import  model  from  "../model/straw"

class straw extends canvasAbstract {
    constructor() { 
        super();
        super.createModels(config.straw.num,model);
    }
    render(): void {
        super.renderModels();
    }
}
export default new straw();