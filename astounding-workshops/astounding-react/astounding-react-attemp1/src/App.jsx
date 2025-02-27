import './App.css'
import Navbar from "./components/Navbar"
import Contents from './components/Contents'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Contents />
      </div>
    </>
  )
}

export default App
