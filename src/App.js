
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
function App() {
  return (
    <div className='App w-100'>
      <div style={{height:"70px"}} className="w-100"><NavBar/></div>
        <Outlet/>
    </div>
  );
}

export default App;
