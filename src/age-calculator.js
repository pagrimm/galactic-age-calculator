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
  getMercuryAge() {
    let mercury = new Planet(88)
    return mercury.getPlanetAge(this.daysAlive);
  }
  getVenusAge() {
    let venus = new Planet(225)
    return venus.getPlanetAge(this.daysAlive);
  }
  getMarsAge() {
    return false;
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