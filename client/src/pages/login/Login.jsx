import "./login.scss"

export default function Login() {


  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="" className="logo" />
                
            </div>
        </div>
        <div className="container">
            <h1>Log In</h1>
            <form>
                <input type="email" placeholder="Email or phone number" />
                <input type="password" placeholder="Password" />
                <button className="loginButton">Sign In</button>
                <span>New to Netflix? <b>Sign up now.</b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <b>Learn more</b>.
                </small>
            </form>
        </div>
    </div>
  )
}
