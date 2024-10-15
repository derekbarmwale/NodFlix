
import './App.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../client/src/authContext/AuthContext';

function App() {
  const {user} = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home type="movie"/>: <Navigate to="/register" replace/>} />
        <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route exact path="/register" element={!user ? <Register /> : <Navigate to="/"/>} />
        {user &&
        <> 
        (
          <Route path="/movies" element={<Home type="movie" />} />
          <Route path="/series" element={<Home type="series"/>} />
          <Route path="/watch" element={<Watch />} />
        )
        </>
        }
      </Routes>
    </BrowserRouter>

  );
}

export default App;
 