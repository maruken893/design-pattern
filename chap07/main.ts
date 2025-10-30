import { Duck } from "./IDuck";
import { MallardDuck } from "./MallardDuck";
import { TurkeyAdapter } from "./TurkyAdapter";
import { WildTurkey } from "./WildTurky";

const testDuck = (duck: Duck) => {
  duck.quack();
  duck.fly();
}


const duck = new MallardDuck();
const turkey = new WildTurkey();
const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

console.log("Turkeyの出力：");
turkey.gobble();
turkey.fly();

console.log("\nDuckの出力");
testDuck(duck);

console.log("\nTurkeyAdapterの出力：");
testDuck(turkeyAdapter);