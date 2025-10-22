import { Duck } from "./Duck";
import { FlyWithWings } from "./flyable/FlyWIthWIngs";
import { Quack } from "./quackable/Quack";


export class MallardDuck extends Duck {
  constructor() {

    super(new FlyWithWings(), new Quack());
  }

  public display(): void {
    console.log('私は本物のマガモです。')
  }
}