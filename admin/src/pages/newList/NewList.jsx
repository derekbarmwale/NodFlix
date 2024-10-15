import { useContext, useState } from 'react'
import './newList.css'
import storage from '../../firebase'
import { createMovie, getMovies } from '../../context/movieContext/apiCalls'
import { MovieContext } from '../../context/movieContext/MovieContext'
import { ListContext } from '../../context/listContext/ListContext'
import { useEffect } from 'react'
import { createList } from '../../context/listContext/apiCalls'
import { useHistory } from 'react-router-dom'

export default function NewProduct() {
    const [list, setList] = useState(null)
    const history = useHistory()
    const {dispatch} = useContext(ListContext)
    const {movies, dispatch:movieDispatch} = useContext(MovieContext)

    useEffect(()=>{
        getMovies(movieDispatch)
    },[movieDispatch])

    const handleChange = (e) => {
        const value = e.target.value
        setList({...list, [e.target.name]:value})
    }

    const handleSelect = (e) =>{
        let value = Array.from(e.target.selectedOptions, (option) => option.value)
        setList({...list, [e.target.name]:value})
    }

    console.log(list)

    const handleSubmit = (e) =>{
        e.preventDefault()
        createList(list, dispatch)
        history.push("/lists")
    }

  return (
    <div className="newProduct">
        <h1 className="newProductTitle">New List</h1>
        <form className="newProductForm">
         <div className="formLeft">
            <div className="newProductItem">
                <label>Title</label>
                <input onChange={handleChange} type="text" name="title" id="title" placeholder="Popular Movies" />
            </div>
            <div className="newProductItem">
                <label>Genre</label>
                <input onChange={handleChange} type="text" name="Genre" id="Genre" placeholder="Action"/>
            </div>
            <div className="newProductItem">
                <label>Type</label>
                <select onChange={handleChange} >
                    <option >Type</option>
                    <option value="movie" >Movie</option>
                    <option value="series">Series</option>
                </select>
            </div>
            </div>
            <div className="formRight">
            <div className="newProductItem">
                <label>Content</label>
                <select multiple name="content" 
                 onChange={handleSelect}
                 style={{height:"300px"}}
                  >
                    {movies.map((movie) => (
                        <option key={movie._id} value={movie._id} >{movie.title}</option>
                    ))}
                </select>
                </div>
         
                </div>
            <button className="newProductButton" onClick={handleSubmit}>Create</button>
            
        </form>
    </div>
  )
}
