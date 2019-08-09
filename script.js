//function to change text color

function myColorChangeFunction() {
	document.getElementById("red-text").style.color = "red";
}

//function to shuffle words in the second paragraph by clicking button

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

//function to highlight the third paragraph

function initHighlight() {
	var range = document.createRange();
	var selection = window.getSelection();
	range.selectNodeContents(document.getElementById("highlight-text").style.backgroundColor = "yellow");

	selection.removeAllRanges();
	selection.addRange(range);
	console.log(range);
}

//function to drag an image to the left

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}



