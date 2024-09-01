import App from './App'
import './style/index.css?modules=false'

import { BrowserRouter as Router } from 'react-router-dom'

export default function RootComponent (props) {
  return <Router>
    <App />
  </Router>
}