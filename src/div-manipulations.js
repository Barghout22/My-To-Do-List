//first function dynamically displays a form to capture new todos  
export function displayAdditionForm(parentDiv){
    
    const myToDoForm=document.createElement('div');
    myToDoForm.classList.add('displayForm');
    
    AddLabel("title"," My goal:",myToDoForm);
    const titleInput=document.createElement("input");
    titleInput.type="text";
    titleInput.setAttribute("id","title");
    titleInput.name="title";
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
    myToDoForm.appendChild(dueDate);

    AddLabel("dueTime","Due time:",myToDoForm);
    const dueTime=document.createElement("input");
    dueTime.type="time";
    dueTime.setAttribute("id","dueTime");
    dueTime.name="dueTime";myToDoForm.appendChild(dueTime)


    AddLabel("notes"," Additional notes: ",myToDoForm);
    const additionalNotes=document.createElement("textarea");
    additionalNotes.setAttribute("id","notes");
    additionalNotes.setAttribute("name","notes");
    additionalNotes.setAttribute("rows",2);
    additionalNotes.setAttribute("cols",50);
    myToDoForm.appendChild(additionalNotes);

    const submitBttn=document.createElement("button");
    submitBttn.textContent="Add";
    submitBttn.type="button";
    submitBttn.classList.add("submissionButton");
    myToDoForm.appendChild(submitBttn);
    
    
    parentDiv.appendChild(myToDoForm);
}

export function DisplayToDo(toDoObject)
{
const todoDiv=document.createElement('div');
todoDiv.classList.add('toDoDisplayDiv');
todoDiv.textContent=toDoObject.title;

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