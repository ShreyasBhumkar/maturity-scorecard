import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../lib/init-firebase'

const AddMovie = () => {

const [name, setMovieName] = useState('') 

function handleSubmit(e) {
  if (name === ""){
    alert("Movie name cannot be empty..!")
  }
  const addMovie = collection(db, 'movies')
  addDoc(addMovie, {name})
    .then(response => {
      console.log(response.id)
    }).catch(error => 
      console.log("error..",error.message)  
    )
}

return (
    <div style={{marginLeft:'30px'}} className="container">
        <h4 className='mt-3'>Add movies</h4>
        <div>
            <form className='row g-3'
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(e)
              }}>
                <div className="col-md-3">
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
                <div className='col-12'>
                  <button type="submit" className='btn btn-success' style={{marginLeft:'20px'}}>Add Movie</button>
                </div>
            </form>
        </div>
    </div>
  )
}
export default AddMovie