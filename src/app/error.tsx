"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";

// Deliberately self-contained (no Header/Footer): this boundary must still
// render correctly even if the error originated in shared layout code.
export default function GlobalErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[error-boundary]", error.digest || error.message);
  }, [error]);

  return (
    <main id="main-content" className="flex min-h-screen items-center bg-white py-24">
      <Container width="narrow" className="text-center">
        <p className="text-label font-semibold uppercase tracking-wide text-yale">Error</p>
        <h1 className="mt-3 text-balance text-h2 font-bold tracking-tight text-navy">
          Something went wrong.
        </h1>
        <p className="mt-4 text-body-lg text-foreground-secondary">
          An unexpected error occurred. You can try again, or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button onClick={reset} size="md">
            Try again
          </Button>
          <TextLink href="/">Back to Home</TextLink>
        </div>
      </Container>
    </main>
  );
}
