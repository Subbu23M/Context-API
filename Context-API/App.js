import React from 'react';

import { MovieProvider } from './MovieContext';

import NavBar from './NavBar';

import AddMovie from './AddMovie';

import MovieList from './MovieList';

function App(props) {
    return (
        <MovieProvider>

            <>
                <h1 className='text-center mt-2 text-secondary'>
                    About Context API - State Management 
                </h1>

                {/* Child Component Instances */}

                <NavBar/>

                <AddMovie/>

                <MovieList/>
            </>

        </MovieProvider>
        
    )
}

export default App;