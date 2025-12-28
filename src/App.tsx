import './App.css'

import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StatePropsPage from './pages/StatePropsPage'
import EffectsPage from './pages/EffectsPage'
import FormsPage from './pages/FormsPage'
import FetchPage from './pages/FetchPage'
import ContextPage from './pages/ContextPage'
import PerformancePage from './pages/PerformancePage'

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <div className="brand">React Learning Lab</div>
        <nav className="nav">
          <NavLink className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')} to="/">
            Inicio
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')} to="/modules/state-props">
            Estado/Props
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')} to="/modules/effects">
            Efectos
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')} to="/modules/forms">
            Forms
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')} to="/modules/fetch">
            Fetch
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')} to="/modules/context">
            Context
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')} to="/modules/performance">
            Performance
          </NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules/state-props" element={<StatePropsPage />} />
          <Route path="/modules/effects" element={<EffectsPage />} />
          <Route path="/modules/forms" element={<FormsPage />} />
          <Route path="/modules/fetch" element={<FetchPage />} />
          <Route path="/modules/context" element={<ContextPage />} />
          <Route path="/modules/performance" element={<PerformancePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
