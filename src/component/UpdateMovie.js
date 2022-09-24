import React, { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore"
import { db } from '../lib/init-firebase'

const UpdateMovie = () => {

const [name, setMovieName] = useState('') 
const [id, setMovieId] = useState('') 

function handleSubmit(e) {
  if (name === "" || id === ""){
    alert("Movie name and id cannot be empty..!")
  }
  const updateMovie = doc(db, 'movies', id)
  updateDoc(updateMovie, { name })
    .then(response => {
      console.log(response)
    }).catch(error => 
      console.log("error..",error.message)  
    )
}

return (
    <div style={{marginLeft:'30px'}} className="container mb-3">
        <h4 className='mt-3'>Update movies</h4>
        <div>
            <form className='row g-3'
                onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(e)
              }}>
                <div className='col-md-3'>
                <label htmlFor="id" className="form-label">Movie Id: </label>
                  <input 
                    id="id" 
                    type="text" 
                    className="form-control" 
                    value={id} 
                    onChange={e => {
                      setMovieId(e.target.value)
                    }}
                  />
                </div>
                <div className='col-md-3'>
                <label htmlFor="name" className="form-label">Movie Name: </label>
                  <input 
                    id="name" 
                    type="text" 
                    className="form-control" 
                    value={name} 
                    onChange={e => {
                      setMovieName(e.target.value)
                    }}
                  />
                </div>
                    
                <div>
                  <button type="submit" className='btn btn-primary' style={{marginLeft:'20px'}}>Update Movie</button>
                </div>
            </form>
        </div>
    </div>
  )
}
export default UpdateMovie