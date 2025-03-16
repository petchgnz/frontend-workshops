import './App.css'
import Navbar from "./components/Navbar"
import Contents from './components/Contents'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Contents />
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

export default App
