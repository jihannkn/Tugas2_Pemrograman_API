import product from "../../../public/data/Product.json";


export const findAll = async (filters:{product_name: string, category: string}) => {

    let filterData = product
    if(filters.product_name){
        filterData = filterData.filter((product) => 
        product.product_name.toLowerCase().includes(filters.product_name.toLowerCase())
        )
    }
    if(filters.category){
        filterData = filterData.filter((product) => 
        product.category.toLowerCase().includes(filters.category.toLowerCase())
        
        )
    }


    return filterData
}