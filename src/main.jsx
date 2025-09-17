import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './index.css' // <- importante

createRoot(document.getElementById('root')).render(<App />)