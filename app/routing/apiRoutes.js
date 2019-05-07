//API ROUTES
//-------------------------------------------------------------

var friendsData = require("../data/friendsData");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var friend = req.body;

        console.log(friend);

        friends.push(friend);

        res.json(friend);
    });
};