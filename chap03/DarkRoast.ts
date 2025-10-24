import { Beverage } from "./Beverage";

export class DarkRoast extends Beverage {
  constructor() {
    super('ダークロースト');
  }

  public cost(): number {
    return 2.5;
  }
}