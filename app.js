let add = document.getElementById("add");
let inputText = document.getElementById("input-text");
let calendar = document.getElementById("calendar");
let deleteAll = document.getElementById("deleteAll");
let list = document.querySelector("#list");

inputText.focus();

let oldTodo = JSON.parse(localStorage.getItem("todoItem"));
window.addEventListener("load", () => {
  console.log(oldTodo);
  console.log(inputList);
  oldTodo.forEach((element) => {
    CreateItem(element);
  });
});

const d = new Date();
calendar.innerHTML += `${d.getUTCDate()}- ${
  d.getMonth() + 1
}- ${d.getFullYear()}`;

let inputList = oldTodo ? oldTodo : [];
add.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputText.value == "") {
    alert("Please Enter The Note ");
    return;
  } else {
    CreateItem(inputText.value);
    inputList.push(inputText.value);
    // console.log(inputList);
    localStorage.setItem("todoItem", JSON.stringify(inputList));
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
  
  // console.log(li.innerText.slice(0, -1));
  span.addEventListener("click", () => {
    li.style.display = "none";
    // silinecek item ı yakalamak için : 
    let deleteItem = li.innerText.slice(0, -1)
    // listeden item ı kaldırmak için : 
    let index = inputList.indexOf(deleteItem);
    inputList.splice(index,1)
    // console.log(inputList);
    //Son hali yeniden localStorage a gönderir:
    localStorage.setItem('todoItem', JSON.stringify(inputList));
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
      let deleteItem = li.innerText.slice(0, -1)
      // listeden item ı kaldırmak için : 
      let index = inputList.indexOf(deleteItem);
      inputList.splice(index,1)
      // console.log(inputList);
      //Son hali yeniden localStorage a gönderir:
      localStorage.setItem('todoItem', JSON.stringify(inputList));
    }
  });
}
