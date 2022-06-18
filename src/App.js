import React, {useState} from 'react'
import { IoCheckmark, IoTrashOutline, IoRefresh } from "react-icons/io5";
import './App.css';

function App() {
  const [newItem, setnewItem] = useState("");
  const [list, setlist] = useState([]);
  

  const addItem =()=>{
    if(!newItem){
      alert("Please Enter a valid Item");
      return;
    }


    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      done: false
    }

    setlist(oddList => [...oddList, item]);
    setnewItem("");

    console.log(list)
  }

  const deleteItem=(id)=>{
    const newArray = list.filter(item => item.id !== id);
    setlist(newArray);
  }

  const finished=(id)=>{
   let mapped = list.map(task => {
    return task.id === id ? {...task, done: !task.done} : {...task};
   })
   setlist(mapped);
  }

  return (
    <main className="App">
      <section className='mainbody'>
        <header>
          <h1>Todo List App</h1>
          <p>Create your Daily task!!!</p>
        </header>
        <div className="input">
          <input type="text" placeholder="Enter Your Item Here..." value={newItem}  onChange={(e)=> setnewItem(e.target.value)}/>
          <button onClick={()=> addItem()}>Add Item</button>
        </div>

        <ul>
          {
            list.map(item => {
              return(
                <li key={item.id}>
                  <p className='item' style={{textDecoration: item.done && "line-through" }}> {item.value}</p>
                <div className='options'>
                  <p onClick={()=> finished(item.id)}>{item.done ? <IoRefresh/> : <IoCheckmark />}</p>
                 <button onClick={()=>deleteItem(item.id)}><IoTrashOutline/></button> 
                </div>
                </li>
              )
            })
          }
        </ul>
      </section>
    </main>
  );
}

export default App;
