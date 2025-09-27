"use client";

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { addToCart } = useCartStore();

  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };

  const handleAddToCart = (type: "add" | "buy") => {
    addToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    });

    if (type === "buy") {
      router.push("/cart");
    }

    toast.success("Product added to cart");
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* SIZE SELECTION */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              key={size}
              className={`rounded-sm cursor-pointer border-1 p-[2px] ${selectedSize === size ? "border-gray-600" : "border-gray-300"}`}>
              <div
                onClick={() => handleSizeChange("size", size)}
                className={`rounded-sm w-6 h-6 text-center flex items-center justify-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}>
                {size}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COLOR SELECTION */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              key={color}
              className={`cursor-pointer border-1 p-[2px] rounded-sm ${selectedColor === color ? "border-gray-300" : "border-white"}`}>
              <div
                onClick={() => handleSizeChange("color", color)}
                className="w-6 h-6 rounded-sm"
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* QUANTITY SELECTION */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleQuantityChange("decrease")}
            type="button"
            title="decrease"
            className="cursor-pointer border-1 border-gray-300 p-1">
            <Minus className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increase")}
            type="button"
            title="increase"
            className="cursor-pointer border-1 border-gray-300 p-1">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* BUTTONS */}
      <button
        type="button"
        onClick={() => handleAddToCart("add")}
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium">
        <Plus className="w-4 h-4" />
        Add to Cart
      </button>
      <button
        type="button"
        onClick={() => handleAddToCart("buy")}
        className="ring-1 ring-gray-400 text-gray-800 px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium">
        <ShoppingCart className="w-4 h-4" />
        Buy Now
      </button>
    </div>
  );
};

export default ProductInteraction;
