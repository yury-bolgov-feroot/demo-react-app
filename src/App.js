import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Register from './Register';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello World!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/weather' element={<Weather/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
       </Routes>
    </div>
  );
}

export default App;
