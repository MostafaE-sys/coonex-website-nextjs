import Link from "next/link";
import { Container } from "@/components/ui/container";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="border-b border-border">
        <Container>
          <div className="flex h-[76px] items-center justify-between gap-8">
            {/* TODO: REAL CONTENT REQUIRED — replace text wordmark with final logo asset */}
            <Link
              href="/"
              className="text-h3 font-bold tracking-tight text-navy"
              aria-label="Coonex home"
            >
              Coonex
            </Link>

            <DesktopNav />

            <div className="flex items-center gap-5">
              <div className="hidden md:block">
                <Button href="/contact" size="sm" withArrow>
                  Talk to Coonex
                </Button>
              </div>
              <MobileNav />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
