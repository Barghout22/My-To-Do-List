import './style.css';
import {updateNewTodosToList,listOfToDos} from "./object-creator";
import{displayAdditionForm,DisplayToDo,clearDivContainer} from "./div-manipulations";

let duplicationPrevention=0; 

const mainDisplay=document.querySelector(".mainDisplay");
const todoAddbtn=document.querySelector(".addToDos");

DisplayToDo(mainDisplay,listOfToDos);

todoAddbtn.addEventListener('click',()=>{
  if(duplicationPrevention===0)
  {
    duplicationPrevention++;
    displayAdditionForm(mainDisplay);
  }
  const submit=document.querySelector(".submissionButton");
  submit.addEventListener('click',()=>{
    if(!((document.getElementById("title")).value))
    {alert("please enter a task");}
else
{
    if((document.getElementById("notes").value)===" ")
    {
      document.getElementById("notes").value="none";
    }

    // if(!(document.getElementById("dueDate").value))
    // {
    //   document.getElementById("dueDate").value="today";
    // }

    updateNewTodosToList((document.getElementById("title").value),(document.getElementById("priorty").value),(document.getElementById("notes").value),(document.getElementById("dueDate").value),(document.getElementById("dueTime").value));
    clearDivContainer(mainDisplay);
    DisplayToDo(mainDisplay,listOfToDos);
    duplicationPrevention=0;
  }    
});

});

const SidebarBttns=document.querySelectorAll(".sidebarItem");

SidebarBttns.forEach(bttn=>bttn.addEventListener('click',()=>{
  if(bttn['id']==='activeGoals')
    {
      clearDivContainer(mainDisplay);
      DisplayToDo(mainDisplay,listOfToDos);
    }

    else{
    console.log("hello");
  }
}));


