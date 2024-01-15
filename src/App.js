import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"


function App() {
  const[loggedIn,setLoggedIn]=useState(false);
  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} />
      <Routes >
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/Explore_The_World" element={ <Home/> } />
        <Route path="/login" element={<div>longin</div>}/>
        <Route path="/signup" element={<div>signup</div>}/>
      </Routes>
    </div>
  )
}

export default App;