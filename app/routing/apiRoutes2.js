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
        var userScores = userData.scores;

        // console.log(userScore)

        for (var i = 0; i < friendsData.length-1; i++) {

            // console.log(friendsData[i])

            var difference = 0;

            x = [];


            for (var j = 0; j < userScores.length; j++) {

                    // difference = Math.abs(friendsData[i].scores[j] - userScores[j]);
                    var userScore = userScores[j];
                    console.log('userScore', userScore);
                    console.log('friendData', friendsData[i].name, friendsData[i].scores[j]);
                    x.push(Math.abs(parseInt(userScores[j]) - friendsData[i].scores[j]));

                if (difference < bestMatch.totalDifference) {

                    bestMatch.name = friendsData[i].name;

                    bestMatch.photo = friendsData[i].photo;

                    bestMatch.scores = friendsData[i].scores;

                    bestMatch.totalDifference = difference;


                }


            }
        }
        console.log("---------------------------")
        console.log("Difference: " + difference)

        console.log("User: " + userData.name, userScores)
        console.log("Best Match: " + bestMatch.name, bestMatch.scores)

        console.log("Total Difference: " + bestMatch.totalDifference)
        console.log("---------------------------")
        console.log(x);
        // console.log(userData);
        friendsData.push(userData);
        res.json(bestMatch);

    })

}