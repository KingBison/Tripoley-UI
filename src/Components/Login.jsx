import React, { useState } from "react";
import axios from "axios";
import "../Styles/Login.css"

const Login = (props) => {

    const [name, setName] = useState("");

    return(<>
        <span>
            <label> Enter Your Name: </label>
            <input 
                type="text"
                onChange={(e) => {
                    setName(e.target.value)
                }}
                value={name}
            ></input>
            <br></br>
            <button
                className="login-button"
                onClick={(e) => {
                    axios.post(props.url + "/addPlayer", JSON.stringify({
                        Name: name
                    }))
                    .then( 
                        sessionStorage.name = name
                    )
                    .catch((err) => {
                        alert(err.message.data)
                    })
                }}
            >Enter Game</button>
        </span>
    </>)
}

export default Login;