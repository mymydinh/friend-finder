var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    })

    app.post('/api/friends', function (req, res) {


        var bestMatch = {
            name: '',
            photo: '',
            score: '',
            totalDifference: 40
        }

        var userData = req.body;
        var userScores = parseInt(userData.scores);
        // var friendsScore = friendsData.scores;

        for (var i = 0; i < friendsData.length; i++) {
            var difference = 0;
            x = [];

            var testing = friendsData[i];
            console.log("friends data testing: ", testing.scores)

            console.log("user score testing: ", userScores)
        }






        // pushing into friends array
        friendsData.push(userData);
        // matching to best friend fix this???
        res.json(bestMatch);

    })

}