function setPlayerName(playerName) {
  if (playerNameIsValid(playerName)) {
    localStorage.setItem("playerName", playerName);
    return playerName;
  } else {
    return null;
  }
}

function getPlayerName() {
  return localStorage.getItem("roomCode");
}

function playerNameIsValid(playerName) {
  return playerName.length > 0;
}