import {Calender} from './../src/age-calculator.js';

describe('Calender', function() {

it('will test if its a leap year', function () {
  let year = new Calender(1,1,2000)
  expect(year.checkYear()).toEqual(true);

})
it("will test whether the month has 31 days", function() {
  let month = new Calender(3,2,2000)
  expect(month.checkMonth()).toEqual(true);
  })
it("KOHICHI YOU", function() {
  let day = new Calender(3,5,2001)
  expect(day.checkDay()).toEqual(true);

})
})
