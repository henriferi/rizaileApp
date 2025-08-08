export interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  active: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}