export class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
//列舉運動分類
export var SPORT;
(function (SPORT) {
    SPORT[SPORT["Running"] = 0] = "Running";
    SPORT[SPORT["Soccer"] = 1] = "Soccer";
    SPORT[SPORT["Basketball"] = 2] = "Basketball";
    SPORT[SPORT["Others"] = 3] = "Others";
})(SPORT || (SPORT = {}));
export class SportsProduct extends Product {
    constructor(id, name, price, ...sportArray) {
        super(id, name, price);
        this.id = id;
        this.name = name;
        this.price = price;
        this._sports = sportArray;
    }
}
//# sourceMappingURL=product.js.map