export interface CaseStudy {
  id: string;
  company: string;
  logo: string;
  description: string;
  image: string;
  results: {
    title: string;
    stats: string;
    description: string;
  };
}
