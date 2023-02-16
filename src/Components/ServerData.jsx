import axios from "axios";
import React from "react";
import { useState } from "react";
import "../Styles/Admin.css"

function ServerData(props) {

    var game = props.game;
    var url = props.url;
    var admin = props.admin;

    const [edit, setEdit] = useState(JSON.stringify(game, null, "\t"))

    if (!game) {
        return(<h1>Server Is Not Found</h1>)
    }
    if (!admin){
        return(
            <h1>Server Is Running</h1>
        )
    }

    const sendChange = () => {
        axios.post(url+"/setServerData", JSON.stringify(
            JSON.parse(edit)
        )).then((res)=>{
            alert(res.status)
        }).catch((err) => {
            alert(err.response.data)
        })
    }

    const update = () => {
        setEdit(JSON.stringify(props.game, null, "\t"))
    }

    return(<>
        <div className="options">
            <button onClick={sendChange}>Change</button>
            <button onClick={update}>Refresh</button>
        </div>
         <textarea
            value={edit}
            className="admin-box"
            onChange={(e) => {
                setEdit(e.target.value)
                console.log(edit)
            }}
        />
    </>
    )
}

export default ServerData;