import React, { useState, useEffect } from "react";
import Router from 'next/router';

export default function Room() {
  return (
    <div>
      <button onClick={() => {
        localStorage.removeItem("roomCode");
        Router.push("/");
      }}>Clear Room Code</button>
    </div>
  )
}
