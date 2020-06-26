export class User {
  constructor(name, year, month, day, expectancy) {
    this.name = name;
    this.birthday = new Date(year, month, day);
    this.lifeExpectancy = expectancy;
  }

  getDaysAlive() {
    let today = new Date();
    return (msToDays(today.getTime()) - msToDays(this.birthday.getTime()))
  }

  getMercuryAge() {
    let orbitalPeriod = 88
    return false;
  }
}

function msToDays(ms) {
  return Math.floor(ms / 8.64e7)
}