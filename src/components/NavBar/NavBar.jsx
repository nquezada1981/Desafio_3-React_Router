import "./NavBar.css"
import { NavLink } from "react-router-dom"



const NavBar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    return (

        <nav className="p-4">
            <div>
                <img className="pokebola" src="/src/assets/img/pokeball.svg" alt="Imagen de Pokebola" />
            </div>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/"> Home </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/personajes"> Personajes </NavLink>
                </li>
            </ul>
        </nav>



    )
}

export default NavBar