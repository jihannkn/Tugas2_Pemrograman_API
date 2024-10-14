import { NextRequest, NextResponse } from "next/server";
import * as services from "../services/ProductService";


export const GET = async (req: NextRequest) => {
    try {

        const url = new URL(req.url);
        const product_name= url.searchParams.get("product_name") || "";
        const category = url.searchParams.get("category") || "";

        const filters = {product_name, category}

        const data = await services.getAll(filters);

        return NextResponse.json({
            status: true,
            statusCode: 200,
            message: "Get All Products",
            data
        })
        
    } catch (error) {
        
        return NextResponse.json({
            message: error.message
        })
        
    }
}