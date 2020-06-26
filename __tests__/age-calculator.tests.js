import { User } from './../src/age-calculator.js';

describe('Galactic Age Calculator', () => {
  let user;
  let today;

  beforeEach(() => {
    today = new Date(2020, 5, 26);
    user = new User("Peter", 1984, 3, 11, 78, today);
  });

  test('should correctly create a user object with name, birthday date object, life expectancy', () => {
    expect(user.name).toEqual("Peter");
    expect(user.birthday.getDate()).toEqual(11);
    expect(user.birthday.getFullYear()).toEqual(1984);
    expect(user.birthday.getMonth()).toEqual(3);
    expect(user.lifeExpectancy).toEqual(78);
  });

  test('should correctly return number of days user has been alive', () => {
    expect(user.daysAlive).toEqual(13225);
  });

  test('should correctly return user age in Mercury years', () => {
    expect(user.getMercuryAge()).toEqual(150);
  });

  test('should correctly return user age in Venus years', () => {
    expect(user.getVenusAge()).toEqual(58);
  });

  test('should correctly return user age in Mars years', () => {
    expect(user.getMarsAge()).toEqual(19);
  });

  test('should correctly return user age in Jupiter years', () => {
    expect(user.getJupiterAge()).toEqual(3);
  });

  test('should correctly return days user has left to live based on life expectancy', () => {
    expect(user.getDaysLeft()).toEqual(15263);
  });

  test('should correctly return years user has left to live on each planet', () => {
    expect(user.getPlanetYearsLeft()).toEqual([173, 67, 22, 3]);
  });

  test('should correctly return years user has lived over expectancy on each planet', () => {
    let user2 = new User("Edgar", 1932, 7, 14, 78, today);
    expect(user2.getPlanetYearsLeft()).toEqual([-41, -17, -6, -1]);
  });

  test('should correctly return last birthday of user', () => {
    expect(user.lastBirthday.getDate()).toEqual(11);
    expect(user.lastBirthday.getFullYear()).toEqual(2020);
    expect(user.lastBirthday.getMonth()).toEqual(3);
  });
});