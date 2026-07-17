export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  videoUrl?: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
}
