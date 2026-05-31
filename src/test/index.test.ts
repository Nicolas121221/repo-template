import { describe, expect, it, vi } from "vitest";

describe(console.log, () => {
  it("should print hello world", () => {
    const spy = vi.spyOn(console, "log");
    console.log("hello world");

    expect(spy).toHaveBeenCalled();
  });
});
