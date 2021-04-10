import React, {useState} from "react";
import "./TodoItem.css";

function Todo(props) {

  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  }

  const { content, id } = props;
  
  return (
    <div className={`todo-item ${checked ? 'completed' : ''}`} onClick = {handleClick}>
      <p>
        {content} 
      </p>
      <i className="fas fa-trash" onClick = { () => props.delete(id)}></i>
    </div>
  );
}

export default Todo;
