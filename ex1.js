const courseQuizzes = {
     "machine-learning": "https://www.aionlinecourse.com/ai-quiz-questions/machine-learning",
     "web-development": "https://www.w3schools.com/quiztest/",
};

document.querySelectorAll(".course a").forEach((button) => {
     button.addEventListener("click", () => {
          alert("Redirecting to course page...");
     });
});

const progressBars = document.querySelectorAll(".progress-bar");
const progressButtons = document.querySelectorAll(".progress-btn");

progressButtons.forEach((button, index) => {
     button.addEventListener("click", () => {
          const progressBar = progressBars[index];
          let currentProgress = parseInt(progressBar.style.width) || 0;
          if (currentProgress < 100) {
               currentProgress += 20;
               progressBar.style.width = `${currentProgress}%`;
               alert(`Course progress updated: ${currentProgress}%`);
               if (currentProgress === 100) {
                    alert("You’ve completed this course! Don’t forget to take the quiz. 🎉");
               }
          } else {
               alert("You have already completed this course! 🎉");
          }
     });
});

document.querySelectorAll(".quiz-btn").forEach((button) => {
     button.addEventListener("click", (event) => {
          const course = event.target.dataset.course;
          const quizUrl = courseQuizzes[course];

          if (quizUrl) {
               const confirmation = confirm(
                    `Ready to test your knowledge in ${course.replace("-", " ")}? Click OK to begin the quiz! 🚀`
               );
               if (confirmation) {
                    window.open(quizUrl, "_blank");
               }
          } else {
               alert("Quiz for this course is not available yet!");
          }
     });
});
