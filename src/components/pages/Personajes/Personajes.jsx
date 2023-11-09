import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Personajes = () => {

    const [namePokemon, setNamePokemon] = useState('');
    const [namesPokemones, setNamesPokemones] = useState([]);
    const navigate = useNavigate();

    const pokeDetails = () => {
        if (namePokemon) {
            navigate(`/personajes/${namePokemon}`);
        }
    };

    const handleSelectChange = ({ target }) => {
        setNamePokemon(target.value);
    };


    useEffect(() => {
        const pokemonList = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
                const data = await response.json();
                const namesPoke = data.results.map((poke) => poke.name);
                setNamesPokemones(namesPoke);
            } catch (error) {
                console.error('Error al obtener listado de pokemones: ', error);
            }
        };

        pokemonList();
    }, []);

    return (

        <>
            <div className="container text-center mt-5 mb-3">
                <h1>Selecciona un Pokemon!</h1>

                <div className="boxSelect">
                    <form onSubmit={pokeDetails}>

                        <select onChange={handleSelectChange} required>
                            <option value="">Selecciona un Pokemon</option>
                            {namesPokemones.map((name, index) => (
                                <option key={index} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                        <button className='bg-danger text-light rounded mx-5 px-3 my-5 py-3 ' type="submit" onClick={pokeDetails}>
                            Ver Detalles
                        </button>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Personajes