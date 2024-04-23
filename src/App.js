import './App.css';
import { Route } from "wouter";
import AdminPage from './pages/AdminPage';

const App = () => (
  <>
    <Route path="/admin" component={AdminPage}/>
  </>
);

export default App;
