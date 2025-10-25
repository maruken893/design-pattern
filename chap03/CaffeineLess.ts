import { Beverage } from "./Beverage";

export class CaffeineLess extends Beverage {
  constructor() {
    super('カフェインレス');
  }

  public cost(): number {
    return 1.05;
  }
}