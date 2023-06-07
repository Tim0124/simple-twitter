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
import AdminTweetsCardList from 'components/admin/AdminTweetsCardsList';
import AdminTweetsList from 'components/admin/AdminTweetsList';
import AdminLayout from 'UIcomponents/layouts/AdminLayout';
import UserInfo from 'UIcomponents/layouts/UserInfo';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<AdminForm />} />
          <Route element={<AdminLayout />}>
            <Route path='admin/tweets' element={<AdminTweetsList />} />
            <Route path='admin/users' element={<AdminTweetsCardList />} />
          </Route>
          <Route element={<Layout />}>
            <Route path='/home' element={<MainTweets />} />
          </Route>
          <Route path='/user' element={<UserInfo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//test

export default App;