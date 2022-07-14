import React from 'react';



const FilmSelect = ({ allFilms, onFilmSelect }) => {

    const filmOptions = allFilms.map((film, index) => {
        return <option key={index} value={index}>{film.title}</option>
    })

    const handleChange = (event) => {
        const chosenFilm = allFilms[event.target.value]
        onFilmSelect(chosenFilm.url)
    }
    return (
        <select onChange={handleChange}>
            <option selected disabled value="">Please choose a Ghibli film </option>
            {filmOptions}
        </select>

    )
}

export default FilmSelect;