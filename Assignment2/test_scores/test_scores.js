var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

const displayResults = () => {
	// assign a default value of 0 to maxValuePosition variable
	let maxValuePosition = 0;
	// consider the maximum value is the first element of the array
	let maxValue = scores[maxValuePosition];
	// assign a default value of 0 to scoresTotal variable
	let scoresTotal = 0;
	// loop through the scores array
	scores.forEach((score, index) => {
		// add all the scores and assign it to a variable named scoresTotal
		scoresTotal += score;
		// check if the current maxValue is less than the current element in the loop
		if (maxValue < score) {
			/*
				if the current element in the loop is greater than previous maxValue, 
				consider the current element value as the maxValue 
			*/
			maxValue = score;
			// assign the index of maxValue to the variable maxValuePosition
			maxValuePosition = index;
		}
	});

	/*
		calculate the average score by dividing the total by the number of records and rounding off
		to 2 digits decimal
	*/
	const averageScore = (scoresTotal / scores.length).toFixed(2);

	// populate the div with id results with the html elements
	$('results').innerHTML = `
		<h2>Results</h2>
		<p>Average score = ${averageScore}</p>
		<p>High score = ${names[maxValuePosition]} with a score of ${maxValue}</p>
	`;
}

const displayScores = () => {
	/* 
		create table rows to display the headings
	*/
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

	// loop through the scores and create a new row for each record
	scores.forEach((score, index) => {
		result += `
		<tr>
			<td>${names[index]}</td>
			<td>${score}</td>
		</tr>
		`;
	})

	// assign the created table row contents as innerHTML to the table with id scores_table
	$('scores_table').innerHTML = result;
};

const addScore = () => {
	// get the user entered name from the input field with id name and trim it
	const name = $('name').value.trim();
	// get the user entered score from the input field with id score
	const score = parseInt($('score').value);
	// check if name field is empty or score is < 0 or > 100
	if (!name || score < 0 || score > 100) {
		// if name field is empty or score is < 0 or > 100, display an alert box with message
		alert('You must enter a name and a valid score');
	} 
	// if the user entered values are correct enter the else block
	else {
		// add the user entered score to the scores array
		scores.push(score);
		// add the user entered name to the names array
		names.push(name);
		// assign the empty value to the input field with id name
		$('name').value = "";
		// assign the empty value to the input field with id score
		$('score').value = "";
		// focus on the input field with id name
		$('name').focus();
	}
}

window.onload = function () {
	// focus on the input field with id name when screen loads
	$('name').focus();
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};