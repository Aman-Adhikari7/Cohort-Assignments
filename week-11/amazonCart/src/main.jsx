
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Store/store.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
      </BrowserRouter>


)
