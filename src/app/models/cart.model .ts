import { CartInterface } from "../interfaces/cart.interface";

export class Cart implements CartInterface {
    id!: number;
    userId!: string;
    total!: string;
    discountedTotal!: string;
    totalQuantity!: string;
    totalProducts!: string;
    

    constructor(cart: CartInterface) {
        this.id = cart.id;
        this.userId = cart.userId;
        this.total=cart.total ;
        this.discountedTotal=cart.discountedTotal; 
        this.totalQuantity=cart.totalQuantity; 
        this.totalProducts=cart.totalProducts; 
        
    }
  
}