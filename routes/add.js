var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var a = request.query.name;
	var b = request.query.description;
	var c = {"name":a,"description":b,"imageURL":"http://lorempixel.com/400/400/people"};
	console.log(c);
	data.friends.push(c);
	response.render('index',data);
 };