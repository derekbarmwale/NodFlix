import { Visibility } from '@material-ui/icons'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import './widgetSm.css'

export default function WidgetSm() {
    const[newUsers, setNewUsers] = useState([])
    useEffect(()=>{
        const getNewUsers = async () =>{
            try {
                const res = await axios.get("/users?new=true", {headers:{
                    token:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWQ5OGNlY2VmNGQ2YjY5NzFmNmQ3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjU5ODM1MywiZXhwIjoxNjU3MDMwMzUzfQ.LKCqP2KCjVqCYJgj3a5RCBe0BnkC9wWpjVA0mEcaMXE" 
                }})
                setNewUsers(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getNewUsers()
    },[])
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            {newUsers.map((user) => (
            <li className="widgetSmListItem">
                <img src={user.profilePic || 
                    "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
                    } className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                </div>
                <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>
                        Display
                </button>
            </li>
            ))}
        </ul>
    </div>
  )
}
