const places = [
  "Paris",
  "London",
  "New York",
  "Chicago",
  "Cancun",
  "Istambul",
  "Los Angeles",
  "Buenos Aires",
  "Peru",
  "Mexico City",
  "Toronto",
  "Vancouver",
  "Bahamans",
  "Cuba",
  "Beijing",
  "Osaka",
  "Moscow",
  "Morocco",
  "South Africa",
  "Ibiza",
  "Barcelona",
  "Madrid",
  "Medellin",
  "Puerto Vallarta",
  "Seattle",
  "Tokio",
  "Berlin",
  "Stockholm",
  "Miami",
  "Lyon",
  "Austria"
];
const people = [
  "Your Grandma",
  "Your Wife",
  "Your Kids",
  "Your Mother in Law",
  "Your wifes mom",
  "Alone",
  "Your best friend",
  "Your Dad",
  "Your School Principal",
  "Your Coach"
];
const when = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "Spring",
  "Autumn",
  "Winter",
  "Fall",
  "Summer"
];

function generateTrip(pl, pe, ti) {
  let place = pl[Math.floor(Math.random() * pl.length)];
  let person = pe[Math.floor(Math.random() * pe.length)];
  let time = ti[Math.floor(Math.random() * ti.length)];
  if (pe === "Alone") { 
      return ("Your next trip will take place on " + place + ", all " + person + " and it will be next " + time);
  } else { 
      return ("Your next trip will take place on " + place + ", you're going with " + person + " and it will be next " + time); }
}

console.table(places);
console.table(people);
console.table(when);
console.log(generateTrip(places,people,when));
