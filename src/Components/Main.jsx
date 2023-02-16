import React, { useEffect, useState } from "react";
import axios from "axios";
import ServerData from "./ServerData";
import "../Styles/Main.css"
import Login from "./Login";
import Game from "./Game";
import PlayerCard from "./PlayerCard";

var url;

const Main = () => {
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

    const getMainBody = () => {
        if (!sessionStorage.name) {
            return(<Login url={url}/>)
        } 
        return(<Game game={serverData} url={url}/>)
    }

    const getPlayerCards = () => {
        if(serverData){
            return(serverData.Players.map((player)=>{
                return(<PlayerCard player={player}/>)
            }))
        }
    }

    return(
        <div className="main-main">
            <div className="main-left">
                <h1>Welcome To Tripoley</h1>
                {getMainBody()}
            </div>
            <div className="main-right">
                <ServerData game={serverData} url={url} admin={false}/>
                {getPlayerCards()}
            </div>
        </div>
    )
}

export default Main;