import type { Card } from "./Card";


export interface ActiveCard extends Card {
  columnId: string;
  cardIndex: number;
}