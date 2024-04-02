let donelist=document.querySelector(".doneTaskList");
let listItems=document.querySelectorAll(".task-list li");
let dropareas=document.querySelectorAll(".drop-area");

listItems.forEach((e,index)=>{
    e.addEventListener("dragstart",function(elem){
        elem.dataTransfer.setData("index",index);
    })
})
dropareas.forEach(e=>{
    e.addEventListener("dragover",function(elem){
        elem.preventDefault();

    })
})
dropareas.forEach(e=>{
    e.addEventListener("drop",function(elem){
        elem.preventDefault();
        let index = elem.dataTransfer.getData("index");
        e.querySelector("ul").appendChild(listItems[+index]);

    })
})
document.querySelector("form").addEventListener("submit", function (e) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; e.preventDefault();

    let email = document.getElementById("emailInput").value;

    if (email.match(validRegex) == null) {
        alert("Email is not correct format")
    }
    else {
        alert("form submitted successfully")
    }
})
fileInput.addEventListener("change", function (e) {

    let file = this.files[0];
    if (file.type.startsWith("image/")) {

        let reader = new FileReader();
        reader.onload = function () {
            document.querySelector("img").setAttribute("src",reader.result);
        }

        reader.readAsDataURL(this.files[0])
    }
})
let icon=document.querySelector("i");
let file=document.querySelector("#fileInput");
icon.addEventListener("click",function(){
    file.click();
})

