function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log('User is called' + fullName);

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() != 'assembly') {
		alert('Greetings' + ' ' + fullName + '. ' + 'Welcome to the Dark Side.');
	}
		
	var fullName = firstName + ' ' + lastName;
	console.log('User is called' + fullName);

	var age = prompt ('How old are you?');
	age = parseInt (age);

	if (typeof age !== 'number') {
		age = parseInt (age);	
	}
	

	if (age >= 18) {
		console.log ('User is an adult');
	} else if (age >= 13) {
		console.log ('User is a teeneager');
	} else {
		console.log ('User is a child');
	}
	
	var faveColour = prompt('What is your favourite colour?');
	faveColour = faveColour.toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'yellow' ||
		faveColour == 'purple' ||
		faveColour == 'orange' ||
		faveColour == 'green' ||
		faveColour == 'blue') {
		$('h1').css ('color', faveColour);
	}

}

// when the page loads
$(function() {

	//when the user clicks on the image, ask the questions
	$('img').on('click', askQuestions);

	//when the user clicks a heading
	$('h3').on('click', function() {

		//toggle the next element
		$(this).next().slideToggle(800);
	})	

});