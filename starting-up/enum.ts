enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person =
  // : {
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  //   role: [number, string];
  // }
  {
    name: "nanu",
    age: 25,
    hobbies: ["movies", "books"],
    role: Role.ADMIN,
  };

let favoriteHobbies: string[];
favoriteHobbies = ["movies"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}
