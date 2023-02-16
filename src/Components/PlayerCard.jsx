import React from "react";
import "../Styles/PlayerCard.css"

const PlayerCard = (props) => {
    var player = props.player

    const getPlayerReady = () => {
        if (player.Ready) {
            return(<h2 style={{color: "green"}}>Ready</h2>)
        } else {
            return(<h2 style={{color: "red"}}>Not Ready</h2>)
        }
    }

    const getMyTurn = () => {
        if (player.MyTurn) {
            return(<h5 style={{color: "purple"}}>My Turn</h5>)
        } else {
            return(<h5>&nbsp;</h5>)
        }
    }

    const getDealer = () => {
        if (player.Dealer) {
            return(<h5 style={{color: "blue"}}>Dealer</h5>)
        } else {
            return(<h5>&nbsp;</h5>)
        }
    }

    const getBidStatus = () => {
        if (player.BidStatus) {
            return(<h5>{player.BidStatus}</h5>)
        } else {
            return(<h5>&nbsp;</h5>)
        }
    }

    
    return(<div className="playercard-main">
        <div className="playercard-top">
            <h2>{player.Name}</h2>
            {getPlayerReady()}
        </div>
        <div className="playercard-bottom">
            <h5>Money: {player.Money}</h5>
            <h5>Bid: {player.Bid}</h5>
            {getBidStatus()}
            {getMyTurn()}
            {getDealer()}
        </div>
    </div>)
} 

export default PlayerCard;