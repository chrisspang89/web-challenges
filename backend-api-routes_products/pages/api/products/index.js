import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  console.log("inside api/products");
  const products = getAllProducts();
  response.status(200).json(products);
}
