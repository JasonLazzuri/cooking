//Galoon to Litters

var gallon = parseInt(prompt("How many gallons?"));

var gTL = function(gallon){
	return gallon/0.26417;
}

alert(gTL(gallon));

var gallon = parseInt(prompt("How many gallons?"));

var gTL = function(gallon){
	return gallon/0.26417;
}

alert(gTL(gallon));

//Tablespoon to teaspoon

var tSpoon = parseInt(prompt("How many tablespoons?"));

var convertTableToTea = function(tspoon){
	return tspoon + " tablespoons" + " are equal to " + tspoon*3 + " teaspoons.";
}

alert(convertTableToTea(tSpoon));
