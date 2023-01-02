import './App.css';
import Home from '../src/Components/Public/Home/Home';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';

function App() {
  return (

         <div>
         
        <Outlet/>

        </div>
  );
}

export default App;
