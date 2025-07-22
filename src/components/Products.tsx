"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion, useMotionTemplate } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/graphql/queries";

export const Products = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  if (loading) return <Paragraph className='text-sm lg:text-base font-normal text-secondary max-w-xl mt-4'>Loading...</Paragraph>;
  if (error) return <Paragraph className='text-red-300 text-sm lg:text-base font-normal text-secondary max-w-xl mt-4'>error</Paragraph>;
  if (data.products.data.length === 0)
    return <Paragraph className='text-sm lg:text-base font-normal text-secondary max-w-xl mt-4'>Nothing found !</Paragraph>;
  return (
    <div>
      <div className="grid grid-cols-1  gap-10">
        {data?.products.data.map((product: any, idx: number) => (
          <motion.div
            key={product.id}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={
                product.attributes.slug
                  ? `/projects/${product.attributes.slug}`
                  : product.attributes.href
              }
              key={product.id}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            >
              <Image
                src={`http://localhost:1337${product.attributes.thumbnail?.data.attributes.url}`}
                alt="thumbnail"
                height="200"
                width="200"
                className="rounded-md"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg "
                  >
                    {product.attributes.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {product.attributes.description}
                  </Paragraph>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {product.attributes.stack?.map((stack: any) => (
                    <span
                      key={stack.name}
                      className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                    >
                      {stack.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
