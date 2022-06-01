var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

const displayResults = () => {
	let maxValuePosition = 0;
	let maxValue = scores[maxValuePosition];
	let scoresTotal = 0;
	scores.forEach((score, index) => {
		scoresTotal += score;
		if (maxValue < score) {
			maxValue = score;
			maxValuePosition = index;
		}
	});

	const averageScore = (scoresTotal / scores.length).toFixed(2);

	$('results').innerHTML = `
		<h2>Results</h2>
		<p>Average score = ${averageScore}</p>
		<p>High score = ${names[maxValuePosition]} with a score of ${maxValue}</p>
	`;
}

const displayScores = () => {
	let result = `
		<tr>
			<td>
				<h2>Scores</h2>
			</td>
		</tr>
		<tr>
			<td><strong>Name</strong></td>
			<td><strong>Score</strong></td>
		</tr>		
	`;

	scores.forEach((score, index) => {
		result += `
		<tr>
			<td>${names[index]}</td>
			<td>${score}</td>
		</tr>
		`;
	})

	$('scores_table').innerHTML = result;
};

const addScore = () => {
	const name = $('name').value.trim();
	const score = parseInt($('score').value);
	if (!name || score < 0 || score > 100) {
		alert('You must enter a name and a valid score');
	} else {
		scores.push(score);
		names.push(name);
		$('name').focus();
	}
}

window.onload = function () {
	$('name').focus();
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


