export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  result: string;
  featured?: boolean;
}

export interface ProofMetric {
  value: string;
  label: string;
}

export interface ProofTestimonial {
  quote: string;
  name: string;
  role: string;
}

// TODO: REAL CONTENT REQUIRED — populate once verified case studies, a
// verified metric, or a verified testimonial exist. Never invent customers,
// results, percentages, or quotes. The Proof section renders nothing on the
// homepage until CASE_STUDIES has at least one entry.
export const CASE_STUDIES: CaseStudy[] = [];
export const PROOF_METRIC: ProofMetric | null = null;
export const TESTIMONIALS: ProofTestimonial[] = [];
