import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Login from './components/main/Login';
import SignUp from './components/main/SignUp';
import Home from './components/main/Home';
import UserProvider from './context/UserProvider';
import Admin from './components/admin';
import AddPackage from './components/admin/AddPackage';
import ALogin from './components/main/ALogin';
import ASignUp from './components/main/ASignUp';
import BrowsePackage from './components/main/BrowsePackage';
import PackageDetails from './components/main/PackageDetails';

function App() {
  return (

    <BrowserRouter>

      <UserProvider>

        <Routes>

          <Route element={<Navigate to='/main/home' />} path='/' />

          <Route element={<Admin />} path='admin'>
            <Route element={<AddPackage />} path='addPackage' />

          </Route>

          <Route element={<Main />} path='main'>
            <Route element={<Home />} path='home' />
            <Route element={<BrowsePackage />} path='browsePackage' />
            <Route element={<PackageDetails />} path='packageDetails/:packageid' />
            <Route element={<ALogin />} path='aLogin' />
            <Route element={<ASignUp />} path='aSignup' />
            <Route element={<Login />} path='login' />
            <Route element={<SignUp />} path='signup' />
          </Route>

          <Route element={<User />} path='user'></Route>

        </Routes>

      </UserProvider>

    </BrowserRouter>
  );
}

export default App;
