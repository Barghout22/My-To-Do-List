import './style.css';
import {updateNewTodosToList,listOfToDos,projectList,getProjectItems} from "./object-creator";
import{displayAdditionForm,DisplayToDo,clearDivContainer,addNewProject,displaySideBarProjects} from "./div-manipulations";
import { duplicationPreventionLocal } from './div-manipulations';

export let duplicationPrevention=0; 

const mainDisplay=document.querySelector(".mainDisplay");
const todoAddbtn=document.querySelector(".addToDos");

const displayedProjects=document.querySelector(".projectList");

displaySideBarProjects(projectList,displayedProjects);

DisplayToDo(mainDisplay,listOfToDos);

todoAddbtn.addEventListener('click',()=>{
  if(duplicationPrevention===0)
  {
    duplicationPrevention++;
    displayAdditionForm(mainDisplay,projectList);
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

    updateNewTodosToList((document.getElementById("title").value),
    (document.getElementById("priorty").value),
    (document.getElementById("notes").value),
    (document.getElementById("dueDate").value),
    (document.getElementById("dueTime").value),
    (document.getElementById("prjctSelect").value));
    clearDivContainer(mainDisplay);
    DisplayToDo(mainDisplay,listOfToDos);
    duplicationPrevention=0;
    duplicationPreventionLocal=0;
  }    
});

});

const activeGoalsBttn=document.querySelector("#activeGoals");

activeGoalsBttn.addEventListener('click',()=>{
  duplicationPrevention=0;
  duplicationPreventionLocal=0;
  clearDivContainer(mainDisplay);
  DisplayToDo(mainDisplay,listOfToDos);
});

const ProjectSet=document.querySelector(".projectList");

displaySideBarProjects(projectList,ProjectSet,mainDisplay);

// SidebarBttns.forEach(bttn=>bttn.addEventListener('click',()=>{
//   if(bttn['id']==='activeGoals')
//     {
     
//     }

//     else if((bttn['id'])==='projectAddition'){
//       clearDivContainer(mainDisplay);
//       addNewProject(projectList,mainDisplay);
//       displaySideBarProjects(projectList,displayedProjects);
//       }

//   else
//   {


//   }
// }));


