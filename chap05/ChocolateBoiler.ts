export class ChocolateBoiler {
  private empty: boolean = false;
  private boiled: boolean = false;
  private static chocolateBoiler: ChocolateBoiler | null;

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  public static getInstance() {
    if (this.chocolateBoiler === null) {
      this.chocolateBoiler = new ChocolateBoiler();
    }

    return this.chocolateBoiler;
  }

  public fill() {
    if (this.isEmpty()) {
      this.empty = true;
      this.boiled = false;
      // 牛乳とチョコレートの混合液でボイラーを満たす
    }
  }

  public drain() {
    if (!this.isEmpty() && this.isBoiled()) {
      // 溶けた牛乳とチョコレートの混合液を空にする
      this.empty = true;
    }
  }

  public boil() {
    if (!this.isEmpty() && !this.isBoiled()) {
      // 中身を溶かす
      this.boiled = true;
    }
  }

  public isEmpty() {
    return this.empty;
  }

  public isBoiled() {
    return this.boiled;
  }
}