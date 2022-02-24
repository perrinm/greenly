import { Store, DiscountOffer } from "./../store";

describe("BackMarket partner", () => {
  it("BackMarket decreases twice as normal", () => {
    expect(
      new Store([new DiscountOffer("BackMarket", 10, 9)]).updateDiscounts()
    ).toEqual([new DiscountOffer("BackMarket", 9, 7)]);
  });

  it("BackMarket decreases twice as normal", () => {
    expect(
      new Store([new DiscountOffer("BackMarket", 2, 2)]).updateDiscounts()
    ).toEqual([new DiscountOffer("BackMarket", 1, 0)]);
  });

  it("BackMarket decreases twice as normal", () => {
    expect(
      new Store([new DiscountOffer("BackMarket", 1, 1)]).updateDiscounts()
    ).toEqual([new DiscountOffer("BackMarket", 0, 0)]);
  });
});
