import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Room() {
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);

  const { roomCode } = useParams();

  const getRoomDetails = () => {
    fetch(`/api/get-room?code=${roomCode}`)
      .then((response) => response.json())
      .then((data) => {
        setVotesToSkip(data.votes_to_skip);
        setGuestCanPause(data.guest_can_pause);
        setIsHost(data.is_host);
      })
      .catch((error) => console.error("Fetch error:", error));
  };

  useEffect(() => {
    getRoomDetails();
  }, [roomCode]);

  return (
    <div>
      <h3>{roomCode}</h3>
      <p>Votes: {votesToSkip}</p>
      <p>Guest can pause: {guestCanPause ? "Yes" : "No"}</p>
      <p>Host: {isHost ? "Yes" : "No"}</p>
    </div>
  );
}
export default Room;
