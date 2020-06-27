import { User, Calculator, SolarSystem, Planet } from './../src/age-calculator.js';

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
    let testUser = new User("John", 1972, 7, 17, 78);
    expect(testUser.name).toEqual("John");
    expect(testUser.birthday.getDate()).toEqual(17);
    expect(testUser.birthday.getFullYear()).toEqual(1972);
    expect(testUser.birthday.getMonth()).toEqual(7);
    expect(testUser.lifeExpectancy).toEqual(78);
  });

  test('should correctly create a planet object with orbital period', () => {
    let testPlanet = new Planet("saturn", 11000);
    expect(testPlanet.orbitalPeriod).toEqual(11000);
  });

  test('should correctly create a solar system object with planet objects', () => {
    let testSolarSystem = new SolarSystem();
    let testPlanet = new Planet("saturn", 11000);
    let testPlanet2 = new Planet("neptune", 60200);
    testSolarSystem.addPlanet(testPlanet);
    testSolarSystem.addPlanet(testPlanet2);
    expect(testSolarSystem.saturn.orbitalPeriod).toEqual(11000);
    expect(testSolarSystem.neptune.orbitalPeriod).toEqual(60200);
  });

  test('should correctly create a calculator object with user, solar system, and planets', () => {
    let testUser = new User("John", 1972, 7, 17, 78);
    let testCalculator = new Calculator (testUser);
    expect(testCalculator.user.name).toEqual("John");
    expect(testCalculator.solarSystem.mars.orbitalPeriod).toEqual(687);
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

  test('should correctly return next mercury birthday for user', () => {
    expect(calculator.getNextPlanetBirthday("mercury").getFullYear()).toEqual(2020);
    expect(calculator.getNextPlanetBirthday("mercury").getMonth()).toEqual(7);
    expect(calculator.getNextPlanetBirthday("mercury").getDate()).toEqual(28);
  });
});