(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

      }

    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

	   if(numCorrect <6) {
document.getElementById("results2").innerHTML = "You are good at calm conflict!";
}
	
	if(numCorrect >=6) {
document.getElementById("results2").innerHTML = "You could do some further development in this area of your relationship. The score suggests that in conflict one or both of you may feel overwhelmed and ‘flooded’. When this occurs, your chances of resolving the issue are poor, because one or both of you are becoming too agitated.";
}   



  
	  var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['RESILIENCY'],
    datasets: [  {
    label: 'Calm',
    data: [myQuestions.length - numCorrect],
    backgroundColor: '#3e95cd' // blue
  },
  {
    label: 'Conflict',
    data: [numCorrect],
    backgroundColor: '#ff0000' // red
  }]

  },
  options: {
  		responsive: true,
      title: {
        display: false,
        text: 'Risk Score',
      },
      legend: { display: false },
      scales: {
                xAxes: [{
                	stacked: true,
                    ticks: {
                        beginAtZero: true,
                        max: myQuestions.length,
                		min: 0,
                		stepSize: myQuestions.length,

                    // Include a label for the ticks
                    callback: function(value, index, values) {
                        if (Math.floor(value) === 0){
        					return 'CALM CONFLICT';
      					}else if ([myQuestions.length]){
                        	return 'RED ALERT';
                        	}
                    }
                    }
                }],
                yAxes: [{
                	stacked: true,
                	display: false,
 					barThickness: 20               
                }]           
            }
     
    }
    
});
    
}

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
      startoverButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      previousButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
      startoverButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
  


  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "We are good at taking breaks when we need them.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "You usually accept my apologies.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "I can say that I am wrong.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
     {
      question: "I am pretty good at calming myself down.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
     {
      question: "We can maintain a sense of humour.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
     {
      question: "You yell unnecessarily.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "I feel overwhelmed by our arguments.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
  	{
      question: "I can’t think straight when you get hostile.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "We need to talk more logically.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "Your negative responses often come out of nowhere.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "Sometimes, there’s no stopping your temper.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "I feel like running away during our fights.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "Small issues suddenly become big ones.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "I can’t calm down during an argument.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "You have a long list of unreasonable demands.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    }
   ];
  

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  const startoverButton = document.getElementById('startover');
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

  startoverButton.addEventListener('click', function(e) {
      location.reload();
    }, false);



})();

