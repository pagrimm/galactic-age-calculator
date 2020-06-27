import { User, Calculator } from './../src/age-calculator.js';

describe('Galactic Age Calculator', () => {
  let user;
  let today;
  let calculator;

  beforeEach(() => {
    today = new Date(2020, 5, 26);
    user = new User("Peter", 1984, 3, 11, 78, today);
    calculator = new Calculator(user);
  });

  test('should correctly create a user object with name, birthday date object, life expectancy', () => {
    expect(calculator.user.name).toEqual("Peter");
    expect(calculator.user.birthday.getDate()).toEqual(11);
    expect(calculator.user.birthday.getFullYear()).toEqual(1984);
    expect(calculator.user.birthday.getMonth()).toEqual(3);
    expect(calculator.user.lifeExpectancy).toEqual(78);
  });

  test('should correctly return number of days user has been alive', () => {
    expect(calculator.getDaysAlive(today)).toEqual(13225);
  });

  test('should correctly return user age in Mercury years', () => {
    expect(calculator.getPlanetAge("mercury")).toEqual(150);
  });

  test('should correctly return user age in Venus years', () => {
    expect(calculator.getPlanetAge("venus")).toEqual(58);
  });

  test('should correctly return user age in Mars years', () => {
    expect(calculator.getPlanetAge("mars")).toEqual(19);
  });

  test('should correctly return user age in Jupiter years', () => {
    expect(calculator.getPlanetAge("jupiter")).toEqual(3);
  });

  test('should correctly return days user has left to live based on life expectancy', () => {
    expect(calculator.getDaysLeft(today)).toEqual(15263);
  });

  test('should correctly return years user has left to live on each planet', () => {
    expect(calculator.getPlanetYearsLeft()).toEqual([173, 67, 22, 3]);
  });

  test('should correctly return years user has lived over expectancy on each planet', () => {
    let user2 = new User("Edgar", 1932, 7, 14, 78, today);
    let calculator2 = new Calculator(user2);
    expect(calculator2.getPlanetYearsLeft()).toEqual([-41, -17, -6, -1]);
  });

  test('should correctly return last birthday of user if birthday in this year has passed', () => {
    expect(calculator.user.lastBirthday.getDate()).toEqual(11);
    expect(calculator.user.lastBirthday.getFullYear()).toEqual(2020);
    expect(calculator.user.lastBirthday.getMonth()).toEqual(3);
  });

  test('should correctly return last birthday of user if birthday in this year has not passed', () => {
    let user2 = new User("Steve", 1992, 10, 14, 78, today);
    let calculator2 = new Calculator(user2);
    expect(calculator2.user.lastBirthday.getDate()).toEqual(14);
    expect(calculator2.user.lastBirthday.getFullYear()).toEqual(2019);
    expect(calculator2.user.lastBirthday.getMonth()).toEqual(10);
  });
});