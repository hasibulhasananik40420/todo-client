import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import Login from './Components/Login';
import Singup from './Components/Singup';
import RequireAuth from './Components/RequireAuth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
               <ToastContainer />
      <Navbar></Navbar>
       <Routes>
        <Route path="/todolist" element={<RequireAuth><TodoList /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
      </Routes>
    </div>
  );
}

export default App;
