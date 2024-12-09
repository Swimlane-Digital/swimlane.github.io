export interface Testimonial {
  id: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
  content: string;
}
