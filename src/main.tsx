import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'

const testTheme = extendTheme({
  styles: {
    global: {
      h3: {
        fontSize: '40px',
        fontWeight: 'bold',
      },
      button: {
        bgColor: 'red.600',
        px: '5px',
      }
    },
  },
});




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true} theme={testTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
