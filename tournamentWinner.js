const tournamentWinner = (competition, result) => {
  let compIdx = 0;
  let scoreBoard = {}
  while (compIdx < competition.length) {
    if (result === 0) { 
        scoreBoard[competition[compIdx][1]] ? scoreBoard[competition[compIdx][1]] += 3 : scoreBoard[competition[compIdx][1]] = 3;
        compIdx++;
    } else if (result === 1) {
        scoreBoard[competition[compIdx][0]] ? scoreBoard[competition[compIdx][0] += 3 : scoreBoard[competition[compIdx][0] = 3;
        compIdx++;
    }
  }
  return scoreBoard;
}

competition = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ]
result = [0, 0, 1]

console.log(tournamentWinner(competition, result))
module.exports = {tournamentWinner}