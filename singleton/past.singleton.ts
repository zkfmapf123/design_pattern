class UniqueInstance {
  constructor() {
    console.log("i am unique");
  }

  sayMyName() {
    console.log("leedongyu");
  }
}

export class PastSingleton {
  private static uniqueInstance: UniqueInstance;

  // private
  private constructor() {}

  /**
   * 인스턴스가 필요한 상황이 닥치기 전까지
   * 아예 인스턴스를 생성하지 않는다 -> 게으른 인스턴스 생성 (lazy)
   */
  static getInstance() {
    if (this.uniqueInstance === null || this.uniqueInstance === undefined) {
      this.uniqueInstance = new UniqueInstance();
    }

    return this.uniqueInstance;
  }
}

/**
 * 사용되는 경우
 * - 자원을 많이 잡아먹는 경우
 * -
 */
