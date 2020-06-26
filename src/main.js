import 'bootstrap';
import './bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { User } from './../src/age-calculator.js';

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let input = getInput();
    let user = new User(input[0], input[1], (input[2] - 1), input[3], input[4]);
    console.log(user.getDaysAlive());
  });
});

function getInput() {
  let outputArray = [];
  let name = $("#name-input").value;
  let birthdayArray = $("#date-input").value.split(/\D/);
  let expectancy = $("#expectancy-input").value;
  outputArray.push(name);
  birthdayArray.forEach(function (element) {
    outputArray.push(element);
  });
  outputArray.push(expectancy);
  return outputArray;
}