import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Deberia ganar el mismo numero para uno que no tiene reglas por ejemplo el 1", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
  it("Deberia ganar el mismo numero para uno que no tiene reglas por ejemplo el 2", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });
  it("Deberia mostrar la palabra fizz para el numero 3", () => {
    expect(generarFizzBuzz(3)).toEqual("fizz");
  });
  it("Deberia mostrar la palabra fizz para los multiplos del numero 3", () => {
    expect(generarFizzBuzz(6)).toEqual("fizz");
  });
  it("Deberia mostrar la palabra Buzz para los multiplos del numero 5", () => {
    expect(generarFizzBuzz(5)).toEqual("Buzz");
  });
  it("Deberia mostrar la palabra Buzz para los multiplos del numero 10", () => {
    expect(generarFizzBuzz(10)).toEqual("Buzz");
  });
  it("Deberia mostrar la palabra Buzz para los multiplos del numero 3 y 5", () => {
    expect(generarFizzBuzz(15)).toEqual("FizzBuzz");
  });
  it("Deberia mostrar la palabra Buzz para los multiplos del numero 10", () => {
    expect(generarFizzBuzz(30)).toEqual("FizzBuzz");
  });
});