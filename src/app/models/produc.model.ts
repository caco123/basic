import { ProductInterface } from "../interfaces/product.interface";
import { UserInterface } from "../interfaces/user.interface";

export class Product implements ProductInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;

    constructor(product: ProductInterface) {
        this.id=product.id;
        this.title=product.title;
        this.price=product.price;
        this.description=product.description;
        this.image=product.image;
    }

}