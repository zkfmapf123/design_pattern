/**
 * 멀티스레딩 환경에선
 * 싱글턴이 2개로 작용이 되는 경우가 발생한다 (시간차)
 */

class UniqueInstance {
  constructor() {
    console.log("i am unique");
  }

  sayMyName() {
    console.log("leedonggyu");
  }
}

export class MultiThreaingSingleton {
  private static uniqueInstnace: UniqueInstance = new UniqueInstance();

  private constructor() {}

  // synchronized
  static getInstance() {
    if (this.uniqueInstnace === undefined || this.uniqueInstnace === null) {
      return new UniqueInstance();
    }

    return this.uniqueInstnace;
  }
}

/**
 * 멀티스레딩환경에서는 -> 동기화를 설정해야 한다
 * 동기화 설정 시 -> 오버헤드 크다
 *
 * solution
 * 1. 속도가 그리 중요하지 않다면 그냥 둔다.
 * 2. 인스턴스가 필요하다면 처음부터 만든다. (current version)
 */
