"use strict";

/* 1 */
(function(str) {
	var arr = [];
	var i, length, j, d;
	str = str.replace(/[^0-9+-.\*/=]/g, "");
	if(str[str.length - 1] === '=') {
		str = str.replace("=", "");
	}
	else {
		console.log('Символ = не стоит в конце!');
		return false;
	}
	length = str.length;
	j = 0;
	for(i = 0; i<length; i++) {
		if(str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/') {
			j++;
			arr[j] =  str[i];
			j++;
		}
		else {
			if(!arr[j]) {
				arr[j] = str[i];
			}
			else {
				arr[j] = arr[j]+str[i];
			}
		}
	}
	
	length = arr.length;
	switch(arr[1]){
		case '+':
			d = arr[0]*1 + arr[2]*1;
			break;
		case '*':
			d = (arr[0]*1) * (arr[2]*1);
			break;
		case '-':
			d = (arr[0]*1) - (arr[2]*1);
			break;
		case '/':
			d = (arr[0]*1) / (arr[2]*1);
			break;
	}
	for(i = 3; i<length; i++) {
		switch(arr[i]){
			case '+':
				d = d*1 + arr[i+1]*1;
				break;
			case '*':
				d = (d*1) * (arr[i+1]*1);
				break;
			case '-':
				d = (d*1) - (arr[i+1]*1);
				break;
			case '/':
				d = (d*1) / (arr[i+1]*1);
				break;
		}
		
	}
	console.log(d);
	return d;
})("7+7*2=ёжик");

/* 2 */
(function(str){
	var phrase;
	var simbols = [];
	var result = [];
	var length, j, i, firstWorld, flag, expr;
	
	phrase = str.replace(/(\!|\:|\;|\,|\?|\.)/g, ' ').trim().split(/\s/g);
	
	length = str.length;
	j = 0;
	for(i = 0; i<length; i++) {
		if(str[i] == '.' || str[i] == '?' || str[i] == ',' || str[i] == ';' || str[i] == ':' || str[i] == '!' || str[i] == ' ') {
			if(simbols[j]) {
				simbols[j] = simbols[j]+str[i];
			}
			else {
				simbols[j] = str[i];
			}
		}
		else {
			j++;
		}
	}
	for (i = 0; i < simbols.length; i++) {
		if ( i in simbols ) {
			result.push(simbols[i]);
		}
	}
	simbols = result;
	
	firstWorld = phrase[0];
	
	length = firstWorld.length;
	result = [];
	for(i = 0; i<length; i++) {
		flag = true;
		for(j = 0; j<phrase.length; j++) {
			if(phrase[j].indexOf(firstWorld[i]) === -1) {
				flag = false;
			}
		}
		if(flag) {
			for(j = 0; j<phrase.length; j++) {
				expr = new RegExp(firstWorld[i] , "ig");
				phrase[j] = phrase[j].replace(expr, "");
			}
		}
	}
	
	if(phrase[0].indexOf(str[0]) > 0) {
		for(i = 0; i<phrase.length; i++) {
			if(simbols[i] && phrase[i])
				phrase[i] = phrase[i]+simbols[i];
		}
		console.log(phrase.join(""));
		return phrase.join("");
	}
	else {
		for(i = 0; i<simbols.length; i++) {
			if(simbols[i] && phrase[i])
				simbols[i] = simbols[i]+phrase[i];
		}
		console.log(simbols.join(""));
		return simbols.join("");
	}
	
})("Чего изволите?Барин!");