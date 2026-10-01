// LEGACY / UNUSED — generic announcement-bar scaffold from an earlier phase,
// never wired into layout.tsx or header.tsx. Not imported anywhere; kept for
// reference only. No real announcement copy has ever been confirmed.
import { Container } from "@/components/ui/container";
export function AnnouncementBar() {
  return (
    <div className="bg-navy text-white">
      <Container>
        <p className="flex flex-wrap items-center justify-center gap-x-1 py-2 text-center text-caption font-medium tracking-wide sm:text-body-sm">
          <span>TODO: REAL ANNOUNCEMENT COPY</span>
          <a
            href="/contact"
            className="whitespace-nowrap underline underline-offset-2 hover:text-orange focus-visible:outline-white"
          >
            — Talk to our team
          </a>
        </p>
      </Container>
    </div>
  );
}
