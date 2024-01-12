import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";

function RoomJoinPage() {
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleTextFieldChange = (e) => {
    setRoomCode(e.target.value.toUpperCase());
  };

  const roomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: roomCode,
      }),
    };
    fetch("/api/join-room", requestOptions)
      .then((response) => {
        if (response.ok) {
          navigate(`/room/${roomCode}`);
        } else {
          setError(true);
          setErrorMessage("Room not found");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Join a Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          error={error}
          label="Code"
          placeholder="Enter a Room code"
          value={roomCode}
          helperText={errorMessage}
          variant="outlined"
          onChange={handleTextFieldChange}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="primary" onClick={roomButtonPressed}>
          Enter Room
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="secondary" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
}
export default RoomJoinPage;
