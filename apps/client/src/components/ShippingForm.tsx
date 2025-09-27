import { ShippingFormInputs, shippingFormSchma } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const ShippingForm = ({
  setShippingForm,
  shippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
  shippingForm: ShippingFormInputs;
}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({ resolver: zodResolver(shippingFormSchma) });

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (
    data: ShippingFormInputs
  ) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}>
      {/** NAME */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-500">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          value={shippingForm?.name}
          {...register("name")}
          className="border-b border-gray-200 py-2 outline-none text-sm px-1"
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/** EMAIL */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-500">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="JohnDoe@gmail.com"
          value={shippingForm?.email}
          {...register("email")}
          className="border-b border-gray-200 py-2 outline-none text-sm px-1"
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/** PHONE */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-500">
          Phone
        </label>
        <input
          type="number"
          id="phone"
          placeholder="234567890"
          value={shippingForm?.phone}
          {...register("phone")}
          className="border-b border-gray-200 py-2 outline-none text-sm px-1"
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/** ADDRESS */}
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-sm font-medium text-gray-500">
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="123 Aids, USA"
          value={shippingForm?.address}
          {...register("address")}
          className="border-b border-gray-200 py-2 outline-none text-sm px-1"
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>

      {/** CITY */}
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-sm font-medium text-gray-500">
          city
        </label>
        <input
          type="text"
          id="city"
          placeholder="New York"
          value={shippingForm?.city}
          {...register("city")}
          className="border-b border-gray-200 py-2 outline-none text-sm px-1"
        />
        {errors.city && (
          <p className="text-xs text-red-500">{errors.city.message}</p>
        )}
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

export default ShippingForm;
