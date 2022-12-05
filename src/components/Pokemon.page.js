import React, { useState, useEffect } from 'react';

export const PokemonPage = () => { 

    // fetch pokemon and store in state
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            }
        );
    }, []);


    if (loading) {
        return <div>Loading...</div>
    }   

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    );
} 