export class Age {
  constructor(month, day, year) {
    this.date = new Date();
    this.birth = new Date(month, day, year);
    this.earth = this.difference();
    this.venusAge = venusAge();
    this.jupiterAge = jupiterAge();
    this.mercuryAge = mercuryAge();
    this.marsAge = marsAge();
  }
  difference() {
    const difference = this.date - this.birth;
    console.log(difference);
    const dayDifference = Math.floor(difference / 31557600000);
    const totalDifference = Math.floor(dayDifference / 365);
    return totalDifference;
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
// export function Age(age) {
//   this.age = age;
// }
// Age.protoyype.mercuryAge() {
//   const venus = Math.floor(this.age/0.24);
//   return venus;
// }
// Age.protoyype.marsAge() {
//   const venus = Math.floor(this.age/1.88);
//   return venus;
// }
// Age.protoyype.venusAge() {
//   const venus = Math.floor(this.age/0.62);
//   return venus;
// }
// Age.protoyype.jupiterAge() {
//   const venus = Math.floor(this.age/11.86);
//   return venus;
// }
