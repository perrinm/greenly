import { Store, DiscountOffer } from "./store";

describe("Store", () => {
  it("should decrease the discount and expiresIn", () => {
    expect(new Store([new DiscountOffer("test", 2, 3)]).updateDiscounts()).toEqual(
      [new DiscountOffer("test", 1, 2)]
    );
  });
  it("Ilek should not change", () => {
    expect(new Store([new DiscountOffer("Ilek", 5, 5)]).updateDiscounts()).toEqual(
      [new DiscountOffer("Ilek", 5, 5)]
    );
  });
});

describe("Store 2", () => {
  it("should decrease the discount and expiresIn", () => {
    expect(new Store([new DiscountOffer("test", 2, 3)]).updateDiscounts()).toEqual(
      [new DiscountOffer("test", 1, 2)]
    );
  });
  it("Ilek should not change", () => {
    expect(new Store([new DiscountOffer("Ilek", 5, 5)]).updateDiscounts()).toEqual(
      [new DiscountOffer("Ilek", 5, 5)]
    );
  });
});