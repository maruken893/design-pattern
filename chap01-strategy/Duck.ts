import { FlyBehavior } from "./flyable/FlyBehavior"
import { QuackBehavior } from "./quackable/QuackBehavior";

export abstract class Duck {
  constructor(private flyBehavior: FlyBehavior, private quackBehavior: QuackBehavior) { }

  public abstract display(): void;

  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }

  public performFly() {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public swim(): void {
    console.log("すべてのカモは浮きます。おとりのかもでも！")
  }
}