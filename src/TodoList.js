import { useState } from "react";

const TodoList = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...item, inputData]);
      setInputData('')
    }
    
  };

  const deleteItem = (id) =>{
    const updateItem = item.filter((data,ind)=>{
        return ind !== id;
    })
    setItems(updateItem);
  }

  return (
    <>
      <div className="shriniwash">
        <h1>Welcome to the todoList</h1>
        <br></br>
        <input
          type="text"
          placeholder="TodoList ..."
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        <button className="submit" onClick={addItem}>
          AddItem
        </button>
      </div>
      <div className="container">
        {item.map((data, ind) => {
          return (
            <div key={ind}>
              <ul>
                <li>{data}  <button onClick={()=>deleteItem(ind)}>Delete</button></li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
