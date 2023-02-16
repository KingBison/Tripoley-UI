import React, { useEffect, useState } from "react";
import axios from "axios";
import ServerData from "./ServerData";

var url;

const Admin = () => {
    const [serverData, setServerData] = useState(false)
    useEffect(() => {
        const serverManager = async () => {
            await fetch("config.json").then(
                (res) => res.json())
                .then((config) => {
                    url = config.serverAddr
                }
            )
            const getServerData = async () => {
                axios.get(url+"/getServerData")
                .then((res) => {
                    setServerData(res.data)
                })
                .catch((err) => {
                    console.log(err)
                    setServerData(false)
                })
            }
            
            let updateInterval = setInterval(getServerData, 1000)
            return () => clearInterval(updateInterval)
        }

        serverManager()
    }, [])


    return(
        <div className="admin-main">
            <div className="admin-left">
                <ServerData game={serverData} admin={true} url={url}/>
            </div>
            <div className="admin-right">

            </div>
        </div>
    )
}

export default Admin;