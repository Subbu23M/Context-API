import React from 'react';

function Movie(props) {
    // Object Destructuring - ES6
    const{movieName,ticketPrice} = props;

    return (
        <article className='ml-3'>

            <h2 className='text-warning text-capitalize'>
                {movieName}
            </h2>

            <p className='lead'>
                Movie Ticket Price - {ticketPrice}
            </p>

            <hr />

        </article>
    )
}

export default Movie;