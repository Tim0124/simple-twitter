
import Register from './components/register/RegisterForm'
import { BrowserRouter } from 'react-router-dom'
import './App.css';


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
