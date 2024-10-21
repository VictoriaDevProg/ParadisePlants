import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './redux/store';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/Landing/LandingPage';
import PlantListings from './pages/Listing/PlantListings';
import Cart from './pages/Cart/CartPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={<PlantListings />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
