export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
  readTime: string;
  tags: string[];
  coverUrl?: string;
}
