import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Games from "./pages/Games";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import MemoryGame from "./pages/MemoryGame";
import Article from "./pages/Article";

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/game" element={<Games />}/>
        <Route path="/article" element={<Articles />}/>
        <Route path="/contact" element={<HomePage />}/>
        <Route path="/login" element={<HomePage />}/>
        <Route path="/register" element={<HomePage />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/memorygame" element={<MemoryGame />}/>
        <Route path="/artikel1" element={<Article />}/>
      </Routes>
    </Router>
  )
}

export default App
