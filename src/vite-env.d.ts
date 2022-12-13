/// <reference types="vite/client" />

interface modelConstructor {
    new(x: number, y: number): IModel;
}

interface IModel {
    render(): void;
    image(): HTMLImageElement;
    x: number;
    y: number;
    width : number;
    height : number
}

interface  ICanvas{
    model(): modelConstructor
    num():number
    ctx: CanvasRenderingContext2D
}
