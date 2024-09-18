import { v4 as randomUUID } from "uuid";

export class Product {
    private _id: string = randomUUID();
    private _imageUrl: string;
    private _category: string;
    private _productName: string;
    private _price: number;

    constructor ( 
        imageUrl: string,
        category: string,
        productName: string,
        price: number
    ){
        this._imageUrl = imageUrl;
        this._category = category;
        this._productName = productName;
        this._price = price;
    }
}