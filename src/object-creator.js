const ToDoListItemCreator=(title,priorty,notes,dueDate,dueTime)=>
{
return{title,priorty,notes,dueDate,dueTime};
}

export const listOfToDos=[];

export function updateNewTodosToList(title,priorty,notes,dueDate,dueTime)
{
    const newToDo=ToDoListItemCreator(title,priorty,notes,dueDate,dueTime);
//    console.log(newToDo);
    listOfToDos.push(newToDo);
    console.log(listOfToDos);
}