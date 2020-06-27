import $ from "jquery";
import 'bootstrap';
import './bootstrap.min.css';
import './styles.css';
import { User } from './../src/age-calculator.js';
import { Calculator } from './../src/age-calculator.js';

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    clearResults();
    let input = getInput();
    let user = new User(input[0], input[1], (input[2] - 1), input[3], input[4]);
    let calculator = new Calculator(user);
    clearInput;
    displayResults(calculator);
  });
});

function getInput() {
  let outputArray = [];
  let name = $("#name-input").val();
  let birthdayArray = $("#date-input").val().split(/\D/);
  let expectancy = $("#expectancy-input").val();
  outputArray.push(name);
  birthdayArray.forEach(function (element) {
    outputArray.push(element);
  });
  outputArray.push(expectancy);
  return outputArray;
}

function displayResults(calculator) {
  $("section.output").show();
  $("#name-output").text(`Hello ${calculator.user.name},`);
  $("#output").append(`<div>You are ${calculator.getPlanetAge("mercury")} Mercury years old.</div>`);
  $("#output").append(`<div>You are ${calculator.getPlanetAge("venus")} Venus years old.</div>`);
  $("#output").append(`<div>You are ${calculator.getPlanetAge("mars")} Mars years old.</div>`);
  $("#output").append(`<div>You are ${calculator.getPlanetAge("jupiter")} Jupiter years old.</div>`);
  let planetYearsLeft = calculator.getPlanetYearsLeft();
  if (calculator.user.daysLeft >= 0) {
    $("#output").append(`<div>You have an expected ${planetYearsLeft[0]} Mercury years left.</div>`);
    $("#output").append(`<div>You have an expected ${planetYearsLeft[1]} Venus years left.</div>`);
    $("#output").append(`<div>You have an expected ${planetYearsLeft[2]} Mars years left.</div>`);
    $("#output").append(`<div>You have an expected ${planetYearsLeft[3]} Jupiter years left.</div>`);
  } else {
    $("#output").append(`<div>You have outlived your life expectancy by ${-planetYearsLeft[0]} Mercury years.</div>`);
    $("#output").append(`<div>You have outlived your life expectancy by ${-planetYearsLeft[1]} Venus years.</div>`);
    $("#output").append(`<div>You have outlived your life expectancy by ${-planetYearsLeft[2]} Mars years.</div>`);
    $("#output").append(`<div>You have outlived your life expectancy by ${-planetYearsLeft[3]} Jupiter years.</div>`);
  }
}

function clearResults() {
  $("#output").html("");
}

function clearInput() {
  $("input").val("");
}