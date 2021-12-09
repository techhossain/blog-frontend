import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './components/Menu/Menu';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Service from './pages/Service/Service';
import Web from './pages/Service/Web';
import Seo from './pages/Service/Seo';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="maher">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service/*" element={<Service />}>
          <Route path="web" element={<Web />} />
          <Route path="seo" element={<Seo />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
