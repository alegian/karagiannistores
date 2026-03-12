export default function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-sm">Karagianni Stores</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Karagianni Stores. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
