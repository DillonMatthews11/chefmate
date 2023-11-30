
import './App.css';
import StartPage from './components/StartPage/StartPage';
import LoginPage from './components/LoginPage/LoginPage';
import { SavedRecipes } from './components/SavedRecipes/SavedRecipes';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { MyRecipes } from './components/MyRecipes/MyRecipes';
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
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/saved" element={<SavedRecipes />} />
            <Route path="/myrecipes" element={<MyRecipes />} />
          </Routes>
      </Router>
          
        
      
    </div>
  );
}

export default App;
