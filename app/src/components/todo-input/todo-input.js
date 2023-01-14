import React, { useState } from "react";
import "./todo-input.css"


const TodoInput = () => {
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([])
  



  const inputChange = (e) => {
    e.preventDefault()
    setInput(e.currentTarget.value)
    
  }

  const addTodo = () => {
    if(!input) {
        alert('Please fill task')
    } else {

    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        isDone: false,
        edit: false
      }
    ]);
    setInput("");
  };

  console.log(input)

  }



  const deleteTodo = (id) => {
   const removeItem =  todoList.filter((todo) =>{
      return todo.id !==id 
      
    })

    setTodoList(removeItem)
  }


const complete = (id) => {
  const toggledTodo = todoList.find((todo) => todo.id === id);

  toggledTodo.isDone = !toggledTodo.isDone;

  setTodoList([...todoList]);
  console.log(toggledTodo)
};


const editTodo = (id) => {
  const editTodos = todoList.find((todo) => todo.id === id);
  editTodos.edit = !editTodos.edit

  setTodoList([...todoList])

  console.log(editTodos)
  setInput(editTodos.task)


}

  return (
    <>
    <form>
      <input type="text" placeholder="Type your todos" onChange={inputChange} value={input}></input>   
    </form>
    <div className="todo-input">
    <button onClick={addTodo}>Submit</button> 
    </div>
  {todoList.map((todo) =>{
      return (
        <div className="list" key={todo.id}>
            <ul>
                <li style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
                    {todo.task}
                    <button onClick={() => complete(todo.id)}>Complete</button>
                    <button onClick={() => editTodo(todo.id)}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            </ul>
        </div>   
      )
  })
  }
  </>
  )
}

export default TodoInput