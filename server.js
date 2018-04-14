const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(process.env.PORT || 8080);

app.get('/activity' , (req,res) =>
{
	
	res.sendFile(__dirname + '/public/activity.html');
});

app.get('/about' , (req,res) =>
{
	
	res.sendFile(__dirname + '/public/aboutus.html');
});

app.get('/login' , (req,res) =>
{
	
	res.sendFile(__dirname + '/public/login.html');
});

module.exports = app;
