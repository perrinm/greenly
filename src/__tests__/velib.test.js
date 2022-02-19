import { Store, DiscountOffer } from "./../store";

describe("Velib partner", () => {
  it("Ilek should not change", () => {
    expect(
      new Store([new DiscountOffer("Ilek", 5, 5)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Ilek", 5, 5)]);
  });
});
