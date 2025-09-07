const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((information) => {
      displayPost(information);
    });
};

const displayPost = (informations) => {
  // step 1 : Getting the post container where the value will be stored
  const postContainer = document.getElementById("post_container");

  informations.forEach((info) => {
    const li = document.createElement("li");
    li.innerText = info.title;
    // console.log(info.title);
    postContainer.appendChild(li);
  });
};

const loading_post = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((information) => {
      // console.log(information);
      postShowOnUI(information);
    });
};

const postShowOnUI = (posts) => {
  //? 1. Getting the container
  const postContainer = document.getElementById("post_container2");
  posts.forEach((post) => {
    //? 2. creating the element where the data will be stored
    const li = document.createElement("li");
    // console.log(post.title);
    //? 3. Storing the body of the post in the list item
    li.innerText = post.body;
    //? 4. Appending the list item as the child of the post container
    postContainer.appendChild(li);
  });
};
