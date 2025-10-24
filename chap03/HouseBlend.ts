import { Beverage } from "./Beverage";

export class HouseBlend extends Beverage {
  constructor() {
    super('ハウスブレンドコーヒー');
  }

  public cost() {
    return 0.89;
  }
}