import { Store, DiscountOffer } from "./../store";

describe("Vinted partner", () => {
  it("Vinted's discount increases by 2 when there are 10 days or less", () => {
    expect(
      new Store([new DiscountOffer("Vinted", 10, 5)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Vinted", 9, 7)]);
  });
  it("Vinted's discount increases by 3 when there are 5 days or less", () => {
    expect(
      new Store([new DiscountOffer("Vinted", 5, 10)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Vinted", 4, 13)]);
  });
  it("Vinted's discount drops to 0 after the expiration date", () => {
    expect(
      new Store([new DiscountOffer("Vinted", 0, 12)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Vinted", -1, 0)]);
  });
  it("Vinted's discount drops to 0 after the expiration date", () => {
    expect(
      new Store([new DiscountOffer("Vinted", 0, 12)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Vinted", -1, 0)]);
  });
});
