import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Global } from '@emotion/react'
import globalStyles from '@styles/globalStyles'
import { AlertContextProvider } from '@/context/AlertContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthCheck from '@/components/auth/AuthCheck'

const client = new QueryClient({
  defaultOptions: {},
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <QueryClientProvider client={client}>
      <AlertContextProvider>
        <AuthCheck>
          <App />
        </AuthCheck>
      </AlertContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
reportWebVitals()
