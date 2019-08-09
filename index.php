<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="stylesheet" href="./style.css"/>
		<script src="./script.js"></script>

		<title>Literary Mutilator</title>
	</head>

	<body>
		<form>
				<h1 class="header">My Literary Mutilator</h1>
				<div class="section">
					<button class="button-style" type="button" onclick="myColorChangeFunction()">Make this text red!</button>
					<p id="red-text">
						Optional universe parameters providing Deep Thought transformative disposition
						balls. Hyperspace created stand same powered when being million-gallon course get
						impossible penguin given telepathy molecules inventor Zaphod Beeblebrox reaches
						convex Heart Of Gold clever sunny outfitted such Deep Thought first they machine
						three make impossibility arms what point however forty-two researcher’s
						perspective. Ford Prefect were Heart Of Gold born that ship’s hyperspace figure
						box Infinite Improbability Drive people steal more blue air starship announced
						craft during major foot.
					</p>
				</div>
				<div class="section">
					<button class="button-style" type="button" onclick="myShuffleFunction()">Mix up my words!</button>
					<p id="shuffle-text">
						Infinite Galaxy system reaches Ford Prefect shoe Sub-Meson vortex generator
						improbable control ship thought used same changes found concert interior order
						atomic destruction and cup of tea. Zaphod Beeblebrox petunias distances single
						Infinite Improbability Drive angles allowing because indeterminacy including
						creation into golden cabin flip soon simultaneously worked shade Trillian design
						made mammals miserable across marine grumpily shared mucking hitchhiker stars
						Infinite Improbability Drive.
					</p>
				</div>
				<div class="section">
					<button class="button-style" type="button" onclick="initHighlight()">Highlight this text!</button>
					<p id="highlight-text">
						Lorem Ipsum Hitchhiker simply generating synthesized improbability drive. Arthur
						Dent closes world sector satisfaction secretively reasoning ship launch
						physicists accident like science. Successful rulers effects of Babel
						Fish hallucinations happen transformation Damogran mothers close particularly.
						superintelligent hookers powered motion Infinite Improbability Drive trying
						cup of tea would curve truth. Synthesized forty-two vector doors break into
						Betelgeuse exactly building thus simply side effects of paranoid android Marvin.
					</p>
				</div>
				<div id="section4">
					<button class="button-style" type="button">Drag the box to the left!</button>
					<div id="myDiv" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
					<img id="box" src="box.jpg" draggable="true" ondragstart="drag(event)" width="94" height="87" alt="a box">
				</div>
		</form>
	</body>

</html>