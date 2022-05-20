const tournamentWinner = (competition, result) => {
  let compIdx = 0;
  let scoreBoard = {}
  while (compIdx < competition.length) {
      result.forEach((e) => {
          if (e === 0) { 
              scoreBoard[competition[compIdx][1]] ? scoreBoard[competition[compIdx][1]] += 3 : scoreBoard[competition[compIdx][1]] = 3;
              compIdx++;
          } else if (e === 1) {
              scoreBoard[competition[compIdx][0]] ? scoreBoard[competition[compIdx][0]] += 3 : scoreBoard[competition[compIdx][0]] = 3;
              compIdx++;
          }
      })
  }

  const values = Object.keys(scoreBoard).map((key)=> {return scoreBoard[key]});
  const keys = Object.keys(scoreBoard).map((key)=> { return key})
  const max = Math.max.apply(null, values);
  const indexMax =  values.indexOf(max)
  return keys[indexMax]
}

competition = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ]
result = [0, 0, 1]

console.log(tournamentWinner(competition, result))
module.exports = {tournamentWinner}