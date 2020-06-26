export class User {
  constructor(name, year, month, day, expectancy) {
    this.name = name;
    this.birthday = new Date(year, month, day);
    this.lifeExpectancy = expectancy;
    this.daysAlive = this.getDaysAlive();
    this.daysLeft = this.getDaysLeft();
  }
  getDaysAlive() {
    let today = new Date();
    return (msToDays(today.getTime()) - msToDays(this.birthday.getTime()))
  }
  getDaysLeft() {
    return Math.floor(this.lifeExpectancy * 365.2422) - this.daysAlive;
  }
  getMercuryAge(days = this.daysAlive) {
    let mercury = new Planet(88)
    return mercury.getPlanetAge(days);
  }
  getVenusAge(days = this.daysAlive) {
    let venus = new Planet(225)
    return venus.getPlanetAge(days);
  }
  getMarsAge(days = this.daysAlive) {
    let mars = new Planet(687)
    return mars.getPlanetAge(days);
  }
  getJupiterAge(days = this.daysAlive) {
    let jupiter = new Planet(4332)
    return jupiter.getPlanetAge(days);
  }
  getPlanetYearsLeft() {
    let yearsArray = [];
    yearsArray.push(this.getMercuryAge(this.daysLeft));
    yearsArray.push(this.getVenusAge(this.daysLeft));
    yearsArray.push(this.getMarsAge(this.daysLeft));
    yearsArray.push(this.getJupiterAge(this.daysLeft));
    return yearsArray;
  }
}

export class Planet {
  constructor(orbitalPeriod) {
    this.orbitalPeriod = orbitalPeriod;
  }
  getPlanetAge(earthDays) {
    return Math.floor(earthDays / this.orbitalPeriod);
  }
}

function msToDays(ms) {
  return Math.floor(ms / 8.64e7)
}