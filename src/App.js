import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtility" />
      <div className="container my-3">
        {/* <TextForm heading="Enter The Text Below"/> */}
        <About></About>
      </div>
      
    </>
  );
}

export default App;
