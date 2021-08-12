export interface Product {
    id: number;
    description: string;
    img: string;
    price: number;
    quantity: number;
}

export interface ProductResponse {
    products: Array<Product>
}