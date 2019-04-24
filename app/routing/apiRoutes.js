var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    })

    app.post('/api/friends', function (req, res) {


        var userInput = req.body;
        // console.log('User input: ' + JSON.stringify(userInput))
        var userScores = req.body.scores;
        console.log('User responses: ' + userScores)


        var bestMatch = {
            name: '',
            photo: '',
            score: '',
            totalDifference: 40
        }

        for (var i = 0; i < friendsData.length; i++) {
            // console.log('friend data: ' + JSON.stringify(friendsData[i]));
            console.log(friendsData[i].name + ' friends score: ' + friendsData[i].scores)

            var diff = 0;
            for (var j = 0; j < userScores.length; j++) {
                diff += Math.abs(friendsData[i].scores[j] - userScores[j])
            }
            console.log('diff = ' + diff);

            if (diff < bestMatch.totalDifference) {
                console.log('Closest match found = ' + diff);
                console.log('Friend name = ' + friendsData[i].name);
                // console.log('Friend image = ' + friendsData[i].photo);


                bestMatch.name = friendsData[i].name;
                bestMatch.photo = friendsData[i].photo;
                bestMatch.scores = friendsData[i].scores;
                bestMatch.totalDifference = diff;
            }
        }


        // pushing into friends array
        friendsData.push(userInput);
        // matching to best friend fix this???
        res.json(bestMatch);

    })

}