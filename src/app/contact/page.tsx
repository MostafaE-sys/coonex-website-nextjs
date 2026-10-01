import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact — Coonex",
  description: "Tell us what you're trying to solve, build or connect.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-white py-14 lg:py-20">
          <Container width="narrow">
            <div className="text-center">
              <p className="text-label font-semibold uppercase tracking-wide text-yale">Contact</p>
              <h1 className="mt-3 text-balance text-h2 font-bold tracking-tight text-navy lg:text-h1">
                Let&apos;s talk about your business.
              </h1>
              <p className="mt-4 text-body-lg text-foreground-secondary">
                Tell us what you&apos;re trying to solve, build or connect.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-xl">
              <ContactForm />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
