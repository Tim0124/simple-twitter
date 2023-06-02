
import Register from './components/register/RegisterForm'
import { BrowserRouter } from 'react-router-dom'
import './App.scss';
import LoginForm from 'components/login/LoginForm';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <LoginForm/>
    </div>
    </BrowserRouter>
  );
}

export default App;