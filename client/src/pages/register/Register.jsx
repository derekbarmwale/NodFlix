import "./register.scss"
import {useState, useRef} from "react"


export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () =>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = () =>{
        setPassword(passwordRef.current.value)
    }


  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="" className="logo" />
                <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited Movies, Tv shows, and More</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your Email to create or restart your membership.
            </p>
            {!email ? ( <div className="input">
                <input type="email" placeholder="Email address" ref={emailRef}/>
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>):
                ( <form className="input">
                <input type="password" placeholder="password" ref={passwordRef}/>
                <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>)}

        </div>
    </div>
  )
}
