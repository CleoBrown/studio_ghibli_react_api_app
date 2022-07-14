import React from 'react';

const FilmDetail = ({ film }) => {
    return (

        <>



            <div className='image-container'>
                <img className='img' src={film.image} alt={film.title} />
            </div>
            <div className='content'>
                <h2 className='film-title'>{film.title}</h2>
                <h3>{film.original_title}</h3>
                <p><b>Directed by: </b> {film.director}</p>
                <p><b>Produced by: </b> {film.producer}</p>
                <p><b>Release date: </b> {film.release_date}</p>
                <p><b>Running time: </b> {film.running_time}</p>
                <p></p>
                <p className='line-spacing'>{film.description}</p>
            </div>


            {/* <img className='movie_banner' src={film.movie_banner} alt={film.title} /> */}

        </>
    )
}

export default FilmDetail;