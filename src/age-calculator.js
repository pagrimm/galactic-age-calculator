export class Calculator {
  constructor (user, today = new Date()) {
    this.user = user;
    this.addUserCalcs(user, today);
    this.solarSystem = this.addSolarSystem();
  }

  addUserCalcs(user, today) {
    user.daysAlive = this.getDaysAlive(today);
    user.daysLeft = this.getDaysLeft(today);
    user.lastBirthday = this.getLastBirthday(today);
  }

  getDaysAlive(today) {
    return (this.msToDays(today.getTime()) - this.msToDays(this.user.birthday.getTime()));
  }

  getDaysLeft(today) {
    return Math.floor(this.user.lifeExpectancy * 365.2422) - this.getDaysAlive(today);
  }

  getLastBirthday(today) {
    let thisYearBirthday = new Date(today.getFullYear(), this.user.birthday.getMonth(), this.user.birthday.getDate());
    let lastBirthday;
    if (thisYearBirthday.getTime() < today.getTime()) {
      lastBirthday = thisYearBirthday;
    } else {
      lastBirthday = thisYearBirthday;
      lastBirthday.setFullYear(lastBirthday.getFullYear() - 1);
    }
    return lastBirthday;
  }

  msToDays(ms) {
    return Math.floor(ms / (1000 * 60 * 60 * 24));
  }

  addSolarSystem() {
    let solarSystem = new SolarSystem();
    solarSystem.addPlanet(new Planet("mercury", 88));
    solarSystem.addPlanet(new Planet("venus", 225));
    solarSystem.addPlanet(new Planet("mars", 687));
    solarSystem.addPlanet(new Planet("jupiter", 4332));
    return solarSystem;
  }

  getPlanetAge(planet, days = this.user.daysAlive) {
    let age = Math.floor(days / this.solarSystem[planet].orbitalPeriod);
    return age;
  }

  getPlanetYearsLeft() {
    let yearsArray = [];
    yearsArray.push(
      this.getPlanetAge("mercury", this.user.daysLeft),
      this.getPlanetAge("venus", this.user.daysLeft),
      this.getPlanetAge("mars", this.user.daysLeft),
      this.getPlanetAge("jupiter", this.user.daysLeft));
    return yearsArray;
  }
}

export class User {
  constructor(name, year, month, day, expectancy) {
    this.name = name;
    this.birthday = new Date(year, month, day);
    this.lifeExpectancy = expectancy;
  }
}

class SolarSystem {
  constructor() {}
  addPlanet(planet) {
    this[planet.name] = planet;
  }
}

class Planet {
  constructor(name, orbitalPeriod) {
    this.name = name;
    this.orbitalPeriod = orbitalPeriod;
  }
}