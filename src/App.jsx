
import Register from './components/register/RegisterForm'
import { BrowserRouter } from 'react-router-dom'
import './App.scss';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Register/>
    </div>
    </BrowserRouter>
  );
}

export default App;