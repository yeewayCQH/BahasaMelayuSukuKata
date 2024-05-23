const wrong_audio         = document.getElementById("wrongAudio");
const correct_audio       = document.getElementById("correctAudio");

const bottom_ques_counter = document.querySelector(".info");
const option_list         = document.querySelector(".option_list");
const que_text            = document.querySelector(".equation");
const question_img        = document.getElementById("question_img");
const animate_img         = document.getElementById("animatePic");
const total_question_text = document.querySelector(".info .totalQuestion");
const no_question_text    = document.querySelector(".info .numberQuestionIndex");
const resultbox_total_question = document.querySelector(".score_text .totalQuestion");
const result_correct      = document.querySelector(".score_text .numberCorrect");
const result_wrong        = document.querySelector(".score_text .numberWrong");
const result_box          = document.querySelector(".result_box");
const quit_quiz           = result_box.querySelector(".buttons .ok");

// creating the new div tags which for icons
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let checked = false;
let answerArray = [];
let questions = [];

// creating the new div tags which for icons
let tickIconTag  = '&nbsp;<div class="textbox-icon-tick"> <i class="fas fa-check"></i></div>';
let crossIconTag = '&nbsp;<div class="textbox-icon-cross"><i class="fas fa-times"></i></div>';


// getting questions and options from array
function showQuetions(){

	checked = false;
    if(que_count == 0){

		// randomly re-arrange the question list
		allQuestions = [];
		for (i = questions.length; i--;){
			allQuestions.push(questions.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    	};

        for (i = allQuestions.length; i--;){
			questions[i] = allQuestions[i];
        };
	}

    // creating input textbox for question
    let numberOfWord = questions[que_count].answer.length;
    answerArray  = questions[que_count].answer.split("");
    let option_tag = '';

    for(i=0; i < numberOfWord; i++)
    {
		option_tag += '<div id="inputPanel'+i+'"><input class="inputChar" type="text" maxlength="1" autocomplete="off" id="word'+i+'" /></div>';
	}

	option_tag += '<div id="iconPanel">&nbsp;</div>';
    question_img.src = questions[que_count].pics;
    option_list.innerHTML = option_tag;
}

function queCounter(){

	// passing the question number and total question
	total_question_text.textContent = questions.length;
	no_question_text.textContent = que_numb;
}

// if submit button clicked
submit_btn.onclick = ()=>{

	if(!checked)
	{
		// check answer and display correct answer in equation
		let wrongCount = 0;
		question_img.src = questions[que_count].ans_pics;
		for(i=0; i < answerArray.length; i++)
		{
			var userAnswer = '?';
			var userInput  = document.getElementById("word"+i);
			if(userInput.value != '')
				userAnswer = userInput.value.toLowerCase();
			else
				userInput.value = '?';

			if(userAnswer == answerArray[i])
			{
				userInput.classList.add("correct");
			}
			else
			{
				wrongCount++;
				userInput.classList.add("incorrect");
			}
			userInput.classList.add("disabled");
		}

        var randomNum = Math.floor(Math.random() * 22);
   		var iconPanel = document.getElementById("iconPanel");
		if(wrongCount == 0)
		{
			userScore += 1;
			correct_audio.play();
    		iconPanel.insertAdjacentHTML("beforeend", tickIconTag);
    		animate_img.src ="../images/gif/correct_"+randomNum+".gif";
		}
		else
		{
			wrong_audio.play();
			iconPanel.insertAdjacentHTML("beforeend", crossIconTag);
			animate_img.src ="../images/gif/wrong_"+randomNum+".gif";
		}

		checked = true;
		submit_btn.textContent = "Seterusnya";

	} else {

		// change next button to submit button
		setupNextQuestion();
		submit_btn.textContent = "Semak";
		var randomNum = Math.floor(Math.random() * 12);
		animate_img.src ="../images/gif/waiting_"+randomNum+".gif";
	}

    //next button change to show result button if last question has answered
	if(questions.length == que_count +1 && checked)
	{
		submit_btn.textContent = "Keputusan";
    }
}

// setup next question
function setupNextQuestion(){

    //if question count is less than total question length
    if(que_count < questions.length - 1){

        que_count++;                //increment the que_count value
        que_numb++;                 //increment the que_numb value
        showQuetions();             //calling showQestions function
        queCounter();               //passing que_numb value to queCounter

    }else{

		if(que_numb >= 9999){

			//window.close();
			var x = document.documentURI;
			x = x.replace("Ejaan.html","../index.html");
			window.location.href = x;

		} else {

		    //calling show result function
            showResult();
            que_numb = 9999;
		}
    }
}

function showResult(){

    //show result box
    result_box.classList.add("activeResult");

    //creating a new span tag and passing the user score number and total question number
    let incorrectScore = questions.length - userScore;
    result_correct.textContent = userScore;
    result_wrong.textContent = incorrectScore;

    resultbox_total_question.textContent = questions.length;
}

// if ok button clicked
quit_quiz.onclick = ()=>{

	submit_btn.textContent = "Tamat";
	var randomNum = Math.floor(Math.random() * 12);
	animate_img.src ="../images/gif/end_"+randomNum+".gif";
    result_box.classList.remove("activeResult"); //hide result box
}

// initial START
window.addEventListener('load',() => {

    var url_string = window.location;
	var url = new URL(url_string);
	var userMenu = url.searchParams.get("UnitNo");

    if(userMenu == "1"){

		questions = questions_unit1;
		document.title = "Ejaan Unit 1";

	} else if(userMenu == "2"){

		questions = questions_unit2;
		document.title = "Ejaan Unit 2";

	} else if(userMenu == "3"){

		questions = questions_unit3;
		document.title = "Ejaan Unit 3";

	} else if(userMenu == "4"){

		questions = questions_unit4;
		document.title = "Ejaan Unit 4";

	} else if(userMenu == "5"){

		questions = questions_unit5;
		document.title = "Ejaan Unit 5";

	} else if(userMenu == "6"){

		questions = questions_unit6;
		document.title = "Ejaan Unit 6";
	}

	showQuetions();     //calling showQestions function
	queCounter();       //passing 1 parameter to queCounter
	animate_img.src ="../images/gif/welcome.gif";
})

