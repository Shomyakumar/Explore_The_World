import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  const[loggedIn,setLoggedIn]=useState(false);
  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes >
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/Explore_The_World" element={ <Home/> } />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}/>
        <Route path="/signup" element={<Signup  setLoggedIn={setLoggedIn}/>}/>
      </Routes>
    </div>
  )
}

export default App;