let add = document.getElementById("add");
let inputText = document.getElementById("input-text");
let calendar = document.getElementById("calendar");
let deleteAll = document.getElementById("deleteAll");
let list = document.querySelector("#list");

const d = new Date();
calendar.innerHTML += `${d.getUTCDate()}- ${
  d.getMonth() + 1
}- ${d.getFullYear()}`;

add.addEventListener("click", () => {
  if (inputText.value == "") {
    alert("Please Enter The Note ");
    return;
  } else {
    CreateItem(inputText.value);
    inputText.value = "";
  }
});

function CreateItem(item) {
  let li = document.createElement("li");
  let t = document.createTextNode(item); // text ekleyebilmek için
  li.className = "checked";
  li.appendChild(t);

  list.appendChild(li);
  let span = document.createElement("span"); // x eklemek için
  let text = document.createTextNode("\u00D7"); // x ascii code
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  span.addEventListener("click", () => {
    li.style.display = "none";
  });

  li.addEventListener("click", () => {
    if (li.style.textDecoration == "none") {
      li.style.textDecoration = "line-through";
      li.style.opacity = "0.5";
    } else {
      li.style.textDecoration = "none";
      li.style.opacity = "1";
    }
  });

  deleteAll.addEventListener("click", () => {
    if (li.style.textDecoration == "line-through") {
      li.style.display = "none";
    }
  });
}
