import '../../App.css';
import Sidebar from './sidebar';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';

function App() {
  return (

    <div>
      <div className='main-body'>

        <div className="App">
          <Sidebar />
        </div>
        <div className='main-child'>
          <Outlet />

        </div>

      </div>
    </div>


  );
}

export default App;
