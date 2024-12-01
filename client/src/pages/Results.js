import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../utilities/axiosInstance";

const Result = () => {
  const history = useHistory();
  const [auctions, setAuctions] = useState([]);

  async function getResults() {
    try {
      const result = await axiosInstance.get("get-auction");
      setAuctions(result.data.auctions);
      console.log("It is a result ", result);
      console.log("It is a result ", result.data);
    } catch (error) {
      console.error("Error fetching results: ", error);
    }
  }

  async function playerAuctionArray() {
    try {
      await axiosInstance.get("clear-auction");
      history.push("/");
    } catch (error) {
      console.error("Error clearing auction: ", error);
    }
  }

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div className="result">
      {auctions.length > 0 ? (
        auctions.map((auction) => (
          <div key={auction.id} className="player-result">
            <h2 style={{ color: "white" }}>{auction.user}</h2>
            <ul>
              {auction.players.length > 0 &&
                auction.players.map((player) => (
                  <li key={player.id}>{player.name}</li>
                ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No auctions available</p>
      )}
      <button className="button" onClick={playerAuctionArray}>Return to Home</button>

    </div>

    
  );
};

export default Result;
