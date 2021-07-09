# Tennis in JavaScript

Tests are available to be run both with node.js and in the browser.
For node, simply call
node TennisTest.js
(Only failures will be shown on the console)

For the browser, open TennisTest.html and refresh after change.

# What's new

## Used constants for score strings

| Previous                                 | Current                                                                                                                                                        |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `score = "Love-All";` `score += "Love";` | `const SCORE = { 0: "Love-All",1: "Fifteen-All", 2: "Thirty-All", __DEFAULT__: "Deuce",};const TEMP_SCORE = {0: "Love",1: "Fifteen",2: "Thirty",3: "Forty",};` |

## Removed all switch statements

| Previous                                                                                                                                                                    | Current                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `switch (this.m_score1) { case 0: score = "Love-All"; break; case 1: score = "Fifteen-All"; break; case 2: score = "Thirty-All"; break; default: score = "Deuce"; break; }` | `score = SCORE[this.m_score1] ?? SCORE.__DEFAULT__;` |
| `switch (tempScore) { case 0: score += "Love"; break; case 1: score += "Fifteen"; break; case 2: score += "Thirty"; break; case 3: score += "Forty"; break; }`              | `TEMP_SCORE[this.m_score1]`                          |

## Removed for-loop statement

| Previous                                                                                                                                                                                                                                                                                  | Current                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `for (var i = 1; i < 3; i++) { if (i === 1) tempScore = this.m_score1; else { score += "-"; tempScore = this.m_score2; } switch (tempScore) { case 0: score += "Love"; break; case 1: score += "Fifteen"; break; case 2: score += "Thirty"; break; case 3: score += "Forty"; break; } } ` | `const tempScore = [TEMP_SCORE[this.m_score1], TEMP_SCORE[this.m_score2]]; score = tempScore.join("-");` |
