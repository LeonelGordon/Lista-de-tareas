import { useState } from "react";
import Todo from "./todo";
import './todoApp.css';

export default function Todoapp () {
            const [title, setTitle] = useState ("Hola");
            const [todos, setTodos] = useState ([])

        function handleChange (e) {
            const value= e.target.value;
    
            setTitle(value)
        }
    
        function handleSubmit (e) {
            e.preventDefault();
                const newTodo= {
                    id: crypto.randomUUID(),
                    title: title,
                    complete: false
            }

        const temp = [...todos];
            temp.unshift(newTodo);

        setTodos(temp);
        setTitle("")
        }

        function hanldeUpdate (id, value){
            const temp = [...todos];
            const item = temp.find( (item) => item.id === id);

        item.title= value;
        setTodos(temp);
        }

        function handleDelete (id) {
            const temp = todos.filter ((item)=> item.id != id);

        setTodos(temp);
        }

    return ( 
    <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                    <input onChange={handleChange} className="todoInput" value={title}/>
                    <input 
                        onClick={handleSubmit} 
                        type= "submit" 
                        value= "Nuevo Recordatorio" 
                        className="buttonCreate"
                    />
            </form>

            <div className= "todosContainer"> {
                todos.map(item => (
                    <Todo key={item.id}  item={item} onUpdate={hanldeUpdate} onDelete={handleDelete}/>
                ))
            }
        </div>
    </div>
);
}