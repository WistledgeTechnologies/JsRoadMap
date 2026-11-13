// Lesson 08 practical: destructuring, rest and spread.

// 1. Array destructuring uses position.
const topics = ["Variables", "Functions", "Arrays"];
const [firstTopic, secondTopic, thirdTopic] = topics;

console.log(firstTopic);  // Variables
console.log(secondTopic); // Functions
console.log(thirdTopic);  // Arrays

// 2. Object destructuring uses property names.
const learner = {
  name: "Ada",
  age: 22,
  address: {
    city: "Port Harcourt",
    country: "Nigeria"
  }
};

const {
  name: learnerName,
  age,
  address: { city }
} = learner;

console.log(learnerName, age, city);

// 3. A default is used when a property is undefined.
const { role = "learner" } = learner;
console.log(role); // learner

// 4. Rest collects the remaining properties.
const { name, ...profileDetails } = learner;
console.log(name);
console.log(profileDetails);

// 5. Spread creates a shallow copy with an updated property.
const updatedLearner = {
  ...learner,
  age: 23
};

console.log(updatedLearner.age); // 23
console.log(learner.age);        // 22 — original object is unchanged

// 6. Destructure data shaped like a typical API response.
const users = [
  {
    id: 1,
    name: "Ada Lovelace",
    email: "ada@example.com",
    address: { city: "London" }
  },
  {
    id: 2,
    name: "Grace Hopper",
    email: "grace@example.com",
    address: { city: "New York" }
  }
];

users.forEach(({ name, email, address }) => {
  console.log(`${name} — ${email} — ${address.city}`);
});

// Note: nested destructuring assumes address exists.
// Real API data should be validated before relying on its shape.
