import { describe, it, expect } from "vitest";
import { add } from "../src/stringCalculator";

describe("add", () => {
  it("boş string için 0 döner", () => {
    expect(add("")).toBe(0);
  });
});