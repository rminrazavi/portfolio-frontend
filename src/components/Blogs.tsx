"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { GET_ARTICLES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";


export const Blogs = () => {
  const [hovered, setHovered] = useState<string | null>(null);
    const { data, loading, error } = useQuery(GET_ARTICLES);
  if (loading) return <Paragraph className='text-sm lg:text-base font-normal text-secondary max-w-xl mt-4'>Loading...</Paragraph>;
  if (error) return <Paragraph className='text-red-300 text-sm lg:text-base font-normal text-secondary max-w-xl mt-4'>error</Paragraph>;
  if (data.articles.data.length === 0)
    return <Paragraph className='text-sm lg:text-base font-normal text-secondary max-w-xl mt-4'>Nothing found !</Paragraph>;
  const blogs = data?.articles.data
  return (
    <div className="max-w-5xl mx-auto my-10">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.attributes.slug}
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Link
            key={`blog-${blog.attributes.title}`}
            href={`/blog/${blog.attributes.slug}`}
            className="relative my-10 block"
            onMouseEnter={() => setHovered(blog.attributes.slug)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence mode="wait">
              {hovered === blog.attributes.slug && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1.05,
                    scaleY: 1.2,
                  }}
                  exit={{
                    opacity: 0,

                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  className="absolute z-0 pointer-events-none bg-gray-50 inset-0 h-full w-full   rounded-md "
                />
              )}
            </AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20">
              <Image
                src={`http://localhost:1337${blog.attributes.image?.data.attributes.url}`}
                alt="thumbnail"
                height="200"
                width="200"
                objectFit="cover"
                className="rounded-md object-cover h-40 w-60"
              />
              <div className="flex flex-col col-span-3">
                <Heading className="text-lg md:text-lg lg:text-lg">
                  {blog.attributes.title}
                </Heading>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2">
                  {blog.attributes.description}
                </Paragraph>
                <div className="flex space-x-2 flex-wrap mt-4">
                  {blog.attributes.tags?.map((tag, index) => (
                    <span
                      key={`tag-${blog.attributes.slug}`}
                      className="text-xs px-1 py-0.5 text-secondary border border-neutral-200 bg-white rounded-md"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
