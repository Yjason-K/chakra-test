/** @jsxImportSource @emotion/react */
import './App.css'
import { button, div } from './assets/styles/MainStyle.tsx'

function App() {

  return (
      <>
          <div>
              <h3>hello world</h3>
              <input type='text'/>
              <button>click</button>
          </div>

          <div css={div}>
              <h3>emotion CSS</h3>
              <input type='text'/>
              <button css={button}>click</button>
          </div>
      </>

  )
}

export default App
