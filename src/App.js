import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEvent from './Pages/AddEvent/AddEvent';
import Admin from './Pages/Auth/Admin/Admin';
import Login from './Pages/Auth/Login/Login';
import Signup from './Pages/Auth/Signup/Signup';
import Blog from './Pages/Blog/Blog';
import Donation from './Pages/Donation/Donation';
import Home from './Pages/Home/Home/Home';
import Task from './Pages/Task/Task';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/events" element={<AddEvent />} />
        <Route path="/task" element={<Task />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
