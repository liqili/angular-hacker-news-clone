export interface NewsItem {
  id: number;
  deleted: boolean;
  type: string;
  by: string;
  time: number;
  title: string;
  text: string;
  parent: number;
  kids: number[];
  url: string;
  score: number;
  descendants: number;
}

