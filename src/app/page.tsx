import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { LinkPreview } from "@/components/LinkPreview";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Armin</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a {""}
        senior <Highlight>web developer</Highlight>, living in Tehran.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Frontend Developer at{" "}
        <LinkPreview
          url="https://PinoWeb.ir"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          PinoWeb
        </LinkPreview>{" "}
        | Expert in <Highlight>TypeScript</Highlight> and{" "}
        <Highlight>Next.js</Highlight>
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Join me on{" "}
        <LinkPreview
          url="https://x.com/arminrazavi"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          X
        </LinkPreview>{" "}
        and see my projects on{" "}
        <LinkPreview
          url="https://github.com/rminrazavi"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          GitHub
        </LinkPreview>{" "}
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
