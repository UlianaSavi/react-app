import logo from './logo.svg';
import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Home } from './pages/Home';
import { ROUTES } from './constants';

export function App() {
  return (
    <div className="App container">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h3 className="title">Service for work with GitHub GraphQL API</h3>
      </header>

      {/* <Router>
        <Switch><Page /></Switch>
      </Router> */}

      <Router>
        <Routes>
            <Route path={ROUTES.empty} element={<Navigate to={ROUTES.welcome} replace={true} />} />
            <Route path={ROUTES.welcome} element={<Welcome/>} />
            <Route path={ROUTES.home} element={<Home/>} />
        </Routes>
      </Router>

      <footer></footer>
    </div>
  );
}
