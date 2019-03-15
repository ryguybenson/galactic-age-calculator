

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
  mercuryLifeChecker() {
    let age = this.age;
    const mercury = 0.24;
    let answer = (age * mercury);
    let expected = this.expected;
    let remaining = (expected - answer);
    return remaining;
  }

  venusChecker() {
    let age = this.age;
    const venus = 0.62;
    let answer = (age * venus);
    return answer;
  }
  venusLifeChecker() {
    let age = this.age;
    const mercury = 0.62;
    let answer = (age * mercury);
    let expected = this.expected;
    let remaining = (expected - answer);
    return remaining;
  }
  marsChecker() {
    let age = this.age;
    const mars = 1.88;
    let answer =  (age * mars);
    return answer;
  }
  marsLifeChecker() {
    let age = this.age;
    const mercury = 1.88;
    let answer = (age * mercury);
    let expected = this.expected;
    let remaining = (expected - answer);
    return remaining;
  }
  jupiterChecker() {
    let age = this.age;
    const jupiter = 11.86;
    let answer =  (age * jupiter);
    return answer;
  }
  jupiterLifeChecker() {
    let age = this.age;
    const mercury = 11.86;
    let answer = (age * mercury);
    let expected = this.expected;
    let remaining = (expected - answer);
    return remaining;
  }
  //PLANET LIFE EXPECTANCY FUNCTIONS


}
