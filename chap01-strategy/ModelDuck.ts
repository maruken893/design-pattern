import { Duck } from "./Duck";
import { FlyNoWay } from "./flyable/FlyNoWay";
import { Quack } from "./quackable/Quack";

export class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack());
  }

  public display(): void {
    console.log('模型のカモです')
  }
}