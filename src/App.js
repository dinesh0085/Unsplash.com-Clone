

import './App.css';
import Signup from './Pages/Signup';
import Login from "./Pages/Login"
import Navbar from './component/Navbar';
import AllRoutes from './Pages/AllRoutes';
// import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
     {/* <Signup></Signup> */}
    {/* <Login></Login> */}
   <Navbar></Navbar>
   <AllRoutes></AllRoutes>
  
    </div>
  );
}

export default App;
