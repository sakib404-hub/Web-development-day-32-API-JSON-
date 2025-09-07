// console.log("Script is connected!");

//!Loading the post from the database
const load_posts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((infos) => {
      //console.log(infos);
      displayUi(infos);
    });
};

//! Displaying the posts in the user interface
const displayUi = (informations) => {
  const postContainer = document.getElementById("post_container");
  postContainer.innerHTML = "";
  //   console.log(postContainer);
  informations.forEach((info) => {
    const li = document.createElement("li");
    li.innerText = info.title;
    postContainer.appendChild(li);
  });
};

//! ----> Load Information button

const load_information = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((informations) => {
      displayInformation(informations);
    });
};

const displayInformation = (posts) => {
  //? ---> Getting the parent container and empty it
  const parenContainer = document.getElementById("post_container2");
  parenContainer.innerHTML = "";

  //? ---> Getting each of the object form the array of object through for loop
  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.innerHTML = `<div class="postCard">
        <h2>${post.title}</h2>
        <p>
         ${post.body}
        </p>
      </div>`;
    parenContainer.appendChild(postCard);
  });
};

//? body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto";
//? id: 1;
//? title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
//? userId: 1;

load_information();
