/*const pizza = new Promise((resolve, f) => f("Error!!!"));

let ob = { name: "Ivan", age: 33 };

console.log("Start");
console.log(pizza);

pizza
  .then((val) => {
    console.log(val);
    return ob;
  })
  .then(({ name }) => name)
  .then((val) => {
    console.log(val + " Kharchenko");
  })
  .catch((err) => console.error(err));

console.log("End");
setTimeout(() => {
  console.log(pizza);
}, 6000);

*/

console.log("start");
// getUser(1, function (user) {
//   console.log(user);
//   gerRepos(user.id, function (repos) {
//     console.log(repos);
//   });
// });
const p = getUser(1);
p.then((user) => {
  console.log(user);
  return getRepos(user);
}).then(console.log);
console.log("end");

function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "fill" }), 2000);
  });
}

function getRepos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["repos1", "repo2", "repo3"]), 4000);
  });
}
