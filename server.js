var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var jTodos = [{"name":"Do groceries","status":"not completed"},{"name":"Eat pizza","status":"not completed"},{"name":"Buy avocado","status":"not completed"},{"name":"Study more","status":"not completed"},{"name":"Go to work","status":"not completed"},{"name":"Study even more","status":"not completed"}];
app.get("/", function(req, res){
	res.json(jTodos);
})

app.get("/update/:name/:status", function(req, res){
	var sName = req.params.name;
	var sStatus = req.params.status;
	console.log(sName);
	for(var i = 0; i < jTodos.length; i++){
		if(jTodos[i].name == sName){
			jTodos[i].status = sStatus;
		}
	}
	res.json({"response":"ok"});
})

app.get("/delete/:name", function(req, res){
	var sName = req.params.name;
	var index = -1;
	for(var i = 0; i < jTodos.length; i++){
		if(jTodos[i].name == sName){
			index = i;
		}
	}
	if(i > -1){
		jTodos.splice(index, 1);
		res.json({"response":"ok"});
	}
	else res.json({"response":"not found"});

})

app.get("/insert/:name", function(req, res){
	var sName = req.params.name;
	jTodos.push({"name":sName, "status":"not completed"});
	res.json({"response":"ok"});
})

app.listen(port, function(){
	console.log("Listening on port 8080");
})