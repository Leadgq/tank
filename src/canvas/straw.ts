import canvasAbstract from "./canvasAbstract";
import config from "../config";
import  model  from  "../model/straw"

class straw extends canvasAbstract {
    render(): void {
        super.createModels(config.straw.num,model);
    }

}
export default new straw();