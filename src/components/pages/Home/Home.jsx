import Pikachu from "../../../assets/img/Pikachu.svg";
import './Home.css'



const Home = () => {
    return (
        <div className="container  text-center">
            <h1 className="py-5">Bienvenido Maestro Pokemón</h1>
            <img className="pikachu" src={Pikachu} alt="Imagen de una Poke Bola" />
        </div>
    )
}

export default Home