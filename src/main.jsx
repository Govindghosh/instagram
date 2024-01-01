import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store.js'
import { Provider } from 'react-redux'


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', '#000')(props),
        color: mode('#000', 'whiteAlpha.900')(props),
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
      <App />
      </Provider>
      </ChakraProvider> 
    </BrowserRouter>
  </React.StrictMode>,
)
