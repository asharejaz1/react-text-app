import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import { useState } from 'react'


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggle = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = "#121212"
      showAlert("Dark Mode has been enabled","success")
      document.title = "TextUtils - Dark"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
      document.title = "TextUtils"
    }
  }


  return (
    <>

    <Navbar title="TextUtils" mode={mode} toggle={toggle}/>
    
    <Alert alert={alert}/>

    <TextForm heading="Enter Text Below To Analyze" mode={mode} showAlert={showAlert}/>
    
    <About mode={mode}/>
    
    </>
  
  );
}

export default App;

