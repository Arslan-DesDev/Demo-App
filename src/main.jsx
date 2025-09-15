import { StrictMode } from 'react'
import { createRoot,ReactDOM } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'

const queryClient= new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
