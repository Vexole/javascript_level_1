$(document).ready(function () {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	const requiredErrorMessage = "This field is required.";

	// Move the focus to Arrival date text box
	$('#arrival_date').focus();

	// Handler for form submission
	$('#reservation_form').submit(e => {
		// Assuming the form is in valid state when the page loads
		let isValid = true;

		// Get the values of the text boxes and trim the values
		const arrivalDate = $('#arrival_date').val().trim();
		const nights = $('#nights').val().trim();
		const name = $('#name').val().trim();
		const email = $('#email').val().trim();
		const phone = $('#phone').val().trim();

		/**
		 * Check if the arrival date is entered, if not display an error message and 		
		 * change the status of isValid field.
		 * If there are extra space in the entered values, trim them and reassign them to the field.		 
		 */ 
		if (!arrivalDate) {
			$('#arrival_date').next().text(requiredErrorMessage);
			isValid = false;
		} else {
			$('#arrival_date').next().text("");
		}
		$('#arrival_date').val(arrivalDate);

		/**
		 * Check if the night field is populated with correct value, if not display an error 
		 * message and change the status of isValid field.
		 * If there are extra space in the entered values, trim them and reassign them to the field.		 
		 */
		if (!nights) {
			$('#nights').next().text(requiredErrorMessage);
			isValid = false;
		} else if (isNaN(nights)) {
			$('#nights').next().text("Must be a valid number");
			isValid = false;
		} else {
			$('#nights').next().text("");
		}
		$('#nights').val(nights);

		/**
		 * Check if the name field is populated, if not display an error 
		 * message and change the status of isValid field.
		 * If there are extra space in the entered values, trim them and reassign them to the field.		 
		 */
		if (!name) {
			$('#name').next().text(requiredErrorMessage);
			isValid = false;
		} else {
			$('#name').next().text("");
		}
		$('#name').val(name);
		
		/**
		 * Check if the email field is populated with correct value, if not display an error 
		 * message and change the status of isValid field. To validate the entered email, test it
		 * against the regex provided.
		 * If there are extra space in the entered values, trim them and reassign them to the field.		 
		 */
		if (!email) {
			$('#email').next().text(requiredErrorMessage);
			isValid = false;
		} else if (!emailPattern.test(email)) {
			$('#email').next().text("Must be a valid email address");
			isValid = false;
		} else {
			$('#email').next().text("");
		}
		$('#email').val(email);

		/**
		 * Check if the phone field is populated, if not display an error 
		 * message and change the status of isValid field.
		 * If there are extra space in the entered values, trim them and reassign them to the field.		 
		 */
		 if (!phone) {
			$('#phone').next().text(requiredErrorMessage);
			isValid = false;
		} else {
			$('#phone').next().text("");
		}
		$('#phone').val(phone);

		// If the form is not valid, cancel submission of the form
		if (!isValid) {
			e.preventDefault();
		}
	});
}); // end ready