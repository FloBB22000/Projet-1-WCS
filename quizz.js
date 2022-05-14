function submitAnswers(){
	var total = 5;
	var score = 0;

	// Get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	// Validation
	for(i = 1; i <= total; i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert(' Vous avez oublié de répondre à une ou plusieurs questions');
			return false;
		}
	}

	// Set correct answers
	var answers = ["b","a","d","b","d"];

	// Check answers
	for(i = 1; i <= total; i++){	
		if (eval('q'+1) == answers[i - 1]){
			score++;
		}
	}

	// Display results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>Votre score <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	alert(' Votre score '+score+' sur ' +total);

	return false;
}

// -> au clic sur le bouton click-quizz, container-apparait (change la valeur du top)
//Je sélectionne et stocke les éléments nécessaires à l'action
const clickQuizz = document.querySelector(".click-quizz");
const containerQuizz = document.querySelector(".container-quizz");
console.log(containerQuizz);

//Je les soumets à l'action
clickQuizz.addEventListener("click", function() {
    containerQuizz.classList.toggle("visible");
})
