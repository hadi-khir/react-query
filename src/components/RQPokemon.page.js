import {useQuery} from 'react-query';

export const RQPokemonPage = () => { 

    const {isLoading, isError, error, data } = useQuery('pokemon', () => {
        return fetch('http://localhost:3001/pokemon')
            .then(response => response.json())
    });

    if(isError) {
        return <div>Error: {error.message}</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }


    // iterate over data and return the names of the pokemon in a list
    return (
        <div>
            <h1>Pokemon</h1>
            <ul>
                {data.map(pokemon => (
                    <li key={pokemon.name.english}>{pokemon.name.english}</li>
                ))}
            </ul>
        </div>
    );
} 