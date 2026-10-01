// LEGACY / UNUSED — superseded by proof.tsx (the current Proof/Outcomes
// section). Not imported anywhere. Do not reuse as current Coonex content.
import { ImageOff } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies-data";
import { TESTIMONIALS } from "@/lib/testimonials-data";

function StoryCard({ study, featured = false }: { study: CaseStudy; featured?: boolean }) {
  return (
    <article>
      <div
        className={`group overflow-hidden rounded-md border border-white/10 bg-navy-hover ${
          featured ? "aspect-[4/3]" : "aspect-[16/9]"
        }`}
      >
        {/* TODO: COONEX CASE STUDY IMAGE — replace with real manufacturing photography */}
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/60 transition-transform duration-200 group-hover:scale-105">
          <ImageOff aria-hidden="true" size={featured ? 32 : 24} />
          <span className="text-caption">TODO: COONEX CASE STUDY IMAGE</span>
        </div>
      </div>
      <p className="mt-4 text-label font-semibold uppercase tracking-wide text-white/60">
        {study.industry}
      </p>
      <h3 className={`mt-1.5 font-bold text-white ${featured ? "text-h3" : "text-h4"}`}>
        {study.title}
      </h3>
      <p className="mt-1.5 text-body-sm text-white/70">{study.result}</p>
    </article>
  );
}

export function CustomerStories() {
  const featuredStory = CASE_STUDIES.find((s) => s.featured) ?? CASE_STUDIES[0];
  const supportingStories = CASE_STUDIES.filter((s) => s !== featuredStory);

  return (
    <section className="bg-navy py-16 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-h2 font-bold text-white">
            Real projects, sourced through Coonex
          </h2>
          <p className="mt-3 text-body-lg text-white/70">
            A look at manufacturing work delivered through our partner network.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <StoryCard study={featuredStory} featured />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
            {supportingStories.map((story) => (
              <StoryCard key={story.id} study={story} />
            ))}
          </div>
        </div>

        <div className="mt-14 min-w-0 border-t border-white/15 pt-10 lg:mt-16">
          <div className="flex min-w-0 gap-6 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 lg:grid-cols-4">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-64 shrink-0 snap-start md:w-auto md:shrink"
              >
                <p className="text-body-sm text-white/80">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-3 text-body-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-caption text-white/60">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
