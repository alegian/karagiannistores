export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
        <p className="font-serif text-sm">Karagianni Stores</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Karagianni Stores. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
