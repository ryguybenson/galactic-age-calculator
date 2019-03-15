
export class Age {

  constructor(age){
    this.age = age;
    this.expected = 80;
  }
//PLANET AGE CALCULATOR FUNCTIONS
  mercuryChecker() {
    let age = this.age;
    const mercury = 0.24;
    let answer = (age * mercury);
    return answer;
  }
  venusChecker() {
    let age = this.age;
    const venus = 0.62;
    let answer = (age * venus);
    return answer;
  }
  marsChecker() {
    let age = this.age;
    const mars = 1.88;
    let answer =  (age * mars);
    return answer;
  }
  jupiterChecker() {
    let age = this.age;
    const jupiter = 11.86;
    let answer =  (age * jupiter);
    return answer;
  }

  //PLANET LIFE EXPECTANCY FUNCTIONS
  mercuryLifeChecker() {
    let age = this.age;
    const mercury = 0.24;
    const answer = (age * mercury);
    const expected = this.expected;

    if (answer < expected) {
      let remaining = (expected - answer);
      return remaining;
    } else {
      let remaining = (answer - expected);
      return remaining;
    }
  }
  venusLifeChecker() {
    let age = this.age;
    const mercury = 0.62;
    const answer = (age * mercury);
    const expected = this.expected;

    if (answer < expected) {
      let remaining = (expected - answer);
      return remaining;
    } else {
      let remaining = (answer - expected);
      return remaining;
    }
  }
  marsLifeChecker() {
    let age = this.age;
    const mercury = 1.88;
    const answer = (age * mercury);
    const expected = this.expected;

    if (answer < expected) {
      let remaining = (expected - answer);
      return remaining;
    } else {
      let remaining = (answer - expected);
      return remaining;
    }
  }
  jupiterLifeChecker() {
    let age = this.age;
    const mercury = 11.86;
    const answer = (age * mercury);
    const expected = this.expected;

    if (answer < expected) {
      let remaining = (expected - answer);
      return remaining;

    } else {
      let remaining = (answer - expected);
      return remaining;
    }
  }

}
