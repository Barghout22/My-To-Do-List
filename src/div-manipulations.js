import { deleteToDos,getProjectItems,clearItemsOfProject} from "./object-creator";
import { duplicationPrevention } from "./index";
export let duplicationPreventionLocal=0;
//first function dynamically displays a form to capture new todos  
export function displayAdditionForm(parentDiv,projectList){
    
    const myToDoForm=document.createElement('div');
    myToDoForm.classList.add('displayForm');
    
    AddLabel("title"," New Task:",myToDoForm);
    const titleInput=document.createElement("input");
    titleInput.type="text";
    titleInput.setAttribute("id","title");
    titleInput.name="title";
    //titleInput.value=" ";
    myToDoForm.appendChild(titleInput);

    AddLabel("priorty"," select a level of priorty:",myToDoForm);
    const priortySetter=document.createElement("select");
    priortySetter.setAttribute("id","priorty");
    const high=new Option("High","high");
    const low=new Option("Low","low");
    priortySetter.add(low,undefined);
    priortySetter.add(high,undefined);
    myToDoForm.appendChild(priortySetter);

    AddLabel("dueDate"," Due Date: ",myToDoForm);
    const dueDate=document.createElement("input");
    dueDate.type="date";
    dueDate.setAttribute("id","dueDate");
    dueDate.name="dueDate";
   //let today=new Date();
   dueDate.value=new Date().toISOString().substring(0, 10);
   dueDate.setAttribute("min",new Date().toISOString().substring(0, 10));
   //dueDate.value=`${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;
   
   myToDoForm.appendChild(dueDate);

    AddLabel("dueTime","Due time:",myToDoForm);
    const dueTime=document.createElement("input");
    dueTime.type="time";
    dueTime.setAttribute("id","dueTime");
    dueTime.name="dueTime";
    dueTime.defaultValue="00:00";
    myToDoForm.appendChild(dueTime)


    AddLabel("notes"," Additional notes: ",myToDoForm);
    const additionalNotes=document.createElement("textarea");
    additionalNotes.setAttribute("id","notes");
    additionalNotes.setAttribute("name","notes");
    additionalNotes.setAttribute("rows",2);
    additionalNotes.setAttribute("cols",50);
    additionalNotes.value=" ";
    myToDoForm.appendChild(additionalNotes);

    AddLabel("projects","select project: ",myToDoForm);
    const projectSelector=document.createElement("select");
    projectSelector.setAttribute("id","prjctSelect");
    const defaultOption=new Option("no project","default");
    projectSelector.add(defaultOption,undefined);

    if((projectList.length)>0)
    {
        for(let i=0;i<(projectList.length);i++)
        {
            const newOption=new Option(`${projectList[i]}`,`${projectList[i]}`);
            projectSelector.add(newOption,undefined);

        
        }
        

    }
    myToDoForm.appendChild(projectSelector)

    const submitBttn=document.createElement("button");
    submitBttn.textContent="Add";
    submitBttn.type="button";
    submitBttn.classList.add("submissionButton");
    myToDoForm.appendChild(submitBttn);
    
    
    
    parentDiv.appendChild(myToDoForm);
}





//function to display the tasks
export function DisplayToDo(parentDiv,toDoList)
{

if((toDoList.length)===0)
{
    const introHeader=document.createElement("h3");
    introHeader.textContent="You have nothing to do yet! Add a task!";
    parentDiv.appendChild(introHeader);    

}
else{
for(let i=0;i<(toDoList.length);i++)
{
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("toDoDispDiv");
    todoDiv.setAttribute("id",toDoList[i].title);
    const title=document.createElement('div');
    title.classList.add('titleDiv');
    title.textContent=toDoList[i].title;


    const priorty=document.createElement('div');
    priorty.textContent=toDoList[i].priorty +' priorty';
    if((toDoList[i].priorty)==='high')
    {
        priorty.classList.add('highPriorty');
    }
    else if((toDoList[i].priorty)==='low')
    {
        priorty.classList.add('lowPriorty');
    }
    const DueInfo=document.createElement('div');
    DueInfo.textContent='due ';

   
    const paragraphtwo=document.createElement('div');
    paragraphtwo.classList.add('lowerDivPartition');

    if((toDoList[i].dueDate)===(new Date().toISOString().substring(0, 10)))
    {
        DueInfo.textContent+="today";

    }

    else
    {
        DueInfo.textContent+=`${toDoList[i].dueDate}:`;
    }

    if((toDoList[i].dueTime)!=="00:00")
    {
        if (((toDoList[i].dueTime).slice(0,2)-12)>0)
        {
            DueInfo.textContent+=` by ${((toDoList[i].dueTime).slice(0,2)-12)}${(toDoList[i].dueTime).slice(2)} pm`;

        }
        else if(((toDoList[i].dueTime).slice(0,2)-12)==0)
        {
            DueInfo.textContent+=` by ${toDoList[i].dueTime} pm`;

        }
        else
        {
            DueInfo.textContent+=` by ${toDoList[i].dueTime} am`;

        }
    }

    paragraphtwo.textContent=`Additional notes:  ${toDoList[i].notes}`;

    const completedBttn=document.createElement("button");
    completedBttn.classList.add("questComplete");
    completedBttn.setAttribute("id",`${toDoList[i].title}`);
    
    const checkMark=document.createElement('img');
    checkMark.src="./check-outline.png";
    completedBttn.appendChild(checkMark);
    
    const deleteBttn=document.createElement("button");
    deleteBttn.classList.add("questdelete");
    deleteBttn.setAttribute("id",`${toDoList[i].title}`);

    const deleteIcon=document.createElement('img');
    deleteIcon.src='./file-document-remove.png';
    deleteBttn.appendChild(deleteIcon);



    todoDiv.appendChild(priorty);
    todoDiv.appendChild(title);
    todoDiv.appendChild(DueInfo);
    todoDiv.appendChild(completedBttn);
    todoDiv.appendChild(deleteBttn);
    todoDiv.appendChild(paragraphtwo);
    parentDiv.appendChild(todoDiv);

    completedBttn.addEventListener("click",()=>{
        todoDiv.classList.add("clearedTask");
        priorty.className=' ';
        priorty.classList.add('clearedTaskPriorty');
        priorty.textContent="task complete";

    });
    deleteBttn.addEventListener("click",()=>
    {
        deleteToDos(title);
        parentDiv.removeChild(todoDiv);
    }
    );

}

}


}



export function clearDivContainer(container){
while(container.firstChild)
{
    container.removeChild(container.lastChild);

}

}


function AddLabel(inputName,displayText,parent)
{
    const label=document.createElement("label");
    label.setAttribute("for",inputName);
    label.textContent=displayText;
    parent.appendChild(label);
}


export function addNewProject(projectList,parentDiv,parentListDisp)
{
if(duplicationPreventionLocal==0){
    duplicationPreventionLocal++;

const addProjectDiv=document.createElement('div');
addProjectDiv.classList.add("projectAdditiondiv");

AddLabel("newProject","new project:",addProjectDiv);
const projectInput=document.createElement("input");
projectInput.type="text";
projectInput.setAttribute("id","newProject");
projectInput.name="newProject";
projectInput.value=" ";
addProjectDiv.appendChild(projectInput);

const addProjBttn=document.createElement("button");
addProjBttn.textContent="Add";
addProjBttn.type="button";
addProjBttn.classList.add("addingProjectBtn");
addProjectDiv.appendChild(addProjBttn);

parentDiv.appendChild(addProjectDiv);

addProjBttn.addEventListener("click",()=>{
    if (projectInput.value===' ')
    {
        alert("please enter a name for the new project");
    }
    else{
        projectList.push(projectInput.value);
        localStorage.setItem('storedProjects',JSON.stringify(projectList));
        //console.log(projectList);
        duplicationPreventionLocal=0;
        displaySideBarProjects(projectList,parentListDisp,parentDiv);
        parentDiv.removeChild(addProjectDiv);

    }
});

}
}

export function displaySideBarProjects(projectList,parent,mainDisp)
{
    let deleteDivDuplicationPrevention=0;
    clearDivContainer(parent);
    if((projectList.length)!==0){
for(let i=0;i<(projectList.length);i++)
{
    const projectItem=document.createElement("li");
    projectItem.classList.add("projectItem");
    projectItem.setAttribute("id",projectList[i]);
    projectItem.textContent=projectList[i];
    const projectDltBttn=document.createElement('button');
    projectDltBttn.classList.add("projectDeleteBtn");
    projectDltBttn.setAttribute('id',i);
    projectDltBttn.textContent='X';
    projectItem.appendChild(projectDltBttn);
   // console.log(projectItem);

    parent.appendChild(projectItem);



projectItem.addEventListener('click',()=>{
    duplicationPrevention=0;
    duplicationPreventionLocal=0
    //console.log(projectItem['id'])
    if(deleteDivDuplicationPrevention===0)
    {
        const filteredList=getProjectItems(projectItem['id'])
        clearDivContainer(mainDisp);
        DisplayToDo(mainDisp,filteredList);
    }
    deleteDivDuplicationPrevention=0;
});

projectDltBttn.addEventListener('click',()=>{
    deleteDivDuplicationPrevention++;
    const currentTodoList=clearItemsOfProject(projectList[projectDltBttn['id']]);
    parent.removeChild(projectItem);
    projectList.splice(projectDltBttn['id'],1);
    localStorage.setItem('storedProjects',JSON.stringify(projectList));
    clearDivContainer(mainDisp);
   // console.log(currentTodoList);
    DisplayToDo(mainDisp,currentTodoList);


});

}}
const projectAdder=document.createElement("li")
projectAdder.classList.add("projectItem");
projectAdder.classList.add("sidebarItem");
projectAdder.setAttribute("id","projectAddition");
projectAdder.textContent="Add new Project  +";
parent.appendChild(projectAdder);
projectAdder.addEventListener('click',()=>{
    addNewProject(projectList,mainDisp,parent)});

}
