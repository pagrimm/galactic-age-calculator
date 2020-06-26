export class User {
  constructor(name, year, month, day, expectancy, today) {
    this.name = name;
    this.birthday = new Date(year, month, day);
    this.lifeExpectancy = expectancy;
    this.daysAlive = this.getDaysAlive(today);
    this.daysLeft = this.getDaysLeft();
    this.nextBirthday = this.getNextBirthday(today);
  }
  getDaysAlive(today = new Date()) {
    return (msToDays(today.getTime()) - msToDays(this.birthday.getTime()));
  }
  getDaysLeft() {
    return Math.floor(this.lifeExpectancy * 365.2422) - this.daysAlive;
  }
  getPlanetYearsLeft() {
    let yearsArray = [];
    yearsArray.push(this.getMercuryAge(this.daysLeft));
    yearsArray.push(this.getVenusAge(this.daysLeft));
    yearsArray.push(this.getMarsAge(this.daysLeft));
    yearsArray.push(this.getJupiterAge(this.daysLeft));
    return yearsArray;
  }
  getNextBirthday(today = new Date()) {
    let nextBirthday = new Date();
    let thisYearBirthday = new Date(today.getFullYear(), this.birthday.getMonth(), this.birthday.getDate())
    if (thisYearBirthday.getTime() > today.getTime()) {
      nextBirthday = thisYearBirthday;
    } else {
      nextBirthday = thisYearBirthday;
      nextBirthday.setMonth(nextBirthday.getMonth() + 12); 
    }
    return nextBirthday;
  }
  getMercuryAge(days = this.daysAlive) {
    let mercury = new Planet(88);
    return mercury.getPlanetAge(days);
  }
  getVenusAge(days = this.daysAlive) {
    let venus = new Planet(225);
    return venus.getPlanetAge(days);
  }
  getMarsAge(days = this.daysAlive) {
    let mars = new Planet(687);
    return mars.getPlanetAge(days);
  }
  getJupiterAge(days = this.daysAlive) {
    let jupiter = new Planet(4332);
    return jupiter.getPlanetAge(days);
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
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}