import { Store, DiscountOffer } from "./src";

import fs from "fs";

const discountOffers = [
  new DiscountOffer("Velib", 20, 30),
  new DiscountOffer("Naturalia", 10, 5),
  new DiscountOffer("Vinted", 5, 40),
  new DiscountOffer("Ilek", 15, 40)
];
const store = new Store(discountOffers);

const logs = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  logs.push(JSON.stringify(store.updateDiscounts()));
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(store.updateDiscounts()));
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
