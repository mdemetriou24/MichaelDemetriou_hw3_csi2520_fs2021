
function textTyped(){
    var inputText = document.getElementById("itemTxt").value;
    var submitBtn = document.getElementById("submit");  
    if(inputText.length == 0) {
        submitBtn.disabled = true;
    }
    else {
        submitBtn.disabled = false;
    }
 }
 function addItem() {  
    var inputText = document.getElementById("itemTxt");  
    var submitBtn = document.getElementById("submit");  
    var nextBlock = document.getElementById("secondBlock");  
    var newPara = document.createElement("p");  
    var date = new Date();
    newPara.innerHTML = inputText.value + "<br>" + date.getDate() + "/" + (parseInt(date.getMonth())+1) + "/" + date.getFullYear();  
    var deleteBtn = document.createElement("BUTTON");
    deleteBtn.innerHTML = "DELETE ITEM";
    deleteBtn.onclick = function() {
        newPara.remove();
    }
    newPara.style.width = "500px";
    deleteBtn.style.cssFloat = "right";  
    newPara.appendChild(deleteBtn);
    nextBlock.appendChild(newPara);      
    nextBlock.style.visibility = "visible";  
    inputText.value = "";
    submitBtn.disabled = true;
    return false;
 }

 function text(){
    var inputText = document.getElementById("item").value;
    var submitBtn = document.getElementById("sub");  
    if(inputText.length == 0) {
        submitBtn.disabled = true;
    }
    else {
        submitBtn.disabled = false;
    }
 }

 function add() {  
    var inputText = document.getElementById("item");  
    var submitBtn = document.getElementById("sub");  
    var nextBlock = document.getElementById("second");  
    var newPara = document.createElement("p");  
    var date = new Date();
    newPara.innerHTML = inputText.value + "<br>" + date.getDate() + "/" + (parseInt(date.getMonth())+1) + "/" + date.getFullYear();  
    var deleteBtn = document.createElement("BUTTON");
    deleteBtn.innerHTML = "DELETE ITEM";
    deleteBtn.onclick = function() {
        newPara.remove();
    }
    newPara.style.width = "500px";
    deleteBtn.style.cssFloat = "right";  
    newPara.appendChild(deleteBtn);
    nextBlock.appendChild(newPara);      
    nextBlock.style.visibility = "visible";  
    inputText.value = "";
    submitBtn.disabled = true;
    return false;
 }
 