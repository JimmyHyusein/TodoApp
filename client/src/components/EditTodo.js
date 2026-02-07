import React, {useState} from "react";
import{ API_URL } from "../api.js";

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description);

    //edit description function

    const updateDescription = async e =>{
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`${API_URL}/todos/${todo.todo_id}`,{
                method:"PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)

            });
            window.location = "/";
        } catch (error) {
            console.log(error.message)
        }
    }
    return <>
    
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}` }>
  Edit
</button>


<div class="modal" id={`id${todo.todo_id}`}onClick={()=> setDescription(todo.description)}>
  <div class="modal-dialog">
    <div class="modal-content">

     
      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={()=> setDescription(todo.description)}></button>
      </div>

      
      <div class="modal-body">
        <input type="text" className="form-control" value ={description} onChange={e=>setDescription(e.target.value)}/>
      </div>

      
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"onClick={()=> setDescription(todo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
    </>
}

export default EditTodo;