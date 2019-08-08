function myColorChangeFunction() {
	document.getElementById("red-text").style.color = "red";
}

function myShuffleFunction() {

		let text1 = document.getElementById("shuffle-text").innerText;
		console.log(text1);
		var words = text1.split(' ');
		console.log(words);

	Array.prototype.shuffle = function() {
		var input = this;

		for (var i = input.length-1; i >=0; i--) {

			var randomIndex = Math.floor(Math.random()*(i+1));
			var itemAtIndex = input[randomIndex];

			input[randomIndex] = input[i];
			input[i] = itemAtIndex;
		}
		return input;
	}

	words.shuffle();
	console.log(words);

	document.addEventListener("click", function(){
		document.getElementById("shuffle-text").innerHTML = words.join(' ');
	});
};

/*window.onload = function () {
	initHighlight();
};

function initHighlight() {
	let colorBox = document.getElementById("highlight-text");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue"),
	};
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
}*/

function initHighlight() {
	var range = document.createRange();
	var selection = window.getSelection();
	range.selectNodeContents(document.getElementById("highlight-text").style.backgroundColor = "yellow");

	selection.removeAllRanges();
	selection.addRange(range);
	console.log(range);
}

//var tempArray = ['sandwich', 'soda', 'chips', 'cookie']
//tempArray.replace(/,/g , " ");

// and the result is...
//alert(tempArray);

