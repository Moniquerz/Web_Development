const casual = require('casual');

const name = casual.name;
const country = casual.country;
const city = casual.city;
const phoneNum = casual.phone;
const address = casual.address;
const month = casual.month;




console.log(`Hello there ${name}! 
How was your trip to ${country}? 
Did you get to visit ${city}? 
I sure do hope you had a wonderful time. 
Is your phone number still ${phoneNum}?
I will try to give you a call sometime. By the way, I want to send you a fresh loaf of bread at your ${address} of:
        ${address}.      
Well, I will see you soon. I will be visiting sometime before ${month}. 
Until then, farewell!`);