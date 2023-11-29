
import './App.css';
import StartPage from './components/StartPage/StartPage';
import LoginPage from './components/LoginPage/LoginPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './components/Home/Home';
function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
      </Router>
          
        
      
    </div>
  );
}

export default App;
