import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'

const testTheme = extendTheme({
  /**
   *   변수 등록
   *   Theme Key 에 등록되는 방식
   *   space, colors, fonts, fonts, fontSizes
   *   fontWeights, lineHeights, letterSpacings, sizes
   *   breakpoints, borders, borderWidths, borderStyles
   *   radii, zIndices, blur, shadows
   *   :root {
   *     --chakra-fontSizes-abc: '20px';
   *     --chakra-colors-efg: '#32a852';
   *     --chakra-space-efg: '#32a852';
   *   } 다음과 같이 css 가 생성 됩니다.
    */
  fontsize: {
    abc: '20px'
  },
  colors: {
    efg: '#32a852'
  },
  space: {
    hij: '5px'
  },
  // global style 추가
  // https://chakra-ui.com/docs/styled-system/style-props pops 확인 필요
  styles: {
    global: {
      h3: {
        fontSize: 'abc',
        fontWeight: 'bold',
      },
      button: {
        ml: 'hij',
        bgColor: 'red.600',
        px: '5px',
        _active: {
          bgColor: 'efg'
        },
        _hover: {
          opacity: '.5'
        }
      },
      input: {
        width: '50%',
        borderRadius: '15px',
        textColor: 'blue.300',
        borderWidth	: '1px',
        borderColor: 'gray.500'
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
