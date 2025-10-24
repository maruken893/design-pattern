import { Beverage } from "./Beverage";

export class Espresso extends Beverage {
  constructor() {
    super('エスプレッソ');
  }

  public cost() {
    return 1.99;
  }
}