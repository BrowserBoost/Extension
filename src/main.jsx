import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeUIProvider } from 'theme-ui'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeUIProvider theme={theme}>
    <App />
  </ThemeUIProvider>
)
