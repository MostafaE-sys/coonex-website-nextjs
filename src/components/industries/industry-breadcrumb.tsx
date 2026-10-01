import Link from "next/link";
import { Container } from "@/components/ui/container";

export function IndustryBreadcrumb({ name }: { name: string }) {
  return (
    <div className="border-b border-border-subtle bg-white py-4">
      <Container width="narrow">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-body-sm text-foreground-muted">
          <Link href="/industries" className="hover:text-navy">
            Industries
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground-secondary" aria-current="page">
            {name}
          </span>
        </nav>
      </Container>
    </div>
  );
}
