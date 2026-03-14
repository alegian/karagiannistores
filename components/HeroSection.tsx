import {Button} from '@heroui/react';
import Image from 'next/image';
import heroImage from '@/public/main.jpg';

export default function HeroSection() {
  const scrollToVisit = () => {
    document.getElementById('visit')?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section
      id="hero"
      className="relative grid min-h-svh grid-cols-1 items-center lg:grid-cols-2"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-0">
        <div className="max-w-xl">
          <h1
            className="text-[clamp(2.5rem,5vw+1rem,4rem)] leading-tight font-medium tracking-tight"
            style={{textWrap: 'balance'}}
          >
            Quality menswear, a 40‑year promise.
          </h1>
          <p
            className="mt-6 max-w-[55ch] text-base leading-relaxed text-muted-foreground"
            style={{textWrap: 'pretty'}}
          >
            Carefully selected clothing for the modern man. Visit our store in
            the heart of Patras.
          </p>
          <div className="mt-8 flex gap-4">
            <Button variant="primary" size="lg" onPress={scrollToVisit}>
              Visit Us
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onPress={() => (window.location.href = 'tel:+302610272049')}
            >
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
            className="object-cover opacity-20 lg:rounded-none lg:opacity-100"
            style={{
              outline: '1px solid hsla(0,0%,0%,0.1)',
              outlineOffset: '-1px',
            }}
          />
        </div>
      </div>
    </section>
  );
}
