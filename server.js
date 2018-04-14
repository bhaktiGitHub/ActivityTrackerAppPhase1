const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(process.env.PORT || 8080);

app.get('/activity' , (req,res) =>
{
	console.log("inside get activity");
	res.sendFile(__dirname + '/public/activity.html');
});

module.exports = app;
