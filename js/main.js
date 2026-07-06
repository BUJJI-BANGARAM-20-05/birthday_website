const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const musicBtn = document.getElementById("music_btn");
const birthdayAudio = document.getElementById("birthday_audio");

if (musicBtn && birthdayAudio) {
  let isPlaying = false;

  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      birthdayAudio.play();
      musicBtn.textContent = "⏸ Pause Birthday Music";
      isPlaying = true;
    } else {
      birthdayAudio.pause();
      musicBtn.textContent = "▶ Play Birthday Music";
      isPlaying = false;
    }
  });
}

const galleryImages = document.querySelectorAll(".gallery_img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox_img");
const closeLightbox = document.getElementById("close_lightbox");

if (galleryImages.length > 0 && lightbox && lightboxImg && closeLightbox) {
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("active");
      lightboxImg.src = "";
    }
  });
}

const surpriseBtn = document.getElementById("surprise_btn");
const hiddenMessage = document.getElementById("hidden_message");

if (surpriseBtn && hiddenMessage) {
  surpriseBtn.addEventListener("click", () => {
    hiddenMessage.classList.add("active");
    surpriseBtn.textContent = "Surprise Opened 💖";
    createConfetti();
  });
}

function createConfetti() {
  const emojis = ["🎉", "🎂", "💖", "✨", "🎁", "🌸", "🥳"];

  for (let i = 0; i < 45; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti_piece";
    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 1.5 + "s";
    confetti.style.fontSize = Math.random() * 16 + 18 + "px";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4500);
  }
}

const quizQuestions = [
  {
    question: "What is the safest way to make you smile?",
    options: [
      "Give you chocolate",
      "Send a cute message",
      "Annoy you lovingly",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "What is your most dangerous power?",
    options: [
      "Your smile",
      "Your attitude",
      "Your cute anger",
      "Your silent treatment"
    ],
    answer: 0
  },
  {
    question: "If you get angry, what should someone do first?",
    options: [
      "Say sorry quickly",
      "Bring food",
      "Stay silent and pray",
      "Call it cute and run away"
    ],
    answer: 1
  },
  {
    question: "What makes you extra special?",
    options: [
      "Your heart",
      "Your madness",
      "Your smile",
      "Everything together"
    ],
    answer: 3
  },
  {
    question: "On your birthday, what do you deserve the most?",
    options: [
      "Cake",
      "Gifts",
      "Love and attention",
      "Unlimited pampering"
    ],
    answer: 3
  },
  {
    question: "What should never disappear from your face?",
    options: [
      "Your smile",
      "Your cute expressions",
      "Your confidence",
      "All of these"
    ],
    answer: 3
  },
  {
    question: "What is your cutest habit?",
    options: [
      "Getting angry for small things",
      "Smiling without reason",
      "Acting innocent after doing drama",
      "All of these"
    ],
    answer: 3
  },
  {
    question: "What happens when you say 'I am fine'?",
    options: [
      "Everything is actually fine",
      "Danger level increases",
      "Someone should immediately apologize",
      "Both B and C"
    ],
    answer: 3
  },
  {
    question: "What is the best birthday gift for you?",
    options: [
      "A cute surprise",
      "A long sweet message",
      "A beautiful memory",
      "All of these together"
    ],
    answer: 3
  },
  {
    question: "Why is this website made for you?",
    options: [
      "Because you are special",
      "Because your smile matters",
      "Because you deserve something different",
      "All of the above"
    ],
    answer: 3
  }
];

let currentQuestion = 0;
let quizScore = 0;
let selectedAnswer = false;

const quizQuestion = document.getElementById("quiz_question");
const quizOptions = document.getElementById("quiz_options");
const quizNextBtn = document.getElementById("quiz_next_btn");
const questionCount = document.getElementById("question_count");
const quizScoreText = document.getElementById("quiz_score");
const quizCard = document.getElementById("quiz_card");
const quizResult = document.getElementById("quiz_result");
const resultTitle = document.getElementById("result_title");
const resultMessage = document.getElementById("result_message");
const restartQuiz = document.getElementById("restart_quiz");

function loadQuizQuestion() {
  if (!quizQuestion || !quizOptions) return;

  selectedAnswer = false;
  quizNextBtn.style.display = "none";

  const current = quizQuestions[currentQuestion];

  questionCount.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  quizScoreText.textContent = `Score: ${quizScore}`;
  quizQuestion.textContent = current.question;

  quizOptions.innerHTML = "";

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "quiz_option";
    button.textContent = option;

    button.addEventListener("click", () => {
      checkAnswer(button, index);
    });

    quizOptions.appendChild(button);
  });
}

function checkAnswer(button, index) {
  if (selectedAnswer) return;

  selectedAnswer = true;

  const correctIndex = quizQuestions[currentQuestion].answer;
  const allOptions = document.querySelectorAll(".quiz_option");

  allOptions.forEach((option, optionIndex) => {
    option.disabled = true;

    if (optionIndex === correctIndex) {
      option.classList.add("correct");
    }
  });

  if (index === correctIndex) {
    button.classList.add("correct");
    quizScore++;
    quizScoreText.textContent = `Score: ${quizScore}`;
  } else {
    button.classList.add("wrong");
  }

  quizNextBtn.style.display = "inline-flex";
}

if (quizNextBtn) {
  quizNextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
      loadQuizQuestion();
    } else {
      showQuizResult();
    }
  });
}

function showQuizResult() {
  quizCard.style.display = "none";
  quizResult.classList.add("active");

  if (quizScore === quizQuestions.length) {
    resultTitle.textContent = "Perfect Score! 🥳";
    resultMessage.textContent = "Okay okay, you know everything. This bond is officially too special.";
    createConfetti();
  } else if (quizScore >= 4) {
    resultTitle.textContent = "Very Good 😌💖";
    resultMessage.textContent = "Not bad at all. You passed the sweet test with beautiful marks.";
  } else {
    resultTitle.textContent = "Hmm... Suspicious 😏";
    resultMessage.textContent = "You need to know this special bond a little better. Retest is compulsory.";
  }
}

if (restartQuiz) {
  restartQuiz.addEventListener("click", () => {
    currentQuestion = 0;
    quizScore = 0;
    quizCard.style.display = "block";
    quizResult.classList.remove("active");
    loadQuizQuestion();
  });
}

loadQuizQuestion();