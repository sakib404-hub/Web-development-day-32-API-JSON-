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
