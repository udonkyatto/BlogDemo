import {React,useState} from 'react'
import {Header} from "./compontens/Header/Header.jsx"
import {Display} from "./compontens/Display/Display.jsx"


const App = () => {
    const [category, setCategory] = useState("All");
    return (
      <div className='app-container'>
        <Header category={category} setCategory={setCategory}/>
        <Display category={category} setCategory={setCategory}/>
      </div>
  )
}

export default App