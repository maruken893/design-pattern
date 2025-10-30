import { Duck } from "./IDuck";
import { Turkey } from "./ITurkey";

// DuckのインターフェースでTurkeyをWrapしてる
// 見た目はDuck、中身はTurkey
export class TurkeyAdapter implements Duck {
  constructor(private turkey: Turkey) {}

  public quack(): void {
    this.turkey.gobble();
  }

  public fly(): void {
    for(let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}