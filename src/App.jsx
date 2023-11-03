import { Routes } from "react-router-dom"
import Footer from "./component/Footer"
import NavBar from "./component/NavBar"
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
