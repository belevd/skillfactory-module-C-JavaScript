import { multiply } from "../index.js";

// test("multiply 1 * 0 to equal 1", () => {
//   const result = multiply(1, 0);
//   expect(result).toBe(0);
// });

xdescribe("test multiply", () => {
  it("multiply 1 * 0 to equal 1", () => {
    const result = multiply(1, 0);
    expect(result).toBe(0);
  }),
    it("multiply 1 * 1 to equal 1", () => {
      const result = multiply(1, 1);
      expect(result).toBe(1);
    });
});
