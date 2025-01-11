 // find my element

 const mainContent= document.querySelector(".main-content");
const bgColor = document.querySelector(".background-color");
const color = document.querySelector(".color");
const fontSize = document.querySelector(".font-size");
const textarea = document.querySelector("textarea");
const subbtn  = document.querySelector(".subbtn")
 const reset = document.querySelector(".resetbtn")


 let initialContent = mainContent.innerHTML;
// function create 

// localStorage set value 

function setValues(bgColorChanged,colorChanged,fontSizeChanged){
 bgColor.value = bgColorChanged;
 color.value = colorChanged;
 fontSize.value= fontSizeChanged;
 mainContent.style.backgroundColor = bgColorChanged;
 mainContent.style.color= colorChanged;
 mainContent.style.fontSize=fontSizeChanged;
}

// load localStorage value load 

function localStorageValue(){
 const bgColorChanged =  localStorage.getItem("bgColorChanged")
 const colorChanged=  localStorage.getItem("colorChanged")
  const fontSizeChanged = localStorage.getItem("fontSizeChanged")

  if(bgColorChanged && colorChanged && fontSizeChanged ){
   setValues(bgColorChanged,colorChanged,fontSizeChanged)
  }
  if(!bgColorChanged && !colorChanged && !fontSizeChanged){
   setValues("black","grey","17px")
  }
  
  if(bgColorChanged && !colorChanged && !fontSizeChanged){
   setValues(bgColorChanged,"grey","17px")
  }
  if(!bgColorChanged && colorChanged && !fontSizeChanged){
   setValues("black",colorChanged,"17px")
  }
  if(!bgColorChanged && !colorChanged && fontSizeChanged){
   setValues("black","grey",fontSizeChanged)
  }

  if(bgColorChanged && colorChanged && !fontSizeChanged){
   setValues(bgColorChanged,colorChanged,"17px")

  }if(!bgColorChanged && colorChanged && fontSizeChanged){
   setValues("black",colorChanged,fontSizeChanged)
  }if(bgColorChanged && !colorChange && fontSizeChanged){
   setValues(bgColorChanged,"grey",fontSizeChanged)
  }
};
 
localStorageValue(); 

//background-color change

function bgChange(event){
    mainContent.style.backgroundColor=event.target.value
    localStorage.setItem("bgColorChanged", event.target.value)
}

// color change

 function colorChange (event){
    mainContent.style.color=event.target.value
    localStorage.setItem("colorChanged", event.target.value)
 }

 // fontSize change

 function fontChange(event){
    mainContent.style.fontSize = event.target.value 
    localStorage.setItem("fontSizeChanged", event.target.value)
 const fontvalue = parseInt(event.target.value)

 if(fontvalue<=10){
    mainContent.style.height="200px"
 }
 else if (fontvalue<=15){
    mainContent.style.height = "400px";
 }
 else if ( fontvalue<=20){
    mainContent.style.height = "600px"
 }
 else if( fontvalue<=30){
    mainContent.style.height=" 1500px"
 }
 }

 // background-color,color,font size add addEventListener

 bgColor.addEventListener("change", bgChange)
 color.addEventListener("change", colorChange)
 fontSize.addEventListener("change",fontChange)

 // submit button 

 subbtn.addEventListener ( "click",function (){
    mainContent.innerHTML="";
    let newContent = document.createElement('p')
    let userInput = textarea.value;
    newContent.innerHTML=`${userInput}`
    
    mainContent.appendChild(newContent);

 });

 // reset button

 reset.addEventListener("click",function(){
    mainContent.style.backgroundColor="black";
    mainContent.style.color="grey";
    mainContent.style.fontSize="16px"
    textarea.value = "";
    mainContent.innerHTML=initialContent;
   localStorage.removeItem("bgColorChanged")
   localStorage.removeItem("colorChanged")
   localStorage.removeItem("fontSizeChanged")
 });

