export interface Book {
  id: number;
  title: string;
  author: string;
  category: string[];
  image: string;
  summary: string;
  fullSummary?: string;

  isNew?: boolean;
  isFeatured?: boolean;

  amazonLink?: string;
  kindleLink?: string;
  googleBooksLink?: string;

  highlighted?: boolean;
  showPopup?: boolean;
}
