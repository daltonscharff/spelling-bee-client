import React, { useState, useEffect } from "react";
import Router from 'next/router';
import { setRoomCode, getRoomCode } from "../services/roomCode";

export default function Home() {
  const [roomCodeInput, setRoomCodeInput] = useState("");
  let errors = {};

  useEffect(() => {
    if (getRoomCode()) {
      Router.push(`/rooms/${getRoomCode()}`)
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const setRoomCodeResponse = setRoomCode(roomCodeInput);
    if (setRoomCodeResponse !== null) {
      Router.push(`/rooms/${setRoomCodeResponse}`);
    } else {
      alert("Invalid room code")
      setRoomCodeInput("");
    }
  }

  const handleCreateRoom = () => {
    // create room via API
    // redirect to new room
  }

  return (
    <div>
      <p>roomCode: {roomCodeInput}</p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={roomCodeInput}
          onChange={(e) => setRoomCodeInput(e.target.value)}
          placeholder="Room Code"
        />
        <br />
        <input type="submit" value="Go" />
        <input type="button" value="Create A Room" onClick={() => handleCreateRoom()} />
      </form>
    </div>
  );
}
