const wrong_audio         = document.getElementById("wrongAudio");
const correct_audio       = document.getElementById("correctAudio");
const page_title          = document.getElementById("pageTitle");
const page_title_panel    = document.getElementById("pageTitlePanel");

const bottom_ques_counter = document.querySelector(".info");
const option_list         = document.querySelector(".option_list");
const que_text            = document.querySelector(".equation");
const question_img        = document.getElementById("question_img");
const total_question_text = document.querySelector(".info .totalQuestion");
const no_question_text    = document.querySelector(".info .numberQuestionIndex");
const resultbox_total_question = document.querySelector(".score_text .totalQuestion");
const result_correct      = document.querySelector(".score_text .numberCorrect");
const result_wrong        = document.querySelector(".score_text .numberWrong");
const result_box          = document.querySelector(".result_box");
const quit_quiz           = result_box.querySelector(".buttons .ok");

// creating the new div tags which for icons
let tickIconTag  = '<div class="icon tick"> <i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

let que_count = 0;
let que_numb = 1;
let userScore = 0;

// getting questions and options from array
function showQuetions(index){

    if(index == 0){

		// randomly re-arrange the question list
		allQuestions = [];
		for (i = questions.length; i--;){
			allQuestions.push(questions.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    	};

        for (i = allQuestions.length; i--;){
			questions[i] = allQuestions[i];
        };
	}

    // randomly re-arrange the option list
    allAnswers = [], switchAnswers = [];

    allAnswers = [questions[index].options[0], questions[index].options[1], questions[index].options[2], questions[index].options[3]];

	for (i = allAnswers.length; i--;){
	    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    };

    let question_index = index +1;

    // creating a new span and div tag for question and option and passing the value using array index
    let option_tag =
      '<div id="option1" class="option1"><span>'+ switchAnswers[0] +'</span></div>'
    + '<div id="option2" class="option2"><span>'+ switchAnswers[1] +'</span></div>'
    + '<div id="option3" class="option3"><span>'+ switchAnswers[2] +'</span></div>'
    + '<div id="option4" class="option4"><span>'+ switchAnswers[3] +'</span></div>'
    + '<div id="next_btn" class="next_btn" onclick="nextButtonOnClick(this)"><span>Next</span></div>';

    question_img.src = questions[index].pics;
    option_list.innerHTML = option_tag;

    const option1 = option_list.querySelector(".option1");
    option1.setAttribute("onclick", "optionSelected(this)");

    const option2 = option_list.querySelector(".option2");
	option2.setAttribute("onclick", "optionSelected(this)");

    const option3 = option_list.querySelector(".option3");
	option3.setAttribute("onclick", "optionSelected(this)");

	const option4 = option_list.querySelector(".option4");
	option4.setAttribute("onclick", "optionSelected(this)");
}

function queCounter(index){

	// passing the question number and total question
	total_question_text.textContent = questions.length;
	no_question_text.textContent = index;
}

// when option has clicked
function optionSelected(answer){

    let   userAns    = answer.textContent; //getting user selected option
	let   correcAns  = questions[que_count].answer; //getting correct answer from array
	const allOptions = option_list.children.length; //getting all option items

    if(userAns == correcAns){ //if user selected option is equal to array's correct answer

		userScore += 1;
	    correct_audio.play();
	    answer.classList.add("correct");                     //adding green color to correct selected option
	    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option

    }else{

        wrong_audio.play();
        answer.classList.add("incorrect");                    //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option

        //if there is an option which is matched to an array answer
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
            }
        }
    }

    //once user select an option then disabled all options
    for(i=0; i < allOptions; i++){
		option_list.children[i].classList.add("disabled");
    }

    //show the next button if user selected any option
    let next_btn = document.getElementById("next_btn");
    next_btn.classList.add("show");

    //next button change to show result button if last question has answered
    if(questions.length == que_count +1){
		next_btn.textContent = "Finish";
    }
}

// if Next button clicked
function nextButtonOnClick(next_btn){

    //if question count is less than total question length
    if(que_count < questions.length - 1){

        que_count++;                //increment the que_count value
        que_numb++;                 //increment the que_numb value
        showQuetions(que_count);    //calling showQestions function
        queCounter(que_numb);       //passing que_numb value to queCounter
        next_btn.classList.remove("show");  //hide the next button

    }else{

		if(que_numb >= 9999){

			window.close();

		} else {

		    //calling show result function
			next_btn.textContent = "Quit";
		    next_btn.classList.remove("show");  //hide the next button
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

    let next_btn = document.getElementById("next_btn");
	next_btn.classList.add("show"); //show the next button if user selected any option
    result_box.classList.remove("activeResult"); //hide result box
}

// initial START
let questions = [];
window.addEventListener('load',() => {

    let htmlPageName = window.location.pathname;
	let index = htmlPageName.lastIndexOf("/");
	let pageName = htmlPageName.substring(index+1);

    if(pageName == "hurufVokal_1.html" || pageName == "hurufVokal_1_ipad.html"){

		questions = questions_1;
        document.title = "Huruf Vokal Latihan 1";

	} else if(pageName == "hurufVokal_2.html" || pageName == "hurufVokal_2_ipad.html"){

		questions = questions_2;
		document.title = "Huruf Vokal Latihan 2";
	}

	showQuetions(0);     //calling showQestions function
	queCounter(1);       //passing 1 parameter to queCounter

	page_title.textContent = userTitle;
    if(userTitle.trim().length == 0) {
	    page_title_panel.classList.add("hiddenBorder");
	}
})
