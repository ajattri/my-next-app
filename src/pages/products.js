import React from "react";
import ProductList from "@/components/products/ProductList/ProductList";
import Layout from "@/components/Layout";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "This is a description for product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "This is a description for product 2",
  },
];

const ProductsPage = () => {
  return (
    <div>
      <Layout>
        <ProductList products={products} />
      </Layout>
    </div>
  );
};

export default ProductsPage;
