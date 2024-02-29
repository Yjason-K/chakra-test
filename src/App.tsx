/** @jsxImportSource @emotion/react */
import './App.css'
import { button, div, GitButton } from './assets/styles/MainStyle.tsx'
// import MainHeader from "./assets/styles/MainHeader.tsx";

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
              <GitButton>깃버튼</GitButton>
          </div>
      </>

  )
}

export default App
