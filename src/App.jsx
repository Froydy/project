import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editIndex, setEditIndex] = useState(null)
  const [editValue, setEditValue] = useState('')

  const handleAdd = () => {
    if (inputValue.trim() === "") return
    setItems([...items, inputValue])
    setInputValue('')
  }

  const handleDelete = (index) => {
    const newItems = items.filter((_, ind) => ind != index)
    setItems(newItems)
  }

  const handleEdit = (index) => {
    setEditIndex(index)
    setEditValue(items[index])
  }

  const handleSave = (index) => {
    if (editValue.trim() === "") return
    const newItems = [...items]
    newItems[index] = editValue.trim()
    setItems(newItems)
    setEditIndex(null)
    setEditValue('')
  }

  return (
    <>
      <h2>My list</h2>
      <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type='text' placeholder='kolya loh...!'></input>
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((i, index) => (
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            {index == editIndex
              ? (<>
                <input type='text' value={editValue} onChange={(e) => setEditValue(e.target.value)}></input>
                <button onClick={() => handleSave(index)}>Save</button>
                <button onClick={() => setEditIndex(null)}>Cancel</button>
              </>)
              : (<>
                <li key={i}>{i}</li>
                <button onClick={() => handleDelete(index)}>delete</button>
                <button onClick={() => handleEdit(index)}>edit</button>
              </>)}

          </div>
        ))}
      </ul>

    </>
  )
}

export default App
