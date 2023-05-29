import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { DndProvider, useDrop } from "react-dnd"
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css'
import DndComp, { PictureList } from './components/dndComp'
import Picture, { PictureProps } from './components/picture'

function App() {
  const [count, setCount] = useState(0)
  const [board, setBoard] = useState<any[]>([])
  const [{isOver}, drop] = useDrop(() => ({
    accept: "image", 
    drop: (item: PictureProps) => addImageToBard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
  })
  }))

  const addImageToBard = (id: number) => {
    const selectedPicture = PictureList.filter((item) => {return item.id === id})
    setBoard((board) => [...board, selectedPicture[0]])
  }

  return (
    <DndProvider backend={HTML5Backend}> 
    <div className="App">
      <div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
      <div className='flex-row-style'>
        <DndComp />
        <div className='drop-sect' ref={drop}>
          {
            board.map((picture) => {
              return <Picture id={picture.id} url={picture.url} key={picture.id}/>
            })
          }
        </div>
      </div>
    </div>
    </DndProvider>
  )
}

export default App
