import { Beverage } from "./Beverage";

export abstract class CondimentDecorator extends Beverage {
  constructor(protected beverage: Beverage) {
    super();
  }
  abstract getDescription(): string;
}