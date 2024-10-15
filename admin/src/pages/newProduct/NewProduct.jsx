import { useContext, useState } from 'react'
import './newProduct.css'
import storage from '../../firebase'
import { createMovie } from '../../context/movieContext/apiCalls'
import { MovieContext } from '../../context/movieContext/MovieContext'

export default function NewProduct() {
    const [movie, setMovie] = useState(null)
    const [img, setImg] = useState(null)  
    const [imgTitle,setimgTitle] = useState(null)
    const [imgSm, setimgSm] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [video, setVideo] = useState(null)
    const [uploaded, setUploaded] = useState(0)

    const {dispatch} = useContext(MovieContext)

    const handleChange = (e) => {
        const value = e.target.value
        setMovie({...movie, [e.target.name]:value})
    }

    const upload = (items) => {
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const uploadTask = storage.ref(`/items/${fileName}`).put(item.file)
            uploadTask.on("state_changed", (snapshot)=>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log("Upload is " + progress + " % done. ")
            },(err) => {console.log(err)}, ()=>{
                uploadTask.snapshot.ref.getDownloadURL().then(url=>{
                    setMovie(prev=>{
                        return {...prev, [item.label]:url }
                    })
                    setUploaded((prev) => prev + 1)
                })
            })
        })
    }

    const handleUpload = (e) =>{
        e.preventDefault()
        upload([
            {file:img, label:"img"},
            {file:imgTitle,label:"imgTitle"},
            {file:imgSm,label:"imgSm"},
            {file:trailer,label:"trailer"},
            {file:video,label:"video"}
        ])
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        createMovie(movie,dispatch)
    }

  return (
    <div className="newProduct">
        <h1 className="newProductTitle">New Movie</h1>
        <form className="newProductForm">
            <div className="newProductItem">
                <label>Image</label>
                <input onChange={(e)=>setImg(e.target.files[0])} type="file" name="img" id="img" />
            </div>
            <div className="newProductItem">
                <label>Title image</label>
                <input onChange={(e)=>setimgTitle(e.target.files[0])} type="file" name="imgTitle" id="imgTitle" />
            </div>
            <div className="newProductItem">
                <label>Thumbnail image</label>
                <input onChange={(e)=>setimgSm(e.target.files[0])} type="file" name="imgSm" id="imgSm" />
            </div>
            <div className="newProductItem">
                <label>Title</label>
                <input onChange={handleChange} type="text" name="title" id="title" placeholder="John Wick" />
            </div>
            <div className="newProductItem">
                <label>Description</label>
                <input onChange={handleChange} type="text" name="description" id="description" placeholder="description"/>
            </div>
            <div className="newProductItem">
                <label>Year</label>
                <input onChange={handleChange} type="text" name="year" id="year" placeholder="Year"/>
            </div>
            <div className="newProductItem">
                <label>Genre</label>
                <input onChange={handleChange} type="text" name="genre" id="genre" placeholder="Genre"/>
            </div>
            <div className="newProductItem">
                <label>Duration</label>
                <input onChange={handleChange} type="text" name="duration" id="duration" placeholder="Duration"/>
            </div>
            <div className="newProductItem">
                <label>Limit</label>
                <input onChange={handleChange} type="text" name="limit" id="limit" placeholder="limit"/>
            </div>
            <div className="newProductItem">
                <label>Is Series?</label>
                <select name="active" id="isSeries" onChange={handleChange} >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </div>
            <div className="newProductItem">
                <label>Trailer</label>
                <input onChange={(e)=>setTrailer(e.target.files[0])} type="file" name="trailer" />
            </div>
            <div className="newProductItem">
                <label>Video</label>
                <input onChange={(e)=>setVideo(e.target.files[0])} type="file" name="video" />
            </div>
            {uploaded === 5 ? ( 
                <button className="newProductButton" onClick={handleSubmit}>Create</button>
            ) : (
                <button className="newProductButton" onClick={handleUpload} >Upload</button>
            )}
        </form>
    </div>
  )
}
