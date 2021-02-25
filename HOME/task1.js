/* 
    Вывести на странице 10 постов с ресурса 
    https://jsonplaceholder.typicode.com/posts

    Выводить 
    - заголовок поста
   - ссылку на автора этого поста (class присвоить author-link) 

    При клике на ссылку автора поста вывести под ссылкой 
     - имя user
     - количество постов этого user      
    */

const posts = document.getElementById("posts");
const URL = "https://jsonplaceholder.typicode.com/";

function queryApi(endpoint) {
  return fetch(URL + endpoint).then((r) =>
    r.ok ? r.json() : Promise.reject("unseccessfull request")
  );
}

Promise.all([queryApi("posts"), queryApi("users")])
  .then(([postsArr, usersArr]) => {
    let postsCounterOb = {};

    postsArr.forEach(({ userId }) => {
      !postsCounterOb[userId] && (postsCounterOb[userId] = 0);
      postsCounterOb[userId]++;
    });

    postsArr.forEach(
      (post, idx) => !(idx % 10) && showPost(post, usersArr, postsCounterOb)
    );
  })
  .catch((err) => {
    console.log(err);
    posts.textContent = "Error. Try later";
  })
  .finally(() => {
    console.log("FINAL");
  });

function showPost({ userId, title }, usersArr, countsOfPosts) {
  let count = countsOfPosts[userId];
  let name = usersArr[userId - 1].name;

  return (posts.innerHTML += `
    <div style="border-bottom: 1px solid grey; padding-bottom:20px">
        <p style="margin:5px">Title: "${title}"</p>
        <a class="author-link" href="#">show name of author</a>
        <div style="display:none" >
            Author: ${name}<br>
            Posts: ${count}
        </div>
    </div>`);
}

document.addEventListener("click", handleAuthor);

function handleAuthor({ target }) {
  if (target.className === "author-link") {
    let hiddenBlock = target.nextElementSibling;
    style = hiddenBlock.attributes[0].value;

    hiddenBlock.attributes[0].value =
      style === "display:none" ? "display:block" : "display:none";
  }
}
