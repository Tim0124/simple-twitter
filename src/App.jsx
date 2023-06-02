
import Register from './components/register/RegisterForm'
import { BrowserRouter } from 'react-router-dom'
import './App.scss';
import LoginForm from 'components/login/LoginForm';
import AdminForm from './components/admin/AdminForm'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AdminForm/>
    </div>
    </BrowserRouter>
  );
}

export default App;