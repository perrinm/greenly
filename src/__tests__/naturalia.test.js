import { Store, DiscountOffer } from "./../store";

describe("Naturalia partner", () => {
  it("Naturalia actually increases the older it gets", () => {
    expect(
      new Store([new DiscountOffer("Naturalia", 5, 5)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Naturalia", 4, 6)]);
  });

  it("Naturalia actually increases the older it gets", () => {
    expect(
      new Store([new DiscountOffer("Naturalia", 0, 12)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Naturalia", -1, 14)]);
  });
});
