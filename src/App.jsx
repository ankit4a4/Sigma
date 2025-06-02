import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from './Layout';
import Home from "./pages/Home"
import About from './pages/About';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ElectricalTesting from './pages/ElectricalTesting';
import AcousticTesting from './pages/acousticTesting';
import EndoscopeTesting from './pages/EndoscopeTesting';
import MaterialsTesting from './pages/MaterialsTesting';
import ContactUs from './pages/ContactUs';

function App() {


  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/electricalTesting" element={<ElectricalTesting />} />
          <Route path="/acousticTesting" element={<AcousticTesting />} />
          <Route path="/endoscopeTesting" element={<EndoscopeTesting />} />
          <Route path="/materialsTesting" element={<MaterialsTesting />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  )
}


export default App
