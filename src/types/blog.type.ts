export interface IBlogCategory {
  label: string;
  count: number;
}

export interface IBlogContentBlock {
  type: "heading" | "subheading" | "paragraph" | "list" | "orderedList" | "quote";
  text?: string;
  items?: string[];
  quoteAuthor?: string;
  linkText?: string;
  linkHref?: string;
  textAfter?: string;
}

export interface IBlogComment {
  name: string;
  img: string;
  date: string;
  text: string;
}

export interface IBlogTagItem {
  label: string;
  color: string;
}

export interface IBlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  author: string;
  authorImg: string;
  authorRole?: string;
  img: string;
  readTime?: string;
  views?: string;
  content?: IBlogContentBlock[];
  tags?: IBlogTagItem[];
  comments?: IBlogComment[];
}

export interface IPopularPost {
  title: string;
  views: string;
  img: string;
}

export interface IBlogTag {
  label: string;
  color: string;
}