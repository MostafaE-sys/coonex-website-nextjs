import { Container } from "@/components/ui/container";

interface SolutionProblemProps {
  heading: string;
  body: string;
}

export function SolutionProblem({ heading, body }: SolutionProblemProps) {
  return (
    <section className="bg-white py-10 lg:py-14">
      <Container width="narrow">
        <h2 className="text-h3 font-bold text-navy">{heading}</h2>
        <p className="mt-3 text-body-lg text-foreground-secondary">{body}</p>
      </Container>
    </section>
  );
}
