
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homebar/home';
import AboutPage from './Components/About/about';
import ContactPage from './Components/Contact/contact';
import ServicesPage from './Components/Service/service';
import NavBar from './Components/Navbar/nav';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Components/Theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
