import React,{useState,createContext} from 'react';

// 1)
export const MovieContext = createContext();

// 2)
export function MovieProvider(props){

    const movieList = [
        {
            id:1,
            name:'jai bheem',
            price:'5$'
        },

        {
            id:2,
            name:'seetimar',
            price:'15$'
        },

        {
            id:3,
            name:'maestro',
            price:'25$'
        }
    ];

    // State variable & function
    const[movies,setMovies] = useState(movieList);

    return(
        <>

            <MovieContext.Provider value={[movies,setMovies]}>
                {props.children}
            </MovieContext.Provider>

        </>
    )

}