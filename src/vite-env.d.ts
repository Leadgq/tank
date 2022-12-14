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
    name:string
}

interface ICanvas {
    model(): modelConstructor | BulletConstructor
    num(): number
    ctx: CanvasRenderingContext2D
}
