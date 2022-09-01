import { deleteToDos } from "./object-creator";
//first function dynamically displays a form to capture new todos  
export function displayAdditionForm(parentDiv){
    
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
    const medium=new Option("Medium","medium");
    const low=new Option("Low","low");
    priortySetter.add(low,undefined);
    priortySetter.add(medium,undefined);
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

    const submitBttn=document.createElement("button");
    submitBttn.textContent="Add";
    submitBttn.type="button";
    submitBttn.classList.add("submissionButton");
    myToDoForm.appendChild(submitBttn);
    
    
    parentDiv.appendChild(myToDoForm);
}




export function DisplayToDo(parentDiv,toDoList)
{

if(toDoList.length===0)
{
    const introHeader=document.createElement("h3");
    introHeader.textContent="You have nothing to do yet! Add a task!";
    parentDiv.appendChild(introHeader);    

}
else{
for(let i=0;i<(toDoList.length);i++)
{
    const todoDiv=document.createElement('div');
    const title=toDoList[i].title;
    todoDiv.classList.add("toDoDispDiv");
    todoDiv.setAttribute("id",title);

    const paragraphOne=document.createElement('div');
    const paragraphtwo=document.createElement('div');

    if((toDoList[i].dueDate)===(new Date().toISOString().substring(0, 10)))
    {
        paragraphOne.textContent="today:";

    }

    else
    {
        paragraphOne.textContent=`${toDoList[i].dueDate}:`;
    }

    paragraphOne.textContent+=` ${toDoList[i].title} priorty: ${toDoList[i].priorty}`;
    if((toDoList[i].dueTime)!=="00:00")
    {
        paragraphOne.textContent+=`_____due by: ${toDoList[i].dueTime} o'clock`;
    }

    paragraphtwo.textContent=`   Additional notes: ${toDoList[i].notes}`;

    const completedBttn=document.createElement("button");
    completedBttn.classList.add("questComplete");
    completedBttn.setAttribute("id",`${toDoList[i].title}`);
    completedBttn.textContent="mark as complete";

    const deleteBttn=document.createElement("button");
    deleteBttn.classList.add("questdelete");
    deleteBttn.setAttribute("id",`${toDoList[i].title}`);
    deleteBttn.textContent="delete this task";



    todoDiv.appendChild(paragraphOne);
    todoDiv.appendChild(completedBttn);
    todoDiv.appendChild(deleteBttn);
    todoDiv.appendChild(paragraphtwo);
    parentDiv.appendChild(todoDiv);

    completedBttn.addEventListener("click",()=>{
        todoDiv.classList.add("clearedTask");

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