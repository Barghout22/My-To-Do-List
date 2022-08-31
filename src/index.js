import './style.css';
import {updateNewTodosToList,listOfToDos} from "./object-creator";
import{displayAdditionForm,DisplayToDo,clearDivContainer} from "./div-manipulations";


const mainDisplay=document.querySelector(".mainDisplay");
const todoAddbtn=document.querySelector(".addToDos");

DisplayToDo(mainDisplay,listOfToDos);

todoAddbtn.addEventListener('click',()=>{
    displayAdditionForm(mainDisplay);

  const submit=document.querySelector(".submissionButton");
  submit.addEventListener('click',()=>{
    if((document.getElementById("title")).value===" ")
    {alert("please enter a task");}
else
{
    updateNewTodosToList((document.getElementById("title").value),(document.getElementById("priorty").value),(document.getElementById("notes").value),(document.getElementById("dueDate").value),(document.getElementById("dueTime").value));
    clearDivContainer(mainDisplay);
    DisplayToDo(mainDisplay,listOfToDos);

  }    
});

});

