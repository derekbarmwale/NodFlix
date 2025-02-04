import { Add, PlayArrow, ThumbDownAltOutlined, ThumbDownOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import "./listItem.scss"

export default function ListItem({index,item}) {
  const [isHovered, setIsHovered] = useState(false)
  const[movie, setMovie] = useState({})

  useEffect(()=>{
    const getMovie = async () => {
        try {
          const res = await axios.get("/movies/find/"+item, {
            headers:{
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWQ5OGNlY2VmNGQ2YjY5NzFmNmQ3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDgwMTc3NSwiZXhwIjoxNjU1MjMzNzc1fQ.umJt353Eu0TNoJWS4T8u3MLd0nOevW_GCHSOLQzu_X8",
            }
          })
          setMovie(res.data)
        } catch (error) {
          console.log(error)
        }
    }
    getMovie()
  },[item])

  return (
    <Link to= "/watch" state={movie}>
    <div className="listItem"
          style={{left: isHovered && index * 255 -50 + index * 2.5}} 
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
          >
        <img src={movie.img} alt="" />
      {isHovered && (
        <>
        <video src={movie.trailer} autoPlay={true} loop/>
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownOutlined className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className="limit">+{movie.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="desc">
            {movie.desc}
          </div>
          <div className="genre">{movie.genre}</div>
        </div>
        </>
      )}
    </div>
    </Link>
  )
}
