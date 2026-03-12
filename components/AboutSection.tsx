import Image from "next/image";
import storeInterior from "@/public/reverse.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-xl overflow-hidden">
              <Image
                src={storeInterior}
                alt="Interior of Karagianni Stores menswear boutique in Patras"
                width={storeInterior.width}
                height={storeInterior.height}
                className="w-full h-auto rounded-lg"
                style={{ outline: "1px solid hsla(0,0%,0%,0.1)", outlineOffset: "-1px" }}
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="font-medium tracking-tight text-[clamp(1.8rem,4vw,2.5rem)]" style={{ textWrap: "balance" }}>
              40 years of trust, in the heart of Patras.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-[65ch]" style={{ textWrap: "pretty" }}>
              Since 1984, Karagianni Stores has been a landmark for men's fashion in Patras. We hand‑pick every piece—from everyday essentials to refined tailoring—so you don't have to compromise between quality and price.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-[65ch]" style={{ textWrap: "pretty" }}>
              We believe great clothing should be accessible. Walk in, try it on, and leave looking your best. That's been our promise for four decades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

