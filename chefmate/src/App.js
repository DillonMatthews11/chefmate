
import './App.css';
import StartPage from './components/StartPage/StartPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<StartPage />} />
            
          </Routes>
      </Router>
          
        
      </header>
    </div>
  );
}

export default App;
