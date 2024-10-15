import { useState } from "react"
import { Featured } from "../../components/featured/Featured"
import List from "../../components/list/List"
import { Navbar } from "../../components/navbar/Navbar"
import "./home.scss"
import axios from "axios"

const Home = ({type}) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useState(()=>{
    const getRandomLists = async ()=>{
      try {
        const res = await axios.get(`lists${type ? "?type=" + type:""}${genre ? "&genre=" + genre:""}`,
          {
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWQ5OGNlY2VmNGQ2YjY5NzFmNmQ3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTUxNjg0MiwiZXhwIjoxNjU1OTQ4ODQyfQ.iwfBXTnnU1pJDmHL5MLLdvjE89XJLsJ6vQcjTveNdiY"
            },
          }
        )
        setLists(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomLists()
  },[type,genre])
  return (
    <div className="home">
        <Navbar />
        <Featured type={type } setGenre={setGenre} />
        {lists.map((list) => (
          <List list={list} />
        ))}
        
    </div>
  )
}

export default Home
