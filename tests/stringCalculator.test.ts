import { describe, it, expect } from "vitest";
import { add } from "../src/stringCalculator";

describe("add", () => {
  it("boş string için 0 döner", () => {
    expect(add("")).toBe(0);
  });
  it("tek sayı için o sayıyı döner", () => {
    expect(add("1")).toBe(1);
  });
  it("iki sayıyı virgülle ayırıp toplar", () => {
    expect(add("1,2")).toBe(3);
  });
  it("çok sayıda sayıyı toplar", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });
  it("geçersiz karakter içeren girdi için hata fırlatır", () => {
  expect(() => add("1,a")).toThrow();
});
});