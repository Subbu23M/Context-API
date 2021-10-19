import React,{useContext} from 'react';

import { MovieContext } from './MovieContext';

import Movie from './Movie';

function MovieList(props) {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <>
            {
                movies.map(function(movie){
                    // Object Destructuring - ES6
                    const{id,name,price} = movie;

                    return(
                        <Movie
                            key={id}
                            movieName = {name}
                            ticketPrice = {price}
                        />
                    )
                })
            }
            
        </>
    )
}

export default MovieList;