import { Store, DiscountOffer } from "./../store";

describe("Ilek partner", () => {
  it("Ilek should never change", () => {
    expect(
      new Store([new DiscountOffer("Ilek", 5, 5)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Ilek", 5, 5)]);
  });
});
