export class Product{
    constructor(
        public id:number,
        public name:string,
        public price:number
    ){}
}

//列舉運動分類
export enum SPORT{
    Running,Soccer,Basketball,Others
}

export class SportsProduct extends Product{
    //_為不公開標記，_sports屬性屬於SPORT型別
    private _sports:SPORT[]
    constructor(
        public id:number,
        public name:string,
        public price:number,
        ...sportArray:SPORT[]
    ){
        super(id,name,price)
        this._sports=sportArray
    }
}