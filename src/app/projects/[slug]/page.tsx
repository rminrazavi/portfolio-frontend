"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { SingleProduct } from "@/components/Product";
import { Products } from "@/components/Products";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { GET_PRODUCT } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { slug: params.slug },
  });
  const product = data?.products.data[0].attributes;
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Armin Razavi",
      description:
        "Armin Razavi is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    };
  }
}

export default function SingleProjectPage({ params }: Props) {
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { slug: params.slug },
  });
  const product = data?.products.data[0].attributes;
  if (loading) return <p>loading</p>;
  if (!data) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
