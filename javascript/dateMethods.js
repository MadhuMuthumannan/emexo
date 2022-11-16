console.log(new Date());
console.log(new Date().getDate());
console.log(new Date().toLocaleString('en-us', { weekday: 'long' }));

// set date
const dateStr = new Date().setDate(12);
console.log(new Date(dateStr).toISOString());
