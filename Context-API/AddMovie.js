import React,{useState,useContext} from 'react';

import { MovieContext } from './MovieContext';

function AddMovie(props) {

    // State variable & function
    const[movieName,setMovieName] = useState('');

    const[moviePrice,setMoviePrice] = useState('');

    const [movies, setMovies] = useContext(MovieContext);

    // Event Handler as callback function-1 
    const updateName = function(e){
        const inputValue = e.target.value;

        // Invoke state function
        setMovieName(inputValue);
    }

    // Event Handler as callback function-2 
    const updatePrice = function(e){
        const inputValue = e.target.value;
        
        // Invoke state function
        setMoviePrice(inputValue);
    }
    
    // Event Handler as callback function-3 
    const handleSubmit = function(e){
        // To stop browser to reload
        e.preventDefault();

        const addNewMovie = function(prevMovie){
            return(
                [...prevMovie,{
                    id:new Date().getTime().toString(),
                    name:movieName,
                    price:moviePrice
                }]
            )
        }

        // To update state value
        setMovies(addNewMovie);

        // To reset form
        setMovieName('');
        setMoviePrice('');
    } 


    return (
        <>

            <form className='ml-2'>

                {/* 1 */}
                <div className="form-group">

                    <input 
                        type="text" 
                        className='form-control form-control-sm'
                        value={movieName}
                        onChange={updateName}
                        placeholder='add movie'
                    />

                </div>

                {/* 2 */}
                <div className="form-group">

                    <input 
                        type="text" 
                        className='form-control form-control-sm'
                        value={moviePrice}
                        onChange={updatePrice}
                        placeholder='add price'
                    />

                </div>

                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add Movie</button>

            </form>
            
        </>
    )
}

export default AddMovie;