// Update the filterMerchants function so that it returns an array of merchant names that are associated with the passed in filter.
// The filter argument will either be a state abbreviation(EX: 'UT') or a product(EX: 'appliance', 'auto', 'couch', 'furniture') of type string.
// Note - Filtering should be case insensitive
var merchants = [
  {
    name: "Joes's Couch World",
    state: 'UT',
    products: ['furniture', 'appliance'],
  },
  {
    name: 'The Couch Store',
    state: 'UT',
    products: ['furniture'],
  },
  {
    name: 'Frisco Tire, Wheel and Mini-Fridge',
    state: 'CA',
    products: ['auto', 'appliance'],
  },
  {
    name: 'Take a Seat',
    state: 'UT',
    products: ['couch'],
  },
];

const states = [];
merchants.forEach((mer) => {
  if (!states.includes(mer.state.toUpperCase())) {
    states.push(mer.state.toUpperCase());
  }
});

const products = [];
merchants.forEach((mer) => {
  mer.products.forEach((prod) => {
    if (!products.includes(prod.toUpperCase())) {
      products.push(prod.toUpperCase());
    }
  });
});

function filterMerchants(filter, merchants) {
  return (
    filter.length > 2
      ? merchants.filter((mer) => mer.state === filter.toUpperCase())
      : merchants.filter((mer) => mer.products.includes(filter.toLowerCase()))
  ).map((mer) => mer.name);
}
console.log(filterMerchants('UT', merchants));
// Should return ['Joes\'s Couch World', 'The Couch Store', 'Take a Seat']
console.log(filterMerchants('appliance', merchants));
// Should return ['Joes\'s Couch World', 'Frisco Tire, Wheel and Mini-Fridge']
console.log(filterMerchants('Auto', merchants));
// Should return ['Frisco Tire, Wheel and Mini-Fridge']
