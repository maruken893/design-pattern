import { Espresso } from "./Espresso";
import { HouseBlend } from "./HouseBlend";
import { Mocha } from "./Mocha";
import { Whip } from "./Whip";

const beverage = new Espresso();
console.log(`${beverage.getDescription()} $${beverage.cost()}`)

let beverage2 = new HouseBlend();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);

console.log(`${beverage2.getDescription()} $${beverage2.cost()}`)