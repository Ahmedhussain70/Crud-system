let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("Error");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

let data;

if (localStorage.information != null) {
  data = JSON.parse(localStorage.information);
} else {
  data = [];
}

let acceptData = () => {
  var info = {
    input: input.value,
  };
  // data["text"] = input.value;
  data.push(info);
  localStorage.setItem("information", JSON.stringify(data));
  console.log(data);
  createPost();
};

let createPost = () => {
  for(let i = 0; i < data.length; i++){
  posts.innerHTML += `
    <div>
      <p>${data[i].input}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(${i})" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
  input.value = "";
  }
};

let deletePost = (i) => {
  // e.parentElement.parentElement.remove();
  data.splice(i,1);
  localStorage.information = JSON.stringify(data);
  createPost()
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
