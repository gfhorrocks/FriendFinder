//API ROUTES
//-------------------------------------------------------------
//Brings in friends JS with data array
var friendsData = require("../data/friends.js");
//export for app
module.exports = function (app) {
    //GET command for displaying all Friends
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });

    //POST command for posting friend and returning the best result
    app.post("/api/friends", function (req, res) {

        //Required Variables
        var friend = req.body;
        var difference = 0; 
        var smallest = 90;
        var matchID;

        //Loops through each Friend in Friends Data
        for(var z = 0; z<friendsData.length; z++){
            //Loops through each answer in the survey and calculates difference based on new Friend entry
            for(var i = 0; i<10; i++){
                difference += Math.abs(friendsData[z].scores[i]-friend.scores[i]);
            }
            //Keeps track of the smallest difference
            if(difference < smallest){
                smallest = difference;
                matchID = z;
            }
            //Resets difference 
            difference = 0;
        };
        //Pushes the new friend into the FriendsData after it checks for the friend match (won't compare to itself)
        friendsData.push(friend);
        //Returns the resulting "matching" friend to display in the Modal
        res.json(friendsData[matchID]);
    });
};