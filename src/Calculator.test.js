import TemperatureCalculations from "./Calculations"

const assert = require('assert');

it('calculates Celsius correctly', () => {
  const calc = new TemperatureCalculations;

  const expectedF = 32
  const actualF = calc.toFahrenheit(0);

  assert.equal(actualF, expectedF);
});

it('calculates Celsius correctly', () => {
  const calc = new TemperatureCalculations;

  const expectedC = 100
  const actualC = calc.toCelsius(212);

  assert.equal(actualC, expectedC);
});