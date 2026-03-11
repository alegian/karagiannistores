'use client';

import {Button, Card, Surface} from '@heroui/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <header className="mb-12">
        <h1 className="font-serif text-4xl text-foreground">KARAGIANNI</h1>
        <p className="mt-2 font-sans text-muted">
          Design system demo
        </p>
      </header>

      <section className="mb-10">
        <h2 className="font-serif text-2xl text-foreground mb-4">Typography</h2>
        <div className="flex flex-col gap-2 font-sans text-foreground">
          <p className="text-lg">Body: DM Sans — clean, refined.</p>
          <p className="font-serif text-xl text-foreground">
            Headings: Cormorant Garamond
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-2xl text-foreground mb-4">Surfaces</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center gap-2">
            <Surface className="w-32 h-24 rounded-lg border border-border" />
            <span className="font-sans text-sm text-muted">surface</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Surface variant="secondary" className="w-32 h-24 rounded-lg border border-border" />
            <span className="font-sans text-sm text-muted">surface secondary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Surface variant="tertiary" className="w-32 h-24 rounded-lg border border-border" />
            <span className="font-sans text-sm text-muted">surface tertiary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-32 h-24 rounded-lg bg-canvas border border-border" />
            <span className="font-sans text-sm text-muted">canvas</span>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-2xl text-foreground mb-4">Palette</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg bg-wood" />
            <span className="font-sans text-sm text-muted">wood</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg bg-wood-muted" />
            <span className="font-sans text-sm text-muted">wood-muted</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg bg-navy" />
            <span className="font-sans text-sm text-muted">navy</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg bg-slate" />
            <span className="font-sans text-sm text-muted">slate</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg bg-sage" />
            <span className="font-sans text-sm text-muted">sage</span>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-2xl text-foreground mb-4">Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Outline</Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-2xl text-foreground mb-4">Card</h2>
        <Card variant="secondary" className="min-w-[18rem] max-w-sm">
          <Card.Header>
            <Card.Title className="font-serif text-xl">Card title</Card.Title>
            <Card.Description className="font-sans text-muted">
              Surface, border, radius and shadow from the design system.
            </Card.Description>
          </Card.Header>
        </Card>
      </section>
    </div>
  );
}
