import { Turkey } from "./ITurkey";

export class WildTurkey implements Turkey {
  public gobble(): void {
    console.log("ゴロゴロ");
  }

  public fly(): void {
    console.log("短い距離を飛んでいます");
  }
}