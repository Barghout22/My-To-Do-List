import './style.css';
import {ToDoListItemCreator} from "./object-creator";
import{displayAdditionForm,DisplayToDo,clearDivContainer} from "./div-manipulations";

const mainDisplay=document.querySelector(".mainDisplay");
const todoAddbtn=document.querySelector(".addToDos");

todoAddbtn.addEventListener('click',()=>{
    clearDivContainer(mainDisplay);
    displayAdditionForm(mainDisplay);

  const submit=document.querySelector(".submissionButton");
  submit.addEventListener('click',()=>{
    if((document.getElementById("title")).value===" ")
    {alert("please enter a task");}
else
{
    console.log(document.getElementById("title").value);
}    
});

});

