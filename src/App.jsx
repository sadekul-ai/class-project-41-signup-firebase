
import { RouterProvider } from 'react-router-dom'
import './App.css'

import router from './routing/Router/Router'

function App(children) {
  

  return (
    <RouterProvider router={router}>

      
      {children}
      
  
    </RouterProvider>
  )
}

export default App
