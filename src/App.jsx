import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Register from './Register';
import Weather from './Weather';
import PrivateRoute from './utils/PrivateRoute';
import AnonymousRoute from './utils/AnonymousRoute';
import LoginForm from './Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element={<AnonymousRoute />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
