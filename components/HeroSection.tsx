import { Button } from "@heroui/react";
import Image from "next/image";
import heroImage from "@/public/main.jpg";

export default function HeroSection() {
  const scrollToVisit = () => {
    document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-svh relative grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="max-w-xl">
          <h1 className="font-medium tracking-tight leading-tight text-[clamp(2.5rem,5vw+1rem,4rem)]" style={{ textWrap: "balance" }}>
            Quality menswear, a 40‑year promise.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-[55ch]" style={{ textWrap: "pretty" }}>
            Carefully selected clothing for the modern man. Visit our store in the heart of Patras.
          </p>
          <div className="mt-8 flex gap-4">
            <Button variant="primary" size="lg" onPress={scrollToVisit}>
              Visit Us
            </Button>
            <Button variant="secondary" size="lg" onPress={() => (window.location.href = "tel:+302610000000")}>
              Call
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 lg:relative lg:h-full">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={heroImage}
            alt="Stack of carefully folded men's wool sweaters and shirts"
            fill
            className="object-cover lg:rounded-none opacity-20 lg:opacity-100"
            style={{ outline: "1px solid hsla(0,0%,0%,0.1)", outlineOffset: "-1px" }}
          />
        </div>
      </div>
    </section>
  );
};

