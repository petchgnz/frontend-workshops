import './App.css'
import Navbar from "./components/Navbar"
import Contents from './components/Contents'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Contents />
      </div>
      <Footer />
    </>
  );
}

export default App
