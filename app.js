console.log("Hello World!\n==========\n");

// Exercise 1 Section
function plus(number) {
    return function(plusNumber) {
      return number + plusNumber;   
    };
}
const plus15 = plus(15);
console.log(plus15(10));


// Exercise 2

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];
  
  users.forEach((user) => console.log(user.name));
    
  // Exercise 3

  let newUsers = users.map((user) => {
    return { name: user.name, 
        score: user.score};
  });
  console.log(newUsers);

  // Exercise 4

  let activeUsers = users.filter((user) =>  user.isActive);

  console.log(activeUsers);

  // Exercise 5

  users.sort((a, b) => b.score - a.score);

console.log(users);

 // Exercise 6

 let avgScore = users.reduce((sum, user) => sum + user.score, 0)/ users.length;

 console.log(avgScore);
