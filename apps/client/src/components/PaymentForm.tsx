import { PaymentFormInputs, paymentFormSchma } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { set } from "zod";

const PaymentForm = ({
  setPaymentForm,
  paymentForm,
}: {
  setPaymentForm: (data: PaymentFormInputs) => void;
  paymentForm: PaymentFormInputs;
}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({ resolver: zodResolver(paymentFormSchma) });

  const handleSPaymentForm: SubmitHandler<PaymentFormInputs> = (
    data: PaymentFormInputs
  ) => {
    setPaymentForm(data);
    router.push("/cart?step=4", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleSPaymentForm)}>
      {/** CARD HOLDER */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-sm font-medium text-gray-500">
          Name on card
        </label>
        <input
          type="text"
          id="cardHolder"
          placeholder="John Doe"
          value={paymentForm?.cardHolder}
          {...register("cardHolder")}
          className="border-b border-gray-200 py-2 outline-none text-sm px-1"
        />
        {errors.cardHolder && (
          <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>

      {/** CARD NUMBER */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-sm font-medium text-gray-500">
          Card Number
        </label>
        <input
          type="number"
          id="cardNumber"
          placeholder="1234567890123456"
          value={paymentForm?.cardNumber}
          {...register("cardNumber")}
          className="border-b border-gray-200 py-2 outline-none text-sm px-1"
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      {/** EXPIRATION */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-sm font-medium text-gray-500">
          Expiration Date
        </label>
        <input
          type="text"
          id="expirationDate"
          placeholder="01/32"
          value={paymentForm?.expirationDate}
          {...register("expirationDate")}
          className="border-b border-gray-200 py-2 outline-none text-sm px-1"
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-500">
            {errors.expirationDate.message}
          </p>
        )}
      </div>

      {/** CVV */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-sm font-medium text-gray-500">
          CVV
        </label>
        <input
          type="number"
          id="cvv"
          placeholder="123"
          value={paymentForm?.cvv}
          {...register("cvv")}
          className="border-b border-gray-200 py-2 outline-none text-sm px-1"
        />
        {errors.cvv && (
          <p className="text-xs text-red-500">{errors.cvv.message}</p>
        )}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/klarna.png"
          width={50}
          height={25}
          alt="klarna"
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          width={50}
          height={25}
          alt="cards"
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          width={50}
          height={25}
          alt="stripe"
          className="rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
};

export default PaymentForm;
