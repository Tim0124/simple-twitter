import Register from './components/register/RegisterForm'
import { BrowserRouter } from 'react-router-dom'
import './App.scss';
import LoginForm from 'components/login/LoginForm';
import AdminForm from './components/admin/AdminForm'
import Setting from './components/setting/SettingForm'
import PopularUserList from './UIcomponents/layouts/PopularUserList'
import PopularUser from 'UIcomponents/layouts/PopularUser';
import AdminTweetsList from 'components/admin/AdminTweetsList';
import AdminTweetsItem from 'components/admin/AdminTweetsItem';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <AdminTweetsList />
    </div>
    </BrowserRouter>
  );
}

export default App;