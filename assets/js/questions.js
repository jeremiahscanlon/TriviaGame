	
$(document).ready(function() {

	function question(num,cat,text,opt1,opt2,opt3,opt4,ans,date,img) {
		this.id = num;
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
		'One of these things is not like the others. One of these things doesn\'t belong. Can you tell which one is not like the others by the time the timer runs out?<br>REMINDER: A colon \":\" represents a relationship between two items. We are asking which relationship is different.',
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
		'One of these things is not like the others. One of these things doesn\'t belong. Can you tell which one is not like the others by the time the timer runs out?<br>REMINDER: A colon \":\" represents a relationship between two items. We are asking which relationship is different.',
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
		'One of these things is not like the others. One of these things doesn\'t belong. Can you tell which one is not like the others by the time the timer runs out?<br>REMINDER: A colon \":\" represents a relationship between two items. We are asking which relationship is different.',
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
});