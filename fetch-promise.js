// console.log(1)
// console.log(2)

// setTimeout (() => {
//     console.log('timeout')
// }, 0)
// for(let i =0; i < 10; i++) {
//     console.log('loop action')
// }

// fetch (for http request)

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    const list = document.querySelector(".posts-list");
    json.forEach((item, index) => {
      // creating elements
      const post = document.createElement("li");
      const postIndex = document.createElement("span");
      const postTitle = document.createElement("h4");
      const postText = document.createElement("p");
      const postReadMoreLink = document.createElement("a");
      // adding classes
      post.classList.add("posts-list-item");
      postIndex.classList.add("post-index");
      postTitle.classList.add("post-title");
      postText.classList.add("post-text");
      postReadMoreLink.classList.add("post-link");
      // updating content
      postIndex.innerHTML = index + 1;
      postTitle.innerHTML = item.title;
      postText.innerHTML = item.body;
      postReadMoreLink.innerHTML = "read more";
      // inserting item into the list
      post.append(postIndex, postTitle, postText, postReadMoreLink);
      list.appendChild(post);
    });
  });

// PROMISES
// promises have 3 conditions: pending, fulfilled, rejected

const promise = new Promise((resolve, reject) => {
  const isUserLoginIn = true;
  if (isUserLoginIn) {
    resolve("user is logged in");
  } else {
    reject("user is not logged in");
  }
});
promise.then((data) => console.log(data));

// home work

function getPostsById(id) {
  const result = {
    id,
    name: "",
    posts: [],
  };
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => {
        const foundUser = users.find((user) => user.id === id);
        result.name = foundUser.name;
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((data) => data.json())
          .then((posts) => {
            result.posts = posts.filter((post) => post.userId === id);
            resolve(result);
          });
      });
  });
}
getPostsById(2).then((data) => console.log(data));
