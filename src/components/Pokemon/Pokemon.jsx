import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Pokemon.css'

const Pokemon = () => {
    const { namePokemon } = useParams();
    const [pokemon, setPokemon] = useState({
        name: '',
        img: '',
        stats: [],
        type: [],
    });

    useEffect(() => {
        const detallePokemon = async () => {
            try {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${namePokemon}/`
                );
                const data = await response.json();
                setPokemon({
                    name: data.name,
                    img: data.sprites.other.dream_world.front_default,
                    stats: data.stats,
                    type: data.types,
                    weight: data.weight,
                });
            } catch (error) {
                console.error('Error : ', error);
            }
        };

        detallePokemon();
    }, [namePokemon]);

    return (
        <>
            <h1 className='fs-1 text-center mt-5 mb-3'>Pokemón seleccionado: {pokemon.name}</h1>
            <div className='tarjeta container text-center pt-5'>
                <div className="row row-cols-2 align-items-center justify-content-center">
                    <img className='col-8 pokeImg me-5 pe-5 ' src={pokemon.img} alt={pokemon.name} />
                    <div className="col-4 ms-5 ps-5">
                        <h2>{(pokemon.name)}</h2>
                        <ul>
                            {pokemon.stats.map((stat, index) => (
                                <li key={index}>
                                    {stat.stat.name}: {stat.base_stat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pokemon