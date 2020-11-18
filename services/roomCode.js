function setRoomCode(roomCode) {
  if (roomCodeIsValid(roomCode)) {
    localStorage.setItem("roomCode", roomCode);
    return roomCode;
  } else {
    return null;
  }
}

function getRoomCode() {
  return localStorage.getItem("roomCode");
}

function roomCodeIsValid(roomCode) {
  return roomCode.length === 5;
}

export { setRoomCode, getRoomCode };