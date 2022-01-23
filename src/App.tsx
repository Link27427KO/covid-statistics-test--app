import React from 'react'
import { useRoutes } from './routes'
import {BrowserRouter as Router} from 'react-router-dom'
import '../src/style-template/_layout.scss'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.scss'

function App() {
    const routes = useRoutes()
    return (
        <Router>
            {routes}
        </Router>
    )
}

export default App
