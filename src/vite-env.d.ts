/// <reference types="vite/client" />

interface modelConstructor {
    new(x: number, y: number): IModel;
}

interface BulletConstructor {
    new (tank: IModel): IModel
}


interface IModel {
    render(): void;
    image(): HTMLImageElement;
    tank?: IModel;
    direction: string;
    x: number;
    y: number;
    width: number;
    height: number;
    name:string;
    destroy():void
}

interface ICanvas {
    model(): modelConstructor | BulletConstructor
    num(): number
    ctx: CanvasRenderingContext2D;
    removeModel(model:IModel):void
    renderModels(): void;
    stop?():void
}
