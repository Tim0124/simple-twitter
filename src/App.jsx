import Register from './components/register/RegisterForm'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.scss';
import LoginForm from 'components/login/LoginForm';
import AdminForm from './components/admin/AdminForm'
import Setting from './components/setting/SettingForm'
import PopularUserList from './UIcomponents/layouts/PopularUserList'
import PopularUser from 'UIcomponents/layouts/PopularUser';
import MainTweets from 'components/main/MainTweets';
import Layout from 'UIcomponents/layouts/Layout';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Outlet/>}/>
          <Route path='/main' element={<MainTweets/>} />
          </Route>
      </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;