const ToDoListItemCreator=(title,priorty,notes,dueDate,dueTime,project)=>
{
return{title,priorty,notes,dueDate,dueTime,project};
}

export const listOfToDos=[];

export function updateNewTodosToList(title,priorty,notes,dueDate,dueTime,project)
{
    const newToDo=ToDoListItemCreator(title,priorty,notes,dueDate,dueTime,project);
//    console.log(newToDo);
    listOfToDos.push(newToDo);
    //console.log(listOfToDos);
}

export function deleteToDos(title)
{
    const searchIndex=listOfToDos.findIndex((todo)=>todo.title==title);
  //  console.log(searchIndex);
    listOfToDos.splice(searchIndex,1);

}

export const projectList=[];

export function getProjectItems(project)
{
    const filteredList=listOfToDos.filter(task=>task.project===project);

    return filteredList;

}