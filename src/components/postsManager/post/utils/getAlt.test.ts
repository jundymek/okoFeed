import { getAlt } from "./getAlt";

describe("generate Alt attribute for images", () => {
  it("should return empty string", () => {
    const result = getAlt("");
    expect(result).toBe("");
  });
  it("should return one phrase alt", () => {
    const result = getAlt(
      "Rządzą nami fundamentaliści. Wykorzystali pandemię, żeby kobiety nie mogły wyjść na ulice. Ale wyjdą"
    );
    expect(result).toBe("Rządzą nami fundamentaliści");
  });
  it("should return max 125 characters", () => {
    const result = getAlt(
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts Separated they live in Bookmarksgrove right at the coast of the Semantics, a large"
    );

    const resultLength = result.length;
    expect(resultLength).toBe(125);
  });
});
