import React, { useState } from 'react'
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"
import { db } from '../lib/init-firebase'

const MovieList = () => {

const [movies, setMovies] = useState([]) 

// useEffect(() => {
//     getMovies()
// },[])

// useEffect(() => {
//     console.log("Movies..", movies)
// },[movies])

const getMovies = () => {
    const getMoviesCollectionRef = collection(db, 'movies')
    getDocs(getMoviesCollectionRef)
    .then(response => {
        const movs = response.docs.map(doc => ({
            data: doc.data(),
            id: doc.id
        }))
        setMovies(movs)
    }).catch(error => console.log("Error Message..!", error.message))
}

const deleteMovie = (id) => {
    const deleteMovieRef = doc(db, "movies", id)
    deleteDoc(deleteMovieRef)
        .then(() => console.log('Movie id Deleted Successfully.!'))
        .catch(error => console.log("Error..", error.message))
}
return (
    <div>
        <div style={{marginLeft:'20px'}} className='container'>
            <h4 className='mt-3'>MovieList</h4>
            <button className="btn btn-outline-primary" onClick={getMovies()}>Refresh List</button>
        </div>
        <div className='container-fluid'>
            <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Movie Id</th>
                    <th scope="col">Movie Name</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map(movie => (
                        <tr key={movie.id}>
                            <th scope="row">{movie.id}</th>
                            <td>{movie.data.name}</td>
                            <td>
                                <button 
                                    className='btn btn-danger'
                                    onClick={() => deleteMovie(movie.id)}
                                >
                                    Delete Movie
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    </div>
  )
}
export default MovieList