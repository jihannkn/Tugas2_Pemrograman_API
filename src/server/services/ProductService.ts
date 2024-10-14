import * as repositories from "../repositories/ProductRepositories";

export const getAll = async (filters: {product_name: string, category: string}) => {
    const data = await repositories.findAll(filters);
    return data
}