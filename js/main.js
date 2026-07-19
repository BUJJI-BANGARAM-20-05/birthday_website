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
  const emojis = ["🎉", "🎂", "💖", "✨", "🎁", "🥳","😍","🥰","😘","🥳","💋","👩🏻‍❤️‍👨🏻","🎊","🎀","🎈","❣️","🩷","❤️","💘","💗","💓","💞"];

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
    emoji: "🎂",
    question: "How many birthdays does an average person have?",
    options: ["One", "Every year", "Twelve", "It depends"],
    correctAnswer: 0,
    explanation: "Exactly! You are born only once; the rest are birthday anniversaries."
  },
  {
    emoji: "🕯️",
    question: "If you have 10 candles and blow out 3, how many candles remain?",
    options: ["3", "7", "10", "None"],
    correctAnswer: 2,
    explanation: "All 10 candles remain—the three are only blown out."
  },
  {
    emoji: "🐘",
    question: "Which is heavier: 1 kg of cake or 1 kg of chocolates?",
    options: ["Cake", "Chocolates", "Both are equal", "Depends on flavour"],
    correctAnswer: 2,
    explanation: "One kilogram is one kilogram, no matter what it is."
  },
  {
    emoji: "📅",
    question: "Some months have 30 days and some have 31. How many have 28 days?",
    options: ["One", "Two", "Six", "All twelve"],
    correctAnswer: 3,
    explanation: "Every month has at least 28 days."
  },
  {
    emoji: "🌧️",
    question: "A boy goes outside in heavy rain without an umbrella. Not one hair gets wet. Why?",
    options: ["He ran fast", "He wore a cap", "He is bald", "The rain was fake"],
    correctAnswer: 2,
    explanation: "Correct—she had no hair to get wet."
  },
  {
    emoji: "🥭",
    question: "You have 5 mangoes and take away 2. How many do you have?",
    options: ["2", "3", "5", "7"],
    correctAnswer: 0,
    explanation: "You took two, so those are the two you have."
  },
  {
    emoji: "💖",
    question: "Who deserves the biggest birthday smile today?",
    options: ["The cake", "The balloons", "My Bangaram", "The Birthday Boy"],
    correctAnswer: 2,
    explanation: "Absolutely! Today belongs to the birthday superstar....nahhh myy starrr."
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

const openLetterBtn = document.getElementById("open_letter_btn");
const letterIntro = document.getElementById("letter_intro");
const letterCard = document.getElementById("letter_card");

if (openLetterBtn && letterIntro && letterCard) {
  openLetterBtn.addEventListener("click", () => {
    letterIntro.style.display = "none";
    letterCard.classList.add("opened");

    if (typeof createConfetti === "function") {
      createConfetti();
    }
  });
}
