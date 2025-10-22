import { QuackBehavior } from "./QuackBehavior";

class Squeak implements QuackBehavior {
  public quack(): void {
    console.log('キューキュー')
  }
}