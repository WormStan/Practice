import { HeroInter } from "./hero-inter";

export class Hero implements HeroInter {
  constructor(id: number, name: string, result: string, vp_log: any[]) {}

  id: number;
  name: string;
  result: string;
  vp_log: any[];
}
