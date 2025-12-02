import type { Card } from "./Card";


export interface Column {
  id: string;
  name: string;
  cards: Card[];
}