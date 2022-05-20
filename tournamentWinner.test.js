const { tournamentWinner } = require('./tournamentWinner');

describe('tournamentWinner', () => {
    test('tournament', () => {
        competition = [
            ["HTML", "C#"],
            ["C#", "Python"],
            ["Python", "HTML"]
          ]
        result = [0, 0, 1]
        expect(tournamentWinner(competition, result)).toEqual('Python')
    })
})