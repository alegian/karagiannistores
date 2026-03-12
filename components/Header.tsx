import { Dropdown, Label } from "@heroui/react";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAction = (key: React.Key) => {
    if (key === "about") scrollTo("about");
    else if (key === "visit") scrollTo("visit");
    else if (key === "call") window.location.href = "tel:+302610272049";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="font-serif text-lg font-medium tracking-tight">
          KARAGIANNI
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </button>
          <button onClick={() => scrollTo("visit")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Visit Us
          </button>
          <a href="tel:+302610272049" className="text-sm text-primary font-medium hover:text-primary/80 transition-colors">
            Call Us
          </a>
        </nav>

        <Dropdown >
          <Dropdown.Trigger className="md:hidden">
            <FiMenu />
          </Dropdown.Trigger>
          <Dropdown.Popover placement="bottom end">
            <Dropdown.Menu onAction={handleAction}>
              <Dropdown.Item id="about" textValue="About">
                <Label>About</Label>
              </Dropdown.Item>
              <Dropdown.Item id="visit" textValue="Visit Us">
                <Label>Visit Us</Label>
              </Dropdown.Item>
              <Dropdown.Item id="call" textValue="Call Us">
                <Label>Call Us</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      </div>
    </header>
  );
}
