/* eslint-disable no-unused-vars */

export type DiscountOfferType = {
  partnerName: string;
  expiresIn: number;
  discountInPercent: number;
};

export class DiscountOffer {
  partnerName: string;
  expiresIn: number;
  discountInPercent: number;

  constructor(
    partnerName: string,
    expiresIn: number,
    discountRateInPercent: number
  ) {
    this.partnerName = partnerName;
    this.expiresIn = expiresIn;
    this.discountInPercent = discountRateInPercent;
  }
}

export type StoreType = {
  discountOffers: Array<DiscountOfferType>;
  updateDiscounts: Function;
};

export class Store {
  discountOffers: Array<DiscountOfferType>;

  constructor(discountOffers: Array<DiscountOfferType> = []) {
    this.discountOffers = discountOffers;
  }

  // Function to update Naturalia partner
  updateNaturalia(naturalia: DiscountOfferType): void {
    naturalia.discountInPercent =
      naturalia.expiresIn > 0
        ? (naturalia.discountInPercent += 1)
        : (naturalia.discountInPercent += 2);

    naturalia.expiresIn -= 1;
  }

  // Method to update Vinted partner
  updateVinted(vinted: DiscountOfferType): void {
    if (vinted.expiresIn <= 10 && vinted.expiresIn > 5) {
      vinted.discountInPercent += 2;
    } else if (vinted.expiresIn <= 5) {
      vinted.discountInPercent += 3;
    } else {
      vinted.discountInPercent += 1;
    }

    if (vinted.expiresIn <= 0) {
      vinted.discountInPercent = 0;
    }

    vinted.expiresIn -= 1;
  }

  // Method to update Velib partner
  updateVelib(velib: DiscountOfferType): void {
    if (velib.discountInPercent > 0) {
      velib.discountInPercent =
        velib.expiresIn > 0
          ? (velib.discountInPercent -= 1)
          : (velib.discountInPercent -= 2);
    }

    velib.expiresIn -= 1;
  }

  // Method to update BackMarket partner
  updateBackMarket(backmarket: DiscountOfferType): void {
    backmarket.discountInPercent -= 2;

    if (backmarket.discountInPercent < 0) {
      backmarket.discountInPercent = 0;
    }

    backmarket.expiresIn -= 1;
  }
  // Main method to update partners
  updateDiscounts(): Array<DiscountOfferType> {
    for (const discountOffer of this.discountOffers) {
      const { partnerName } = discountOffer;

      switch (partnerName) {
        case "Naturalia":
          this.updateNaturalia(discountOffer);
          break;
        case "Vinted":
          this.updateVinted(discountOffer);
          break;
        case "Velib":
          this.updateVelib(discountOffer);
          break;
        case "BackMarket":
          this.updateBackMarket(discountOffer);
          break;
        default:
          break;
      }

      if (discountOffer.discountInPercent >= 50) {
        discountOffer.discountInPercent = 50;
      }
    }

    return this.discountOffers;
  }
}
