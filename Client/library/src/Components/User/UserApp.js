import '../../App.css';
import UserSidebar from './UserSidebar';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';

function App() {
  return (

    <div>
      <div className='main-body'>

        <div className="App">
          <UserSidebar />
        </div>
        <div className='main-child'>
          <Outlet />

        </div>

      </div>
    </div>


  );
}

export default App;
