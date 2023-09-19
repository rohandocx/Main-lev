
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Homepage from './components/Homepage'
import Register from './components/Register'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/homepage' element={<Homepage/>} />
   </Routes>
    </div>
  );
}

export default App;
