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
import AdminTweetsCardList from './components/admin/AdminTweetsCardsList'
import AdminTweetsCard from './components/admin/AdminTweetsCards'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Register />
    </div>
    </BrowserRouter>
  );
}

export default App;