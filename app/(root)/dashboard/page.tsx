"use client";
import FilterLinks from "@/components/ui/filterlinks";
import Headers from "@/components/ui/headers";
import ProductGrid from "@/components/ui/productgrid";
import SearchBtn from "@/components/ui/searchbtn";
import staticlist from "@/constants/staticlist";
import { cn } from "@/lib/utils";
import { UseDashboardStore } from "@/store/dashboardstore";
import React from "react";

const page = () => {
  const { products, updateProducts, filterProducts } = UseDashboardStore(
    (state) => ({
      products: state.products,
      updateProducts: state.updateProducts,
      filterProducts: state.filterProducts,
    })
  );

  return (
    <section className="mt-2 md:w-[80%] md:mx-auto ">
      <Headers
        className="mt-5"
        content="We have the best kente product that suits your tastes"
        contentClass="max-w-sm md:max-w-lg text-2xl font-bold  p-2 md:p-0"
        subcontent=""
        subcontentClass=""
      />
      <article className="my-5">
        <SearchBtn className="w-full md:flex  p-2 md:py-2 md:px-0 " />
      </article>
      <article className=" w-full mt-2">
        <FilterLinks
          className="w-full  grid grid-cols-4  md:grid-cols-8 items-center  "
          filterProducts={filterProducts}
          filters={staticlist.filterlist}
        />
      </article>
      <ProductGrid products={products} />
    </section>
  );
};

export default page;
