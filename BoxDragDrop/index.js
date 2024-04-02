let boxes=document.querySelectorAll(".box");
let main=document.querySelector(".main-box");

boxes.forEach(e=>{
    e.addEventListener("dragstart",function(elem){
        elem.dataTransfer.setData("data-id",e.getAttribute("data-id"));
    })
});

main.addEventListener("dragover",function(e){
    e.preventDefault();

});

main.addEventListener("drop",function(e){

    e.preventDefault();
    let dataid=e.dataTransfer.getData("data-id");
    let draggedBox = document.querySelector(`[data-id='${dataid}']`)

    main.appendChild(draggedBox);
    
})


