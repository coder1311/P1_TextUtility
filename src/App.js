// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
      <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter The Text Below" mode={mode}/>
        {/* <About></About> */}
      </div>
      
    </>
  );
}

export default App;
