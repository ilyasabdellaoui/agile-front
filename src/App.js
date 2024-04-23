import './App.css';
import { Route } from "wouter";
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

const App = () => (
  <>
    <Route path="/" component={LoginPage}/>
    <Route path="/admin" component={AdminPage}/>
  </>
);

export default App;
