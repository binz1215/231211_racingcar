import { inputView } from '../view/inputView.js';

class Valid {
  // #car;

  // #times;

  // constructor() {
  //  this.#car = inputView.carName();
  //  this.#times = inputView.attemptTime();
  // }

  async validateCar() {
    const car = await inputView.carName();
    const eachCar = car.split(',');
    this.#validateLength(eachCar);
    this.#validateDuple(eachCar);

    return car;
  }

  async validateTime() {
    let time = await inputView.attemptTime();
    time = this.#validateNumber(time);

    return time;
  }

  /**
   *
   * @param {Array} car
   */
  #validateLength(car) {
    if (!car.every((name) => name.length <= 5 && name.length > 0)) {
      throw new Error(`[ERROR] 이름은 5자 이하만 가능합니다.`);
    }
  }

  #validateDuple(car) {
    const carSet = new Set(car);
    if (car.length !== carSet.size) {
      throw new Error(`[ERROR] 중복되는 이름은 사용할 수 없습니다.`);
    }
  }

  #validateNumber(time) {
    const timeNum = Number(time);
    if (Number.isNaN(timeNum) || timeNum < 1) {
      throw new Error(`[ERROR] 유효한 숫자형태가 아닙니다.`);
    }

    return timeNum;
  }
}

export default Valid;

// const valid = new Valid();
/// / valid.validateCar();
// valid.validateTime();
