import { User } from './../src/age-calculator.js';

describe('Galactic Age Calculator', () => {
  let user;

  beforeEach(() => {
    user = new User("Peter", 1984, 3, 11, 78);
  });

  test('should correctly create a user object with name, birthday date object, life expectancy', () => {
    expect(user.name).toEqual("Peter");
    expect(user.birthday.getDate()).toEqual(11);
    expect(user.birthday.getFullYear()).toEqual(1984);
    expect(user.birthday.getMonth()).toEqual(3);
    expect(user.lifeExpectancy).toEqual(78);
  });

  test('should correctly calculate number of days user has been alive', () => {
    expect(user.getDaysAlive()).toEqual(13225);
  });

  test('should correctly return user age in Mercury years', () => {
    expect(user.getMercuryAge()).toEqual(150);
  });
});

//13,225
/* Creates a user object with user input name, birthday, life expectancy.
Calculates the number of days user has lived
Returns user age in Mercury years
Returns user age in Venus years
Returns user age in Mars years
Returns user age in Jupiter years
Calculates number of days user has left to live based on input life expectancy
If user is under average life expectancy, returns how many years user has left to live in Mercury years
If user is over average life expectancy, returns how many years user has lived past the life expectancy in Mercury years
If user is under average life expectancy, returns how many years user has left to live in Venus years
If user is over average life expectancy, returns how many years user has lived past the life expectancy in Venus years
If user is under average life expectancy, returns how many years user has left to live in Mercury years
If user is over average life expectancy, returns how many years user has lived past the life expectancy in Mercury years
If user is under average life expectancy, returns how many years user has left to live in Mars years
If user is over average life expectancy, returns how many years user has lived past the life expectancy in Mars years
If user is under average life expectancy, returns how many years user has left to live in Jupiter years
If user is over average life expectancy, returns how many years user has lived past the life expectancy in Jupiter years */