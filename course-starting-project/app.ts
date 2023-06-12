const person = {
  name: "nanu",
  age: 25,
  hobbies: ["movies", "books"],
};

let favoriteHobbies: string[];
favoriteHobbies = ["movies"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}
