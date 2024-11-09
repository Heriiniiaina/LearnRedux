import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';

import { App } from './App'
import "./global.css";
import { store } from './components/store';
createRoot(document.getElementById('root')!).render(
 <Provider store={store}>

   <App />
 </Provider>
  
)