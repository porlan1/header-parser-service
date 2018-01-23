const express = require('express');

var app = express();

app.use(express.static(__dirname));

app.use('/header_data', (req, res)=>{
	console.log(req.headers['user-agent'].match(/\(([^)]+)\)/));
	console.log(req.ip);

	res.json({ipadress:req.ip, language:req.headers['accept-language'].split(',')[0], software: req.headers['user-agent'].match(/\(([^)]+)\)/)[1]});
});

app.listen(4000);