const button = document.querySelector(".btn");
const input = document.querySelector("input");
const user = document.querySelector(".user-content");


button.addEventListener("click",function(event){
    event.preventDefault();
    let list = document.createElement("li");
    let span = document.createElement("span");

    if(input.value === ""){
        alert("please something your text");
        saveData();
    }else{
        list.innerHTML= input.value;
      user.appendChild(list);
   span.innerHTML="\u00d7";
      list.appendChild(span)
      saveData();
    }
     input.value=""
     saveData();
});


user.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName==="SPAN") {
     e.target.parentElement.remove();
    }
});
function saveData(){
    localStorage.setItem("data",user.innerHTML);
}
function gettask(){
    user.innerHTML= localStorage.getItem("data");

}
gettask();