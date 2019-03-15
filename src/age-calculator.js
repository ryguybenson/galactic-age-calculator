export class Age {
  constructor(month, day, year) {
    this.date = new Date();
    this.birth = new Date(month, day, year);
    this.earth = this.date - this.birth;
    this.venusAge = venusAge();
    this.jupiterAge = jupiterAge();
    this.mercuryAge = mercuryAge();
    this.marsAge = marsAge();
  }
  difference() {
    const difference = this.date - this.birth;
    const dayDifference = Math.floor(difference / 31557600000);
    const totalDifference = Math.floor(dayDifference / 365);
  }
  venusAge() {
    const mercuryRatio = 0.62;
    const mercury =
    return mercury;
  }
  jupiterAge() {
    const mercuryRatio = 11.86;
    const mercury =
    return mercury;
  }
  mercuryAge() {
    const mercuryRatio = 0.24;
    const mercury =
    return mercury;
  }
  marsAge() {
    const mercuryRatio = 1.88;
    const mercury =
    return mercury;
  }
}
