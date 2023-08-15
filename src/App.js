import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';   //v6 react switch is change to routes followed by syntax
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light')
  const [emoji, setemoji] = useState('😎🤏')
  const [alert, setAlert] = useState(null)
  const [activeLink, setActiveLink] = useState('/')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleLink = (path) => {
    setActiveLink(path);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042745'
      document.body.style.color = 'white'
      setemoji('😳🕶️🤏')
      showAlert("Darkmode", "success");
      

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      setemoji('😎🤏')
      showAlert("Lightmode", "success");

    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} emote={emoji} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route exact path="/About" element={<About mode={mode} toggleLink={toggleLink} activeLink={activeLink}/>} />
            <Route exact path="/" element={<TextForm heading="Enter text here" mode={mode} showAlert={showAlert} toggleLink={toggleLink} activeLink={activeLink}/>} />
          </Routes>
        </div>
      </Router>
      <Footer mode={mode} />

    </>
  );
}

export default App;
