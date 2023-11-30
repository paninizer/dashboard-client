import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider, CSSReset} from "@chakra-ui/react"
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <ChakraProvider>
      <CSSReset />
    	<Router>
        <App />
      </Router>
    </ChakraProvider>
	</React.StrictMode>
)