const inputbox = document.querySelector(".inputfield input");
const addbtn = document.querySelector(".inputfield button");
const todolist = document.querySelector(".todoList");
const deleteAll  = document.querySelector(".footer button");

inputbox.onkeyup = () =>{
 let userdata = inputbox.value;
 if(userdata.trim() != 0){
     addbtn.classList.add("active");
 }
 else{
     addbtn.classList.remove("active");
 }
 }
 showTasks();

 addbtn.onclick = () =>
 {
    let userdata = inputbox.value;
     let getLocalStorage = localStorage.getItem("New Todo");
     if(getLocalStorage == null){
         listArr = [];
     }
     else{
         listArr = JSON.parse(getLocalStorage);
     }
     listArr.push(userdata);
     localStorage.setItem("New Todo", JSON.stringify(listArr));
     showTasks();
     addbtn.classList.remove("active");
 }

 function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage);
    }

    const pendingTask = document.querySelector(".pendingNumber");
    pendingTask.textContent = listArr.length;
    if(listArr.length >0)
    {
        deleteAll.classList.add("active");
    }
    else{
        deleteAll.classList.remove("active");
    }


    let newListItem = "";
    listArr.forEach ((element,index) =>
    {
        newListItem += `<li>${element}  <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`
    });
    todolist.innerHTML = newListItem;
    inputbox.value = "";  
 }

 function deleteTask(index)
 {
     let getLocalStorage = localStorage.getItem("New Todo");
     listArr = JSON.parse(getLocalStorage);
     listArr.splice(index, 1);
     localStorage.setItem("New Todo", JSON.stringify(listArr));
     showTasks();
 } 

 deleteAll.onclick = () =>
 {
     listArr = [];
     localStorage.setItem("New Todo", JSON.stringify(listArr));
     showTasks();
     
 }