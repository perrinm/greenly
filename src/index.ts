import { Store, DiscountOffer } from "./store";

import fs from "fs";

import { DiscountOfferType, StoreType } from "./store";

const discountOffers: Array<DiscountOfferType> = [
  new DiscountOffer("Velib", 20, 30),
  new DiscountOffer("Naturalia", 10, 5),
  new DiscountOffer("Vinted", 5, 40),
  new DiscountOffer("Ilek", 15, 40),
  new DiscountOffer("BackMarket", 20, 40)
];

const store: StoreType = new Store(discountOffers);

const logs: Array<string> = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  logs.push(JSON.stringify(store.updateDiscounts()) + "\n");
  // eslint-disable-next-line no-console
  // console.log(JSON.stringify(store.updateDiscounts()));
}

/* eslint-disable no-console */
fs.writeFile("myoutput.txt", logs.toString(), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
