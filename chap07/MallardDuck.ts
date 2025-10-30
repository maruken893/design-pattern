import { Duck } from "./IDuck";

export class MallardDuck implements Duck {
  public quack() {
    console.log("ガーガー");
  }

  public fly() {
    console.log("飛んでいます");
  }
}