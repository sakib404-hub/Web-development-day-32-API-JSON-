// const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const result = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
//   (resposnse) => console.log(resposnse.json()).then((data) => console.log(data))
// );

// console.log(result);
/**
 * Data Fetching using the json file
 */

// const loadData = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((information) => console.log(information));

/**
 * Data loading
 */
const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    //Fetch gives us promise of response
    .then((res) => res.json())
    //to get the response we have created an arrow function of getting json response[promise of giving json data]
    .then((information) => console.log(information));
};

/**
 * Post loading
 */

// Practice -1
const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((information) => {
      //   console.log(information);
      displayPosts(information);
    });
};

//Received an array of object
const displayPosts = (posts) => {
  //   console.log(typeof posts);
  //   console.log(posts);
  //1 -----> gettingt the container
  const postContainer = document.getElementById("post_container");
  console.log(postContainer);
  posts.forEach((element) => {
    // console.log(typeof element);
    // console.log(element.title);
    //2 ---> Create an Html Element
    const li = document.createElement("li");
    li.innerText = element.title;
    console.log(li);
    //3 ----> adding the li into the post container that is the ul
    postContainer.appendChild(li);
  });
};

// Main_one
// const loadPost = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((res) => res.json())
//     .then((information) => displayPost(information));
// };

// const displayPost = (posts) => {
// console.log(posts);
//   posts.forEach((element) => {
//     console.log(element);
//   });
// };

// Practice - 2
// const loadinformation = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((res) => res.json())
//     .then((information) => {
//       console.log(information);
//     });
// };

// const displayInformation = (informations) => {
//   informations.forEach((info) => {
//     console.log(info);
//   });
// };
