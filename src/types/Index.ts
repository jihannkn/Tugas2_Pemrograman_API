export type Product = {
    product_id: string;
    product_name: string;
    product_code: string;
    category: string;
    price: number;
    stock_quantity: number;
    supplier_name: string;
    supplier_contact: string;
    warranty_period: string;
    date_added: string;
    description: string;
};



export type ProductsQueryResponse = {
    data: Array<Product> | null,
}