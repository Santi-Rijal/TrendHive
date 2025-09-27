import { CartItemsType, PaymentFormInputs, ShippingFormInputs } from "@/types";
import React from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const OrderReview = ({
  shippingForm,
  paymentForm,
  cartItems,
}: {
  shippingForm: ShippingFormInputs;
  paymentForm: PaymentFormInputs;
  cartItems: CartItemsType;
}) => {
  return (
    <div className="flex flex-col gap-8">
      {/** ORDER ITEMS */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-lg font-medium mb-2">Order Items</h2>
          <Link href="/cart" className="text-red-500 text-sm hover:underline">
            Edit
          </Link>
        </div>
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-4 max-h-60 overflow-y-auto">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b border-gray-200 pb-4">
              <div className="relative w-10 h-10 bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src={item.images[item.selectedColor] || "/fallback-image.png"}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-xs text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
              <p className="text-sm font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/** SHIPPING INFO */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-lg font-medium mb-2">Shipping Information</h2>
          <Link
            href="/cart?step=2"
            className="text-red-500 text-sm hover:underline">
            Edit
          </Link>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg flex flex-col gap-2">
          <p className="text-sm">
            <span className="font-medium">Name:</span> {shippingForm.name}
          </p>
          <p className="text-sm">
            <span className="font-medium">Email:</span> {shippingForm.email}
          </p>
          <p className="text-sm">
            <span className="font-medium">Phone:</span> {shippingForm.phone}
          </p>
          <p className="text-sm">
            <span className="font-medium">Address:</span> {shippingForm.address}
          </p>
          <p className="text-sm">
            <span className="font-medium">City:</span> {shippingForm.city}
          </p>
        </div>
      </div>

      {/** PAYMENT INFO */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-lg font-medium mb-2">Payment Information</h2>
          <Link
            href="/cart?step=3"
            className="text-red-500 text-sm hover:underline">
            Edit
          </Link>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg flex flex-col gap-2">
          <p className="text-sm">
            <span className="font-medium">Card Holder:</span>{" "}
            {paymentForm.cardHolder}
          </p>
          <p className="text-sm">
            <span className="font-medium">Card Number:</span> **** **** ****{" "}
            {paymentForm.cardNumber.slice(-4)}
          </p>
          <p className="text-sm">
            <span className="font-medium">Expiry Date:</span>{" "}
            {paymentForm.expirationDate}
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
        Checkout
        <ShoppingCart className="w-3 h-3" />
      </button>
    </div>
  );
};

export default OrderReview;
