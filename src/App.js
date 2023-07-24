import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode is Enabled", "success")
      // document.title = "TextUtility-DarkMode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode is Enabled", "success")
      // document.title="TextUtility-LightMode"
    }
  }
  return (
    <Router>
      <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <Routes>
          <Route exact path="/about"  element={<About mode={mode} />} />
          <Route exact path="/"
              element={<TextForm heading="Enter The Text Below" mode={mode} showAlert={showAlert}/>}>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
