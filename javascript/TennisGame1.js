var TennisGame1 = function (player1Name, player2Name) {
  this.m_score1 = 0;
  this.m_score2 = 0;
  this.player1Name = player1Name;
  this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function (playerName) {
  // Add Player's score following it's name
  playerName === "player1" ? (this.m_score1 += 1) : (this.m_score2 += 1);
};

TennisGame1.prototype.getScore = function () {
  const SCORE = {
    0: "Love-All",
    1: "Fifteen-All",
    2: "Thirty-All",
    __DEFAULT__: "Deuce",
  };
  const TEMP_SCORE = {
    0: "Love",
    1: "Fifteen",
    2: "Thirty",
    3: "Forty",
  };
  let score = "";
  if (this.m_score1 === this.m_score2) {
    // Put score when players are same in a string
    score = SCORE[this.m_score1] ?? SCORE.__DEFAULT__;
  } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
    // Calculate score if one player win or Deuce
    const minusResult = this.m_score1 - this.m_score2;
    // Ad-In
    if (minusResult === 1) score = "Advantage player1";
    // Ad-Out
    else if (minusResult === -1) score = "Advantage player2";
    // Player1 win on Deuce
    else if (minusResult >= 2) score = "Win for player1";
    // Player2 win on Deuce
    else score = "Win for player2";
  } else {
    // Get Players' score as a string list
    const tempScore = [TEMP_SCORE[this.m_score1], TEMP_SCORE[this.m_score2]];
    // Put score in a real type like Thirty-Fifteen
    score = tempScore.join("-");
  }
  return score;
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}
