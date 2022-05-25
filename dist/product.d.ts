export declare class Product {
    id: number;
    name: string;
    price: number;
    constructor(id: number, name: string, price: number);
}
export declare enum SPORT {
    Running = 0,
    Soccer = 1,
    Basketball = 2,
    Others = 3
}
export declare class SportsProduct extends Product {
    id: number;
    name: string;
    price: number;
    private _sports;
    constructor(id: number, name: string, price: number, ...sportArray: SPORT[]);
}
