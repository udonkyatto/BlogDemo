import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogContextProvider from './compontens/context/blogContext.jsx' // 导入 Provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogContextProvider>
       <App />
    </BlogContextProvider>
  </StrictMode>,
)
