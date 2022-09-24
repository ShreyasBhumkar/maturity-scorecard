import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
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
                </tr>
            </thead>
            <tbody>
                {
                    movies.map(movie => (
                        <tr key={movie.id}>
                            <th scope="row">{movie.id}</th>
                            <td>{movie.data.name}</td>
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