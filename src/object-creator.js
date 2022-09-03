export let listOfToDos= JSON.parse(localStorage.getItem("storedToDos") || "[]");
export let projectList=JSON.parse(localStorage.getItem("storedProjects") || "[]");


const ToDoListItemCreator=(title,priorty,notes,dueDate,dueTime,project)=>
{
return{title,priorty,notes,dueDate,dueTime,project};
}


export function updateNewTodosToList(title,priorty,notes,dueDate,dueTime,project)
{
    const newToDo=ToDoListItemCreator(title,priorty,notes,dueDate,dueTime,project);
//    console.log(newToDo);
    listOfToDos.push(newToDo);
  //  console.log(listOfToDos);
    listOfToDos.sort(sortByDateAndPriorty);
  //  console.log(listOfToDos);
  localStorage.setItem('storedToDos',JSON.stringify(listOfToDos));
}

export function deleteToDos(title)
{
    const searchIndex=listOfToDos.findIndex((todo)=>todo.title==title);
  //  console.log(searchIndex);
    listOfToDos.splice(searchIndex,1);
    localStorage.setItem('storedToDos',JSON.stringify(listOfToDos));

}


export function getProjectItems(project)
{
    const filteredList=listOfToDos.filter(task=>task.project===project);

    return filteredList;

}

export function clearItemsOfProject(project)
{
  listOfToDos=listOfToDos.filter(task=>task.project!==project);
  const replicaOfToDolist=listOfToDos;
  localStorage.setItem('storedToDos',JSON.stringify(listOfToDos));
return replicaOfToDolist;
}



function sortByDateAndPriorty(a, b)
{
if ( a.dueDate < b.dueDate){
  return -1;
}
if ( a.dueDate> b.dueDate){
  return 1;
}
if ( (a.priorty==="high")&& (b.priorty==="low")){
    return -1;
  }
  if ( (a.priorty==="low")&&( b.priorty==="high")){
    return 1;
  }

return 0;
}

