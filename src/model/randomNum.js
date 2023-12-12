import { MissionUtils } from '@woowacourse/mission-utils';

class RandomGo {
  #random;

  constructor() {
    this.#random = this.#isGo();
  }

  #randomNum() {
    const random = MissionUtils.Random.pickNumberInRange(0, 9);

    return random;
  }

  #isGo() {
    const randomNum = this.#randomNum();

    if (randomNum >= 4) {
      return 1;
    }
    return 0;
  }

  getRandom() {
    return this.#random;
  }
}

export default RandomGo;

// const random = new RandomGo();
// const go = random.getRandom();
// console.log(go);
