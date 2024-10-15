import { useState } from "react"
import { Search,Notifications,ArrowDropDown } from "@mui/icons-material"
import "./navbar.scss"
import { Link } from "react-router-dom"

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="" className="logo" />
                <Link to="/" className="link">
                    <span>Homepage</span>
                </Link>
                <Link to="/series" className="link">
                    <span>Series</span>
                </Link>
                <Link to="/movies" className="link">
                    <span>Movies</span>
                </Link>
                
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon" />
                <img src="https://pbs.twimg.com/media/EuScUGaWgAMfx4L.jpg" alt="" className="profile" />
                <div className="profile">
                    <ArrowDropDown className="icon" />
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
