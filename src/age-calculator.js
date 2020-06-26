export class User {
  constructor(name, year, month, day, expectancy) {
    this.name = name;
    this.birthday = new Date(year, month, day);
    this.lifeExpectancy = expectancy;
    this.daysAlive = this.getDaysAlive();
  }
  getDaysAlive() {
    let today = new Date();
    return (msToDays(today.getTime()) - msToDays(this.birthday.getTime()))
  }
  getDaysLeft() {
    return Math.floor(this.lifeExpectancy * 365.2422) - this.daysAlive;
  }
  getMercuryAge() {
    let mercury = new Planet(88)
    return mercury.getPlanetAge(this.daysAlive);
  }
  getVenusAge() {
    let venus = new Planet(225)
    return venus.getPlanetAge(this.daysAlive);
  }
  getMarsAge() {
    let mars = new Planet(687)
    return mars.getPlanetAge(this.daysAlive);
  }
  getJupiterAge() {
    let jupiter = new Planet(4332)
    return jupiter.getPlanetAge(this.daysAlive);
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