import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Login from './components/main/Login';
import SignUp from './components/main/SignUp';
import Home from './components/main/Home';
import UserProvider from './context/UserProvider';

function App() {
  return (

    <BrowserRouter>

      <UserProvider>

        <Routes>

          <Route element={<Navigate to='/main/home' />} path='/' />
          <Route element={<Main />} path='main'>
            <Route element={<Home />} path='home' />
            <Route element={<Login />} path='login' />
            <Route element={<SignUp />} path='signup' />
          </Route>

        </Routes>

      </UserProvider>

    </BrowserRouter>
  );
}

export default App;
