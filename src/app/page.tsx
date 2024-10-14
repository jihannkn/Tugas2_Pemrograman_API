"use client";
import { Product } from "../types/Index";
import { useQueryProducts } from "../features/product/useQueryProduc";

// Fungsi untuk merender elemen tabel
const renderElement = (product: Product[]) =>
  product.map((item, index: number) => (
    <tr key={index} className="border-b-4 border-black">
      <td className="p-6 font-bold uppercase text-black bg-gray-300">{item.product_name}</td>
      <td className="p-6 bg-gray-300">${item.price}</td>
      <td className="p-6 bg-gray-300">{item.description}</td>
    </tr>
  ));

export default function App() {
  const { data } = useQueryProducts();
  console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="brutal-border bg-white p-10 max-w-3xl w-full shadow-lg">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b-4 border-black">
              <th className="bg-black text-white uppercase p-6">Product Name</th>
              <th className="bg-black text-white uppercase p-6">Price</th>
              <th className="bg-black text-white uppercase p-6">Description</th>
            </tr>
          </thead>
          <tbody>{data && renderElement(data)}</tbody>
        </table>
      </div>
    </div>
  );
}
