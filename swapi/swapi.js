// https://swapi.dev/documentation

const URL = "http://swapi.dev/api/";
// #region Setup
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");

output.innerHTML = "Loading ...";

function getTitles(films) {
  return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((film) => `<div>${film.episode_id}:${film.title}</div>`)
    .join("");
}

function queryApi(endpoint) {
  return fetch(URL + endpoint).then((r) =>
    r.ok ? r.json() : Promise.reject("unseccessfull request")
  );
}

async function main() {
  try {
    const [{ results: films }, { results: planets }] = await Promise.all([
      queryApi("films"),
      queryApi("planets"),
    ]);
    output.innerHTML = `Fimls: ${films.length}, Planets: ${planets.length}`;
  } catch (err) {
    alert(err);
  } finally {
    console.log("FINAL");
    spinner.remove();
  }
}

main();

/*
setTimeout(() => {
  Promise.all([queryApi("films"), queryApi("planets")])
    .then((res) => {
      console.log("PROMISE.ALL , res = ", res);
      const { results: films } = res[0];
      const { results: planets } = res[1];
      output.innerHTML = `Fimls: ${films.length}, Planets: ${planets.length}`;
    })
    .catch((err) => {
      console.log(err);
      output.textContent = "Oops";
    })
    .finally(() => {
      console.log("FINAL");
      spinner.remove();
    });
}, 1000);
*/

/*
setTimeout(() => {
  queryApi("films")
    .then(({ results: films }) => {
      queryApi("planets").then(({ results: planets }) => {
        output.innerHTML = `Fimls: ${films.length}, Planets: ${planets.length}`;
      });
    })
    .catch((err) => {
      console.log(err);
      output.textContent = "Oops";
    })
    .finally(() => {
      console.log("FINAL");
      spinner.remove();
    });
}, 1000);
*/

/*
Promise.resolve($.getJSON(URL + "films"))
  .then(({ results: films }) => {
    console.log(films);
    output.innerHTML = getTitles(films);
  })
  .finally(() => {
    console.log("FINAL");
    spinner.remove();
  });
*/

/*
fetch(URL + "films")
  .then((r) => r.json())
  .then(({ results: films }) => {
    console.log(films);
    output.innerHTML = getTitles(films);
  })
  .finally(() => {
    console.log("FINAL");
    spinner.remove();
  });
  */
