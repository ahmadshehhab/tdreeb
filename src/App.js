import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [Input, setInput] = useState("");
  const [Items, setItems] = useState([]);
  const [Counter, setCounter] = useState(0);
  const [Editable, setEditable] = useState(false);
  const [Index, setIndex] = useState(0);
  const [Checked, setChecked] = useState(false);
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("array")))
    
  },[Counter]);
  const handleSubmit = (e) =>{
    e.preventDefault()
    setCounter(Counter +1)
    
   /*  let a = Items
    a.push(Input)
    let ob = a.map(e => {
      return {"checked":false , "title":Input}
    }) */
    
    Items.push({"checked":false , "title":Input})
    localStorage.setItem("array" , JSON.stringify(Items))

  }
  const edit = (e) =>{
    console.log(e)
    setEditable(!Editable)
    console.log(document.getElementsByClassName('add-task')[0].value = Items[e].title)
    setIndex(e)
  }
  const handleEdit = (e) => {
    e.preventDefault()
    let a = Items
    a[Index].title = Input
    
    setItems(a)
    setCounter(Counter+1)
    localStorage.setItem("array" , JSON.stringify(Items))
    setEditable(false)
  }
  const del = (e) =>{
    let a = Items
    a.splice(e,1)
    setItems(a)
    setCounter(Counter+1)
    localStorage.setItem("array" , JSON.stringify(Items))

  }
  const check = (i) =>{
    let a = Items
    a[i].checked = !a[i].checked
    setItems(a)
    setCounter(Counter+1)
    localStorage.setItem("array" , JSON.stringify(Items))

  }
  return (
    <div className="todo-container">
      <h1>
        <span className="second-title">Todo List App</span>
      </h1>
      <form>
        <input
          className="add-task"
          type="text"
          placeholder="Add new task ..."
          onChange={(e) => setInput(e.target.value)}
        />
       {!Editable && <button type="submit" className="add-button" onClick={handleSubmit}>
          Add
        </button>}
        {Editable && <button type="submit" className="add-button" onClick={handleEdit}>
          Edit
        </button>}
      </form>
      
      {Items.map((e ,i) => (
        
        <div className="todo">
        
        <div className="todo-text">
          <input className="checkbox" type="checkbox" id="isCompleted" checked={e.checked} onChange={() =>check(i)}/>
        </div>
        <div>
          <>
          { e.title}
          
          
          </>
          </div>

        <div className="todo-actions">
          <button className="submit-edits" onClick={() => edit(i)} >Edit</button>
          <button className="submit-edits"  onClick={() => del(i)}>Delete</button>
        </div>
      </div>
        ))} 
    </div>
  );
};
export default App;
