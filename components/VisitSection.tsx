import { Card } from "@heroui/react";
import { FiMapPin, FiClock, FiPhone } from "react-icons/fi";
import Image from "next/image";
import storeExterior from "@/public/shop-window.jpg";

function VisitCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <Card variant="default">
      <Card.Header className="flex-row items-center gap-3">
        <Icon size={18} />
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Content>{children}</Card.Content>
    </Card>
  );
}

export default function VisitSection() {
  return (
    <section id="visit" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-medium tracking-tight text-[clamp(1.8rem,4vw,2.5rem)] mb-12" style={{ textWrap: "balance" }}>
          Visit our store.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <VisitCard icon={FiMapPin} title="Address">
              <p>Μαιζώνος 115</p>
              <p>Πάτρα 262 21, Ελλάδα</p>
            </VisitCard>

            <VisitCard icon={FiClock} title="Hours">
              <p>Δευ, Τετ: 9:00 – 14:30</p>
              <p>Τρι, Πεμ, Παρ: 9:00 – 14:00, 17:30 - 21:00</p>
              <p>Σάβ: 9:00 – 15:00</p>
            </VisitCard>

            <VisitCard icon={FiPhone} title="Contact">
              <p>
                <a href="tel:+302610272049" className="text-foreground hover:text-primary transition-colors">
                  +30 2610 272049
                </a>
              </p>
              <p>
                <a href="mailto:lena.haskari@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  lena.haskari@gmail.com
                </a>
              </p>
            </VisitCard>
        </div>

        <div className="rounded-xl overflow-hidden shadow-[0_0_0_1px_hsl(var(--border))] mb-12">
          <iframe
            title="Karagianni Stores location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d584.9345662597962!2d21.73509462516562!3d38.24693631118927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e49f9919ad979%3A0x657345fd95671c2e!2sKARAGIANNI!5e0!3m2!1sen!2sgr!4v1773304135475!5m2!1sen!2sgr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>

        <div className="rounded-xl overflow-hidden">
          <Image
            src={storeExterior}
            alt="Exterior of Karagianni Stores in Patras, Greece"
            width={storeExterior.width}
            height={storeExterior.height}
            className="w-full h-auto rounded-lg"
            style={{ outline: "1px solid hsla(0,0%,0%,0.1)", outlineOffset: "-1px" }}
          />
        </div>
      </div>
    </section>
  );
};

