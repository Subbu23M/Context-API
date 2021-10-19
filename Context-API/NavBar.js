import React,{useContext} from 'react';

import {MovieContext} from './MovieContext';

function NavBar(props) {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <>

            <section className='d-flex justify-content-around align-items-center text-primary'>

                <h1>
                    Context API 
                </h1>

                <h2>
                    Movie List - {movies.length}
                </h2>

            </section>
            
        </>
    )
}

export default NavBar;