import ProductList from "@/components/ProductList";
import React from "react";

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category || "all";
  return {
    title: `Products - ${category.charAt(0).toUpperCase() + category.slice(1)}`,
    description: `Browse our selection of ${category} products.`,
  };
};

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category || "all";

  return (
    <div>
      <ProductList category={category} params="products" />
    </div>
  );
};

export default ProductsPage;
