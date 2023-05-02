import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../pages/MemoryGame.css";
import Cards from "../components/Cards";

const MemoryGame = () => {
    return(
        <div className="outer_luar">
            <div className="outer_navbar_games">
                <Navbar/>
            </div>
            <section className="first_section_games"></section>
            <div className="body_game">
            
            <div className="MemoryGame">
            <h1>Memory Game</h1>
            <Cards />
        </div>
        </div>
            <Footer/>
        </div>
        
        
    )
}

export default MemoryGame;