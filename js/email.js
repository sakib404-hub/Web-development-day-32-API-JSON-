// console.log("I am Here!");

const showComments = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((infos) => {
      displayInformation(infos);
    });
};

const displayInformation = (infos) => {
  //? Getting the parent container and empty it
  const parentContainer = document.getElementById("parentContainer");
  parentContainer.innerHTML = "";

  //? Getting every one of the object from the array of the object
  infos.forEach((info) => {
    const postCard = document.createElement("div");
    postCard.innerHTML = `
    <div class="postCard">
        <h4>Name : ${info.name}</h4>
        <p>Email : ${info.email}</p>
        <p>
          ${info.body}
        </p>
      </div>`;
    parentContainer.appendChild(postCard);
  });
};
