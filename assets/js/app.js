// ==========================================================================
// page load function
// ==========================================================================

$(document).ready(function() {

	// ==========================================================================
	// Functions
	// ==========================================================================

	// begining with the first question
	function startTrivia() {
		$('#startNav').hide();
		$('#startOverNav').show();
		$('.welcomePage').hide();
		$('.questionPage').show();
		showQuestion();
	}

	function showQuestion(){

		$('.result').html('');
		startTimer();
		var count = universal.question;
		var obj = questions[count];
		
		var qText = obj.q_text;
		var qDisplay = '<h3>'+qText+'</h3>'
		$('.text').html(qDisplay);
		
		var qAnswers = [obj.q_options_1, obj.q_options_2, obj.q_options_3, obj.q_options_4]
		$('.options').html('');
		for (var i = 0; i < qAnswers.length; i++) {
			var ans = qAnswers[i];
			var id = i + 1;
			var first = '<li id="'+id+'">'
			var last = '</li>'
			$('.options').append(first+ans+last);
		}

		for (var j = 1; j <= 4; j++) {
			$('#'+j).click(function(){
				showAnswer($(this).attr('id'));
			});
		}

	}

	function showAnswer(num) {
		stopTimer();
		universal.timer = 25;
		var count = universal.question;
		var obj = questions[count];
		var objCorrect = obj.q_correct_option
		if (num == 0){
			universal.noanswer++
			$('.result').html('<p>You ran out of time.</p>');
		} else if (num == objCorrect) {
			universal.correct++
			$('.result').html('<p>You\'re Right!</p>');
		} else {
			universal.wrong++
			$('.result').html('<p>Sorry, that is not correct.</p>');
			$('#'+num).addClass('wrong');
		}
		$('#'+objCorrect).addClass('correct');
		$('.result').append('<p>Correct: '+universal.correct+'</p>');
		$('.result').append('<p>Wrong: '+universal.wrong+'</p>');
		$('.result').append('<p>Timed Out: '+universal.noanswer+'</p>');
		universal.question++
		if (universal.question < 7) {
			setTimeout(showQuestion, 5000);	
		} else {
			setTimeout(gameOver, 5000);
		}
		
	}

	function gameOver() {
		
		$('.timer').html('<h2>The game is over. Thank you for playing Timed Trivia!</h2>');
		$('.text').html('');
		$('.result').html('<p>Correct: '+universal.correct+'</p>');
		$('.result').append('<p>Wrong: '+universal.wrong+'</p>');
		$('.result').append('<p>Timed Out: '+universal.noanswer+'</p>');

		if (universal.correct == 7) {
			$('.options').html('<p>Great job! There is no point in continuing. You are obviously one of the smartest people in the world.</p>');
		} else if (universal.correct > universal.wrong) {
			$('.options').html('<p>Good job getting more right than wrong. Keep trying to see if you can get to 100%.</p>');
		} else if (universal.noanswer == 7) {
			$('.options').html('<p>Were you even paying attention?!?!</p>');
		} else if (universal.wrong > universal.correct) {
			$('.options').html('<p>Yeesh. You didn\'t do so hot. Give it another go to see what happens.</p>');
		} else if (universal.wrong == universal.correct) {
			$('.options').html('<p>Welp, at least you finished. Try again to see if you can better your score.</p>');
		} else {
			$('.options').html('<p>Thans for playing. Keep coming back to waste more time!</p>');
		}
		$('.options').append('<button type="button" class="btn btn-success" id="startOverButton">Restart</button>');
		$('#startOverButton').click(function(){
			startOver();
		});
	}

	// set the interval to run the timer every second
	function startTimer(){
		//stopTimer();
		universal.timer = 25;
		$('.timer').html('<h2>Time Remaining: ' + universal.timer + ' seconds</h2>');
		counter = setInterval(runTimer, 1000);
    }

    // run the timer
    function runTimer(){
    	
    	// remove a second
		universal.timer--

		// display timer
		$('.timer').html('<h2>Time Remaining: ' + universal.timer + ' seconds</h2>');
		
		// you ran out of time
		if (universal.timer === 0){

			// stop the counter from going negative
			stopTimer();

			// show answer and mark no answer
			showAnswer(0);
		}
    }

    // stop counting down
    function stopTimer(){
		clearInterval(counter);
    }

	// Start Over
	function startOver() {
		stopTimer();
		universal.correct = 0;
		universal.wrong = 0;
		universal.noanswer = 0;
		universal.question = 0;
		universal.timer = 25;
		startTrivia();
	}

	// animate the logo
	function LogoTransition1() {
		$('#logo1').animate({opacity:0},2000);
		$('#logo2').animate({opacity:1},2000,LogoTransition2); 
	}
	function LogoTransition2() { 
		$('#logo2').animate({opacity:0},2000);
		$('#logo3').animate({opacity:1},2000,LogoTransition3); 
	}
	function LogoTransition3() { 
		$('#logo3').animate({opacity:0},2000);
		$('#logo1').animate({opacity:1},2000,LogoTransition1);
	} 
	LogoTransition1();

	// ==========================================================================
	// BUTTONS
	// ==========================================================================

	// Nav Button Start or Start Over
	$('#startNav').click(function(){
		startTrivia();
	});
	$('#startOverNav').click(function(){
		startOver();
	});

	// Welcome Page Start Button
	$('#startButton').click(function(){
		startTrivia();
	});

	// Results page Start over button
	$('#startOverButton').click(function(){
		startOver();
	});
	
	// ==========================================================================
	// Variables, Arrays, and Objects
	// ==========================================================================

	var universal = {
		correct : 0,
		wrong : 0,
		noanswer : 0,
		question : 0,
		timer : 25,
	}

	function question(number,cat,text,opt1,opt2,opt3,opt4,ans,date,img) {
		this.id = number;
		this.q_category_id = cat;
		this.q_text = text;
		this.q_options_1 = opt1;
		this.q_options_2 = opt2;
		this.q_options_3 = opt3;
		this.q_options_4 = opt4;
		this.q_correct_option = ans;
		this.q_date_added = date;	
		this.image = img;
	}

	var question1 = new question(
		1,
		136,
		'One of these things is not like the others. One of these things doesn\'t belong. Can you tell which one is not like the others by the time the timer runs out?',
		'Desk',
		'Chair',
		'Table',
		'Computer',
		4,
		'date',
		'../images/check.png'
	)
	var question2 = new question(
		2,
		136,
		'One of these things is not like the others. One of these things doesn\'t belong. Can you tell which one is not like the others by the time the timer runs out?<br><br>REMINDER:<br> A colon \":\" represents a relationship between two items. We are asking which relationship is different.',
		'Mercury : Sun',
		'Moon : Earth',
		'Star : Galaxy',
		'Wheel : Axle',
		3,
		'date',
		'../images/check.png'
	)
	var question3 = new question(
		3,
		136,
		'One of these things is not like the others. One of these things doesn\'t belong. Can you tell which one is not like the others by the time the timer runs out?<br><br>REMINDER:<br> A colon \":\" represents a relationship between two items. We are asking which relationship is different.',
		'Clerk : File',
		'Doctor : Patient',
		'Lawyer : Client',
		'Shopkeepper : Customer',
		1,
		'date',
		'../images/check.png'
	)
	var question4 = new question(
		4,
		136,
		'One of these things is not like the others. One of these things doesn\'t belong. Can you tell which one is not like the others by the time the timer runs out?',
		'microscope',
		'stethoscope',
		'telescope',
		'periscope',
		2,
		'date',
		'../images/check.png'
	)
	var question5 = new question(
		5,
		136,
		'One of these things is not like the others. One of these things doesn\'t belong. Can you tell which one is not like the others by the time the timer runs out?<br><br>REMINDER:<br> A colon \":\" represents a relationship between two items. We are asking which relationship is different.',
		'Broom : Sweep',
		'Spoon : Feed',
		'Nut : Crack',
		'Soap: Bathe',
		3,
		'date',
		'../images/check.png'
	)
	var question6 = new question(
		6,
		136,
		'One of these things is not like the others. One of these things doesn\'t belong. Can you tell which one is not like the others by the time the timer runs out?',
		'Den',
		'Roof',
		'Burrow',
		'Nest',
		2,
		'date',
		'../images/check.png'
	)
	var question7 = new question(
		7,
		136,
		'One of these things is not like the others. One of these things doesn\'t belong. Can you tell which one is not like the others by the time the timer runs out?',
		'Ball',
		'Specter',
		'Globe',
		'Sphere',
		2,
		'date',
		'../images/check.png'
	)

	var questions = [question1, question2, question3, question4, question5, question6, question7]
});



