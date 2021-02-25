getJSON("https://jsonplaceholder.typicode.com/users")
  .then(generateListItems)
  .then(generateUnorderedList)
  .then(addUsersToPage);

function getJSON(url) {
  return fetch(url).then((r) =>
    r.ok ? r.json() : Promise.reject("unseccessfull request")
  );
}

function addUsersToPage(users) {
  document.getElementById("users").innerHTML = users;
}

function generateUnorderedList(listItems) {
  return `<ul class="list-group">${listItems}</ul>`;
}

function generateListItems(users) {
  return users
    .map((u) => `<li class="list-group-item">${u.name}</li>`)
    .join("");
}

/*  
Провести refactoring кода, используя  Promise
чтобы вызов функций был следующим
*/

/*
getJSON("https://jsonplaceholder.typicode.com/users")
.then(generateListItems)
.then(generateUnorderedList)
.then(addUsersToPage);
*/
