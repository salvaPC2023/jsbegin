import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Deberia ganar el mismo numero para uno que no tiene reglas por ejemplo el 1", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
  it("Deberia ganar el mismo numero para uno que no tiene reglas por ejemplo el 1", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });

});