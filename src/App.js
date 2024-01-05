import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import { Navigate } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes >
        <Route path="/Explore_The_World/" element={ <Home/> } />
        <Route path="/Explore_The_World/about" element={ <About/> } />
        <Route path="/Explore_The_World/contact" element={ <Contact/> } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App;