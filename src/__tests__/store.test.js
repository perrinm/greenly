import { Store, DiscountOffer } from "./../store";

describe("Global store", () => {
  it("should decrease the discount and expiresIn", () => {
    expect(
      new Store([new DiscountOffer("randomPartner", 2, 3)]).updateDiscounts()
    ).toEqual([new DiscountOffer("randomPartner", 1, 2)]);
  });

  it("should lower twice as fast when expiresIn is equal or less to 0", () => {
    expect(
      new Store([new DiscountOffer("randomPartner", 0, 5)]).updateDiscounts()
    ).toEqual([new DiscountOffer("randomPartner", -1, 3)]);
  });

  it("The discount for a partner is never more than 50", () => {
    expect(
      new Store([new DiscountOffer("randomPartner", 23, 54)]).updateDiscounts()
    ).toEqual([new DiscountOffer("randomPartner", 22, 53)]);
  });
});
