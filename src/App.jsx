import { Routes, Route } from "react-router-dom"
import Footer from "./component/Footer"
import NavBar from "./component/NavBar"
import Home from "/home/xmalone0920/blogApp/frontend/src/pages/Home.jsx"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
