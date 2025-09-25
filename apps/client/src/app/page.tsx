import Categories from "@/components/Categories";
import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category || "all";

  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image
          src="/featured.png"
          alt="Featured"
          fill
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;
