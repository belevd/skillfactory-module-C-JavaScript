import { checkPrime } from "../definePrime";

describe("tests for definePrime function", () => {
  it("should operate correctly with prime number", () => {
    const number = 17; // write test number here
    const result = checkPrime(number);
    expect(result).toBe(`Число ${number} простое`);
  }),
  it("should operate correctly with non prime number", () => {
    const number = 18; // write test number here
    const result = checkPrime(number);
    expect(result).toBe(`Число ${number} составное`);
  }),
  it("should operate correctly with invalid number", () => {
    const number = 1001; // write test number here
    const result = checkPrime(number);
    expect(result).toBe(`Введены неверные данные`);
  })
});
