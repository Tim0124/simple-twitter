import Register from './components/register/RegisterForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import LoginForm from 'components/login/LoginForm';
import AdminForm from './components/admin/AdminForm'
import Setting from './components/setting/SettingForm'
import PopularUserList from './UIcomponents/layouts/PopularUserList'
import AdminTweetsList from 'components/admin/AdminTweetsList';
import AdminTweetsCardList from './components/admin/AdminTweetsCardsList'
import UserInfo from 'UIcomponents/layouts/UserInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    </div>
  );
}

export default App;