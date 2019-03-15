import { Age } from './../src/calculator.js';


describe ('Age', function() {

  it('should return a normal mercury age', function() {
    let age = new Age(20)
    expect(age.mercuryChecker()).toEqual(4.8);
  })
  it('should give the expected time remaining on mercury', function() {
    let age = new Age(20)
    expect(age.mercuryLifeChecker()).toEqual(75.2)
  })
  it('should return a normal venus age', function() {
    let age = new Age(20)
    expect(age.venusChecker()).toEqual(12.4);
  })
  it('should give the expected time remaining on venus', function() {
    let age = new Age(20)
    expect(age.venusLifeChecker()).toEqual(67.6)
  })
  it('should return a normal mars age', function() {
    let age = new Age(20)
    expect(age.marsChecker()).toEqual(37.6);
  })
  it('should give the expected time remaining on mars', function() {
    let age = new Age(20)
    expect(age.marsLifeChecker()).toEqual(42.4)
  })
  it('should return a normal jupiter age', function() {
    let age = new Age(20)
    expect(age.jupiterChecker()).toEqual(237.2);
  })
  it('should give the expected time remaining on jupiter', function() {
    let age = new Age(20)
    expect(age.jupiterLifeChecker()).toEqual(157.2)
  })
})
