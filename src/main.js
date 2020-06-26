import $ from "jquery";
import 'bootstrap';
import './bootstrap.min.css';
import './styles.css';
import { User } from './../src/age-calculator.js';

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    clearResults();
    let input = getInput();
    let user = new User(input[0], input[1], (input[2] - 1), input[3], input[4]);
    clearInput;
    console.log(user.getDaysAlive());
    displayResults(user);
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

function displayResults(user) {
  $("section.output").show();
  $("#name-output").text(`Hello ${user.name},`);
  $("#output").append(`<div>You are ${user.getMercuryAge()} Mercury years old.</div>`);
  $("#output").append(`<div>You are ${user.getVenusAge()} Venus years old.</div>`);
  $("#output").append(`<div>You are ${user.getMarsAge()} Mars years old.</div>`);
  $("#output").append(`<div>You are ${user.getJupiterAge()} Jupiter years old.</div>`);
  let planetYearsLeft = user.getPlanetYearsLeft();
  if (user.daysLeft >= 0) {
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