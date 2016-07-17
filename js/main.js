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
	var arr = [];
	var simbols = [];
	var newArray = [];
	var i, length, j, d, flag;
	length = str.length;
	j = 0;
	for(i = 0; i<length; i++) {
		if(str[i] == '.' || str[i] == '?' || str[i] == ',' || str[i] == ';' || str[i] == ':' || str[i] == '!' || str[i] == ' ') {
			simbols[j] =  str[i];
			j++;
		}
		else {
			if(!arr[j]) {
				arr[j] = str[i];
			}
			else {
				arr[j] = arr[j]+str[i];
			}
			if(!newArray[i]) {
				newArray[i] = str[i];
			}
			else {
				newArray.push(str[i]);
			}
			newArray[i] = str[i];
		}
	}

	for(i = 0; i<newArray.length; i++) {
		flag = true;
		for(j = 0; j<arr.length; j++) {
			if(!arr[j].match(newArray[i])) {
				flag = false;
				break;
			}
		}
		if(flag) {
			for(j = 0; j<arr.length; j++) {
				arr[j] = arr[j].replace(newArray[i], "");
			}
		}
	}
	
	for(i = 0; i<arr.length; i++) {
		arr[i] = arr[i]+simbols[i];
	}
	
	console.log(arr.join(""));
	
})("!??слово!плов олово$$$!");