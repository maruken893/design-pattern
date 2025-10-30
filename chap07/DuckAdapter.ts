import { Duck } from "./IDuck";
import { Turkey } from "./ITurkey";

export class DuckAdapter implements Turkey {
  constructor(private duck: Duck) {}

  public gobble(): void {
    this.duck.quack();
  }

  public fly(): void {
    this.duck.fly();
  }
}