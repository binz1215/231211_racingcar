import { MissionUtils } from '@woowacourse/mission-utils';

const inputView = {
  async carName() {
    const car = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    return car;
  },

  async attemptTime() {
    const time = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return time;
  },
};

export { inputView };
