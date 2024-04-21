import './App.css';
import { Route } from "wouter";
import test from './components/Admin/test';

const App = () => (
  <>
    <Route path="/about" component={test}/>
  </>
);

export default App;
