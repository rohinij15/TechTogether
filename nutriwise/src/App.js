import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './login';
import HomePage from './HomePage';
import Profile from  './profile'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
    return (
    <BrowserRouter>
      <Routes>
       {/* <Route path='/login' element={<Login/>}/> */}
       <Route path='/' element={<HomePage/>}/>
       <Route path = '/Profile' element = {<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
